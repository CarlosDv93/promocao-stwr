import { TipoPromocao } from './utils/tipoPromocao.enum';

export class Promocao {
    private nome: string;
    private tipoPromocao: TipoPromocao;

    constructor(nome: string, tipo: TipoPromocao){
        this.nome = nome;
        this.tipoPromocao = tipo;
    }
}