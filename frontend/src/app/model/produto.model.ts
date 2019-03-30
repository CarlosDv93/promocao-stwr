import { Promocao } from './promocao.model';

export class Produto {
    public id : number;
    public nome : string;
    public valor: number;
    public promocao: Promocao;

    constructor(id:number, nome:string, valor:number, promocao?: Promocao){
        this.valor = valor;
        this.id = id;
        this.nome = nome;
        this.promocao = promocao;
    }

    public getPromocao() {
        return this.promocao;
    }

    public getId(){
        return this.id ;
    }

    public getValor(){
        return this.valor;
    }

    public getNome(){
        return this.nome;
    }

    public setPromocao(promo: Promocao) {
        this.promocao = promo;
    }

    public setId(id: number){
        this.id = id;
    }

    public setValor(valor: number){
        this.valor = valor;
    }

    public setNome(nome: string){
        this.nome = nome;
    }
}
