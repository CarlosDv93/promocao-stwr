import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PromocaoComponent } from './produto/promocao/promocao.component';

export const APP_ROUTES: Routes = [
    {path: "", component: ProdutoFormComponent},
    {path: "carrinho", component: CarrinhoComponent},
    {path: "produto/:id", component: ProdutoComponent},
    {path: "promocao", component: PromocaoComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);