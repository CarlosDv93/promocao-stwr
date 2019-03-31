import { TipoPromocao } from './utils/tipoPromocao.enum';

export class Promocao {
    public id : number;
    public nome: string;
    public tipo: TipoPromocao;
	public qtde : number;
	public pagar : number;

    constructor(id: number, nome: string, tipo: TipoPromocao, qtde: number, pagar: number){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.qtde = qtde;
        this.pagar = pagar;
    }

}