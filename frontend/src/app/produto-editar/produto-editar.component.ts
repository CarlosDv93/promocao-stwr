import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../model/produto.model';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css'],
  providers: [ ProdutoService, ActivatedRoute ]
})
export class ProdutoEditarComponent implements OnInit {
  
  public formulario : FormGroup;
  public produto: Produto;
  public primeiroAcesso: Boolean = true;
  public inseridoSucesso: Boolean = false;
  public id : number
  
  constructor(private formBuilder: FormBuilder,
    private prodService: ProdutoService,
    private route: Router,
    private activatedRoute : ActivatedRoute) {
      
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.buscarProduto(this.id);
    console.log(this.id);
  }

  public buscarProduto(id: number): any {
    this.prodService.buscaProdutoPorId(id)
      .subscribe((retorno : any) => {
        this.produto = retorno;
        this.configurarFormulario();
      })
  }

  public configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [this.produto.nome, Validators.required],
      valor: [this.produto.valor, [Validators.required]]
    });
  }

  public editar(id: number, formulario: Produto) {
    this.prodService.editarProduto(id, formulario)
      .subscribe(
        (retorno: any)=> {
          if(retorno.status == 201){
            this.route.navigateByUrl('/');
          }
        }
      )
  }
  

}
