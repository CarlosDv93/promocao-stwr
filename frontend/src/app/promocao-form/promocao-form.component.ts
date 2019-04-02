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

  constructor(
    private formBuilder: FormBuilder,
    private promService: PromocaoService ) {

  }

  ngOnInit() {
    this.configuraForm();
  }
  
  configuraForm(): any {
    this.formulario = this.formBuilder.group({
      nome: [null],
      qtdeItens: [null],
      valor: [null],
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
