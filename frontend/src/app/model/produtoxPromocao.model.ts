import { Promocao } from './promocao.model';
import { Produto } from './produto.model';

export class ProdutoXPromocao {
    public id : number;
    public nome : string;
    public valor: number;
    public valorPagar: number;
    public promocao: Promocao;

    constructor(produto: Produto){
        this.valor = produto.valor;
        this.id = produto.id;
        this.nome = produto.nome;
        this.valorPagar = 0;
        this.promocao = produto.promocao;
    }

}