import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto.model';
/*Para adicionar R$ 9,99*/
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoService, {provide: LOCALE_ID, useValue: 'pt'}]
})
export class ProdutoComponent implements OnInit {

  private id: number;
  public produto: Produto;

  constructor(
    private rota: ActivatedRoute,
    private produtoService: ProdutoService) {
    this.id = this.rota.snapshot.params['id'];
  }

  ngOnInit() {

    console.log(this.id);

    this.produtoService.buscaProdutoPorId(this.id)
      .subscribe((retorno: Produto) => {
        console.log(retorno);
          this.produto = retorno;
      });

  }

}
