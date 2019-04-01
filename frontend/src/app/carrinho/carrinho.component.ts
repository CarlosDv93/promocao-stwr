import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Promocao } from '../model/promocao.model';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../service/produto.service';
import { ProdutoXPromocao } from '../model/produtoxPromocao.model';

import 'rxjs/add/operator/map';
import { TipoPromocao } from '../model/utils/tipoPromocao.enum';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  providers: [ProdutoService]
})
export class CarrinhoComponent implements OnInit, OnChanges {

  public produtosXProm: ProdutoXPromocao[] = [];
  public produtos: Produto[];
  public qtdeForm = new FormControl('');

  public nomeProd: any;
  public valor: any;
  public valorTotal: any;
  public promocao: Promocao;


  constructor(private prodService: ProdutoService) {
    //this.calcularValorxProduto();
  }

  ngOnInit() {
    this.prodService.buscaProdutoParaCarrinho()
      .subscribe((sucesso: any) => {
        console.log(sucesso);
        this.produtos = sucesso;
        this.transformarProdutoXProdProm();
        return this.produtos
      },
        (error: any) => {
          console.log(error);
          return error;
        }
      )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public alterarQtde(produto: ProdutoXPromocao) {
    console.log("Alterar Qtde", this.qtdeForm.value);

    if (produto.promocao == null) {
      produto.valorPagar = produto.valor * this.qtdeForm.value;
    } else if (produto.promocao.tipo == TipoPromocao.PRECO) {
      if (this.qtdeForm.value > produto.promocao.qtde) {
        //Valor a Pagar / Quantidade de promocao usada
        let promQtde = this.qtdeForm.value / produto.promocao.qtde;
        promQtde = Math.trunc(promQtde);
        console.log(promQtde);
        produto.valorPagar = promQtde * produto.promocao.pagar;

        //Quantidade não dentro da promocao
        let promQtdeOut = this.qtdeForm.value % produto.promocao.qtde;
        console.log(promQtdeOut);
        produto.valorPagar = produto.valorPagar + (promQtdeOut * produto.valor);

      } else {
        produto.valorPagar = produto.valor * this.qtdeForm.value;
      }
    } else if (produto.promocao.tipo == TipoPromocao.QUANTIDADE) {
      //Quantidade de promocao / Quantidade a pagar
      let promQtde = this.qtdeForm.value / produto.promocao.qtde;
      promQtde = Math.trunc(promQtde);
      console.log(promQtde);
      produto.valorPagar = promQtde * produto.valor;

      //Quantidade não dentro da promocao
      let promQtdeOut = this.qtdeForm.value % produto.promocao.qtde;
      console.log(promQtdeOut);
      produto.valorPagar = produto.valorPagar + (promQtdeOut * produto.valor);
    }



    console.log("Valor Total: " + produto.valorPagar);
  }

  public calcularValor(): number {


    return this.valorTotal;
  }

  transformarProdutoXProdProm() {
    this.produtos
      .map((d) => this.produtosXProm.push(new ProdutoXPromocao(d)));
    console.log("ProdxProm", this.produtosXProm);
  }

}
