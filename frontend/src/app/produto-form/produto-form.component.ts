import { ProdutoService } from 'src/app/service/produto.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [ProdutoService]
})
export class ProdutoFormComponent implements OnInit {

  public formulario : FormGroup;
  public retorno: any;
  public primeiroAcesso: Boolean = true;
  public inseridoSucesso: Boolean = false;
  public atualizar : Boolean = false;
  public observable: Observable<HttpResponse<Produto>>;

  constructor(private formBuilder: FormBuilder,
    private http : HttpClient,
    private prodService : ProdutoService) { 
      
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
    this.observable = this.prodService.salvarProduto(this.formulario.value as Produto);

    this.observable.subscribe((retorno: any ) => {
      console.log("Retorno Inserção:", retorno)
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