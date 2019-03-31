import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Promocao } from '../model/promocao.model';

@Injectable()
export class PromocaoService {
    
    private url_api = 'http://localhost:8080/promocao'

    constructor(private httpClientModule : HttpClientModule,
        private http : HttpClient){
    }

    public buscaPromPorId(id: number) : Observable<Promocao>{
        return this.http.get(`${this.url_api}/${id}`)
            .map((retorno: Promocao) => {
                return retorno;
            })
    }

    public buscaProm() : Observable<Promocao[]>{
        return this.http.get(`${this.url_api}`)
            .map((retorno: Promocao[]) => {
                return retorno;
            })
    }
}