import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProdutos extends Cadastro {
    private nomes: Array<Produto>;
    private entrada: Entrada;

    constructor(nome: Array<Produto>) {
        super();
        this.nomes = nome;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInicio do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Informe o preço do produto: `);
        let produto = new Produto(nome, preco);
        
        this.nomes.push(produto);
        console.log(`\nCadastro concluído \n`);
    }
}
