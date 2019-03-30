import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';
import 'rxjs/add/operator/map';
import { ConverterProdutoPromocao } from '../model/utils/converter-promocao.util';

@Injectable()
export class ProdutoService {
    
    private url_api = 'http://localhost:8080/produto'

    constructor(private httpClientModule : HttpClientModule,
        private http : HttpClient){
    }

    public buscaProdutoPorId(id: number) : Observable<Produto>{
        return this.http.get(`${this.url_api}/${id}`)
            .map((retorno: Produto) => {
                return retorno;
            })
    }
}