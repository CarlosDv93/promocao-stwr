import { TipoPromocao } from './utils/tipoPromocao.enum';
import { Promocao } from './promocao.model';

export class PromocaoQuantidade extends Promocao {
  
  /*atributos da promoção*/
  private quantidadeLevar: number;
  private quantidadePagar: number;

  constructor(nome: string, tipo: TipoPromocao, quantidadeLevar: number, quantidadePagar: number) {
    super(nome, tipo);
    this.quantidadeLevar = quantidadeLevar;
    this.quantidadePagar = quantidadePagar;
  }

}
