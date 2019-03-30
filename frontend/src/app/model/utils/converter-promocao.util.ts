import { Produto } from '../produto.model';
import { Promocao } from '../promocao.model';

export function ConverterProdutoPromocao(produto: Produto, promocao: Promocao) {

    let produtoConvertido : Produto;
    produtoConvertido = new Produto(produto.id, produto.nome, produto.valor, promocao );
    return produtoConvertido;
}