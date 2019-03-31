import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  public formulario : FormGroup;
  public retorno: any;
  public primeiroAcesso: Boolean = true;
  public inseridoSucesso: Boolean = false;
  public atualizar : Boolean = false;

  constructor(private formBuilder: FormBuilder,
    private http : HttpClient) { 

  }

  ngOnInit() {
    this.configurarFormulario();
  }

  public configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      valor: [null, [Validators.required]]
    });
  }
  
  public options = { 
    headers: "'Content-Type':  'application/json', 'Access-Control-Allow-Origin': '*'",
    observe: 'response'
  };

  enviar(){
    console.log(this.formulario);
    this.atualizar = false;
    this.http.post(`http://127.0.0.1:8080/produto`, this.formulario.value)
      .subscribe((retorno: any ) => {
        if(retorno.status === 201){
          this.inseridoSucesso = true;
          this.primeiroAcesso = false;
        }
        console.log("Retorno: ", retorno.status);
        this.atualizar = true;
      }, 
      (error : HttpErrorResponse) => {
        console.log("Error: " , error.status)
        this.inseridoSucesso = false;
        this.primeiroAcesso = false;
      })    

      this.formulario.reset();
  }
      
}