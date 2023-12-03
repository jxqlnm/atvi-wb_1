import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produtos => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + produtos.nome);
            console.log('Preço: ' + produtos.preco);
            
        });
        console.log(`\n`);
    }
    public quantidadeProduto(){
        let cont = this.produtos.length
        console.log(cont);
        
        return cont
    }
}