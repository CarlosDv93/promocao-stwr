import { TipoPromocao } from './utils/tipoPromocao.enum';
import { Promocao } from './promocao.model';

export class PromocaoPreco extends Promocao {
  
  /*atributos da promoção*/
  private quantidade: number;
  private valor: number;

  constructor(nome: string, tipo: TipoPromocao, qtde: number, valor: number) {
    super(nome, tipo);
    this.quantidade = qtde;
    this.valor = valor;
  }

}
