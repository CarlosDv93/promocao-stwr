import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css'],
  providers: [ProdutoService]
})
export class EditarProdutoComponent implements OnInit {

  private id : number;
  public formulario : FormGroup;
  public primeiroAcesso: Boolean = true;
  public inseridoSucesso: Boolean = false;

  constructor(private formBuilder: FormBuilder, 
    private rota: ActivatedRoute,
    private prodService: ProdutoService) {
      this.formulario = this.formBuilder.group({
        nome: [null],
        valor: [null]
      })
    }

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];
    console.log("ID da URL:", this.id);
    this.configuraFormulario();
  }

  public configuraFormulario(){
    this.prodService.buscaProdutoPorId(this.id)
      .subscribe((retorno: any)=> {
        console.log("Produto: ", retorno.nome)
        this.formulario = this.formBuilder.group({
          nome: [retorno.nome, Validators.required],
          valor: [retorno.valor, [Validators.required, Validators.min(0.01)]]
        });
      })
  }

  public editar(){
    console.log("Formulário: ", this.formulario.value);
    this.prodService.editarProduto(this.id, this.formulario.value)
      .subscribe(
        (retorno: any)=> {
          console.log(retorno);
          if(retorno.status == '200'){
            this.inseridoSucesso = true;
          }
        },
        (erro: any)=> {
          this.inseridoSucesso = false;
          this.primeiroAcesso = false;
        }
      )
  }

}
