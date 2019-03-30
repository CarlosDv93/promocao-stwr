import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoService]
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
