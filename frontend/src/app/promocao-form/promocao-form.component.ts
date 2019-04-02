import { ActivatedRoute } from '@angular/router';
import { Promocao } from 'src/app/model/promocao.model';
import { PromocaoService } from './../service/promocao.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocao-form',
  templateUrl: './promocao-form.component.html',
  styleUrls: ['./promocao-form.component.css'],
  providers: [ FormBuilder, PromocaoService ]
})
export class PromocaoFormComponent implements OnInit {

  public formulario: FormGroup;
  public allPromocao: Promocao[];
  public promocao: Promocao;
  private id: number;
  private exibeLista: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private rota: ActivatedRoute,
    private promService: PromocaoService ) {

  }

  ngOnInit() {
    this.configuraForm();
    this.buscaProm();
    this.id = this.rota.snapshot.params['id'];

    if(this.id !== null || this.id !== undefined) {
      this.buscaPromPorID();
      this.exibeLista = false;
    }
  }

  buscaPromPorID(): any {
    this.promService.buscaPromPorId(this.id)
    .subscribe(
      (retorno: Promocao) => {
        return this.promocao = retorno;
      } )
  }

  buscaProm(): any {
    this.promService.buscaProm()
      .subscribe(
        (retorno: Promocao[]) => {
          return this.allPromocao = retorno;
        } )
  }
  
  configuraForm(): any {
    this.formulario = this.formBuilder.group({
      nome: [null],
      qtde: [null],
      pagar: [null],
      tipo: [null]
    });
  }

  salvarPromocao(){
    console.log(this.formulario.value)

    this.promService.inserePromocao(this.formulario.value)
      .subscribe((retorno: any) => {
        console.log(retorno);
        return retorno;
      })
  }

}
