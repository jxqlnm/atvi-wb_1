import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizar from "./atualizar";

export default class AtualizarProdutos extends Atualizar{
    private produtos:Array<Produto>
    private entrada: Entrada
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        let cont = 1
        console.log(`\nInicio da atualizaçao do produto`);
        let busca = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        this.produtos.forEach(produto =>{
            if (produto.nome == busca){
                console.log(`Produto encontrado, forneça as informações!`);
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do Produto: `)
                produto.nome = nome
               
                console.log(`\nCadastro atualizado \n`);
            }
            else if(cont == this.produtos.length){
                console.log(`\n nenhum Produto encontrado com o nome informado!!! \n`); 
            }
            else{
                cont++
            }
                      
        })
        
        
    }
}