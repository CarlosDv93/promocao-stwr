import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/model/produto.model';
import { TipoPromocao } from 'src/app/model/utils/tipoPromocao.enum';
import { Promocao } from 'src/app/model/promocao.model';
import { PromocaoService } from 'src/app/service/promocao.service';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.css'],
  providers: [PromocaoService]
})
export class PromocaoComponent implements OnInit {

  public formulario: FormGroup;
  public sel1 : FormGroup;
  @Input() produto: Produto;

  public promocoes: Promocao[];

  constructor(private formBuilder: FormBuilder,
    private promService: PromocaoService) { }

  ngOnInit() {
    this.configurarFormulario();
    this.promService.buscaProm()
      .subscribe((retorno: any) => {
        console.log("Prom" , retorno);
        return this.promocoes = retorno;
      })
  }

  public configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      qtdeItens: [null, [Validators.required]],
      valor: [null],
      tipo: [null]
    });

    this.sel1 = this.formBuilder.group({
      sel1: [null]
    })
  }

  salvarPromocao() {

    console.log(this.formulario.value);
    console.log(this.produto);

    let nomePromocao = this.formulario.value.nome;
    let quantidade = this.formulario.value.qtdeItens;
    let valorItens = this.formulario.value.valor;

    if (this.formulario.value.tipo == 'preco') {
      //vincular Promoção ao Produto

    }

  }

  salvar(){
    console.log(this.sel1.value);
  }

  onChange($event, i){
    console.log("Teste dropdown");
    console.log($event);
    console.log(i);
  }

}
