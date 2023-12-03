import Listagem from "./listagem";
import Produto from "../modelo/produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Produto[];

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
    }

    public listar(): void {
        console.log(`\nLista de todos os produtos:`);

        this.produtos.forEach(produto => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ${produto.getNome()}`);
            console.log(`Preço: ${produto.getPreco()}`);
        });

        console.log(`\n`);
    }

    public quantidadeProduto(): number {
        const cont = this.produtos.length;
        console.log(cont);
        return cont;
    }
}
