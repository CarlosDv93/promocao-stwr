import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Promocao } from '../model/promocao.model';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  providers: [ProdutoService]
})
export class CarrinhoComponent implements OnInit, OnChanges {

  public produtos: Produto[];
  public qtdeForm = new FormControl('');

  public nomeProd: any;
  public valor: any;
  public valorTotal: any;
  public promocao: Promocao;


  constructor(private prodService: ProdutoService) {
    this.calcularValorxProduto();
  }

  ngOnInit() {
    this.produtos = this.prodService.buscaProduto()
      .subscribe((sucesso: any) => {
        console.log(sucesso);
        return this.produtos = sucesso;
      },
        (error: any) => {
          console.log(error);
          return error;
        }
      )

    console.log(this.produtos);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public alterarQtde(produto: Produto) {
    console.log("Alterar Qtde");
    this.valorTotal = produto.valor * this.qtdeForm.value;
    console.log("Valor Total: " + this.valorTotal);
  }

  public calcularValor(): number {


    return this.valorTotal;
  }

  calcularValorxProduto() {

  }

}
