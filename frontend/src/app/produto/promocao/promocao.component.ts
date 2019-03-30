import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/model/produto.model';
import { TipoPromocao } from 'src/app/model/utils/tipoPromocao.enum';
import { PromocaoPreco } from 'src/app/model/promocao-preco.model';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.css']
})
export class PromocaoComponent implements OnInit {

  public formulario : FormGroup;
  @Input() produto: Produto;
  public produtoXProm: Produto;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  public configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      qtdeItens: [null, [Validators.required]],
      valor: [null],
      tipo: [null]
    });
  }

  salvarPromocao(){

    console.log(this.formulario.value);
    console.log(this.produto);

    let nomePromocao = this.formulario.value.nome;
    let quantidade = this.formulario.value.qtdeItens;
    let valorItens = this.formulario.value.valor;

    if(this.formulario.value.tipo == 'preco'){
      let promocao = new PromocaoPreco(nomePromocao, TipoPromocao.PRECO, quantidade, valorItens);
      console.log(promocao);
      this.produtoXProm = new Produto(this.produto.id, this.produto.nome, this.produto.valor, promocao );
    }

    console.log(this.produtoXProm);

  }

}
