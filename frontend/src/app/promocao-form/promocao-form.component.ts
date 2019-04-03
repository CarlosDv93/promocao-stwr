import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Promocao } from 'src/app/model/promocao.model';
import { PromocaoService } from './../service/promocao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public exibeLista: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private rota: ActivatedRoute,
    private route: Router,
    private promService: PromocaoService ) {

  }

  ngOnInit() {
    this.configuraForm();
    this.buscaProm();
    
    this.id = this.rota.snapshot.params['id'];
    

    if((typeof this.id) !== "undefined") {
      this.buscaPromPorID();
      console.log("Dentro do if")
      this.exibeLista = false;
    }
  }

  buscaPromPorID(): any {
    this.promService.buscaPromPorId(this.id)
    .subscribe(
      (retorno: Promocao) => {
        console.log(retorno)
        this.formulario.setValue({
          nome: retorno.nome,
          qtde: retorno.qtde,
          pagar: retorno.pagar,
          tipo: retorno.tipo
        })  
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
      nome: [null, Validators.required],
      qtde: [null, [Validators.required, Validators.min(1)]],
      pagar: [null, Validators.required],
      tipo: [null, Validators.required]
    });
  }

  salvarPromocao(){
    console.log(this.formulario.value)

    this.promService.inserePromocao(this.formulario.value)
      .subscribe((retorno: any) => {
        if(retorno.status == 201){
          //this.route.navigateByUrl(`/promocao`);
          this.buscaProm();
          
          //this.exibeLista = true;
        }
        console.log(retorno);
        this.formulario.reset();
        return retorno;
      })
  }

  atualizarProm(){
    console.log("Atualiza Promocao: ", this.formulario.value);
    console.log("Atualiza Promocao id: ", this.id);

    this.promService.atualizaPromocao(this.id, this.formulario.value)
      .subscribe((retorno: HttpResponse<Promocao>) => {
        console.log(retorno);
        this.route.navigate(['/promocao']);
        this.exibeLista = true;
      })
  }

}
