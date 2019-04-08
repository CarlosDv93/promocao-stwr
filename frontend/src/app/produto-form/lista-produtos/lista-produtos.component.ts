import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../model/produto.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit, OnChanges {

  public produtos : Produto[];
  @Input() atualizar : Boolean;

  constructor(private http : HttpClient) { 
  }

  ngOnInit() {
    this.buscarProdutos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
    if(this.atualizar == true){
      this.atualizarLista();
      this.atualizar = false;
    }
  }

  buscarProdutos() : void {
    console.log("BuscarProdutos")
    this.http.get(`http://127.0.0.1:8080/produto`)
      .subscribe((retorno: any ) => {
        console.log("Retorno buscar: ", retorno);
        return this.produtos = retorno;
      })
  }

  atualizarLista() {
    this.buscarProdutos();
  }

}
