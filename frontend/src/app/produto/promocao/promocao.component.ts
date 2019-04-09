import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/model/produto.model';
import { TipoPromocao } from 'src/app/model/utils/tipoPromocao.enum';
import { Promocao } from 'src/app/model/promocao.model';
import { PromocaoService } from 'src/app/service/promocao.service';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.css'],
  providers: [PromocaoService, ProdutoService]
})
export class PromocaoComponent implements OnInit, OnChanges {

  public formulario: FormGroup;
  public sel1: FormGroup;
  @Input() produto: Produto;

  public promocoes: Promocao[];
  public promocao: Promocao;

  public atualizadoSucesso: Boolean;
  public primeiroAcesso: Boolean = true;
  

  constructor(private formBuilder: FormBuilder,
    private promService: PromocaoService,
    private prodService: ProdutoService) { }

  ngOnInit() {
    this.configurarFormulario();
    this.promService.buscaProm()
      .subscribe((retorno: any) => {
        console.log("Prom", retorno);
        return this.promocoes = retorno;
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges", changes);
  }

  filterChanged(selectedValue: number) {
    console.log('value is ', selectedValue);
    this.promService.buscaPromPorId(selectedValue)
      .subscribe((retorno : Promocao) => { 
        this.promocao = retorno;
        console.log(this.promocao.tipo); 
        this.formulario.setValue({
          nome: this.promocao.nome,
          qtdeItens: this.promocao.qtde,
          valor: this.promocao.pagar,
          tipo: this.promocao.tipo
        })    
        return this.promocao;
      });
    
      console.log(this.promocao);

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

    this.produto.promocao = this.promocao;

    console.log("produtoxprom", this.produto);
    this.prodService.atualizaPromocao(this.produto.id, this.produto)
      .subscribe((retorno: any) => {
        this.produto = retorno;
        this.primeiroAcesso = false;
        this.atualizadoSucesso = true;
        return this.produto;
      })

  }

  salvar() {
    console.log(this.sel1.value);
  }

  onChange($event, i) {
    console.log("Teste dropdown");
    console.log($event);
    console.log(i);
  }

}
