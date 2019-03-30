import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutosComponent } from './produto-form/lista-produtos/lista-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PromocaoComponent } from './produto/promocao/promocao.component';
import { ProdutoComponent } from './produto/produto.component';
import { TopoComponent } from './topo/topo.component';
import { AppRoutingModule } from './app-routing.module';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    ListaProdutosComponent,
    CarrinhoComponent,
    PromocaoComponent,
    ProdutoComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
