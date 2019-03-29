import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  public formulario : FormGroup;
  public retorno: any;

  constructor(private formBuilder: FormBuilder,
    private http : HttpClient) { 

  }

  ngOnInit() {
    this.configurarFormulario();
  }

  public configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeProd: [null, Validators.required],
      valor: [null, [Validators.required, Validators.email]]
    });
  }
  
  enviar(){
    let options = { 
      headers: "'Content-Type':  'application/json', 'Access-Control-Allow-Origin': '*'",
      observe: 'response'};

    console.log(this.formulario);
    this.http.post(`http://127.0.0.1:8080/produto`, this.formulario.value, options)
      .subscribe((retorno: any ) => {
        console.log("Retorno: ");
      })    
  }


}
