import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { PromocaoFormComponent } from './promocao-form/promocao-form.component';
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
    {path: "produto/editar/:id", component: EditarProdutoComponent},
    {path: "promocao/:id", component: PromocaoFormComponent},
    {path: "promocao", component: PromocaoFormComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);