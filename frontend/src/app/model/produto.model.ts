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

}
