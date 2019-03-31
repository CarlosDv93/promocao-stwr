import { TipoPromocao } from './utils/tipoPromocao.enum';

export class Promocao {
    private id : number;
    private nome: string;
    private tipoPromocao: TipoPromocao;
	private qtde : number;
	private pagar : number;

    constructor(id: number, nome: string, tipo: TipoPromocao, qtde: number, pagar: number){
        this.id = id;
        this.nome = nome;
        this.tipoPromocao = tipo;
        this.qtde = qtde;
        this.pagar = pagar;
    }
}