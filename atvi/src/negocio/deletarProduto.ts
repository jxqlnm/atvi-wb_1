import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Excluir from "./deletar";

let executa = true

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInicio da Exclusao do Produto`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Informe o nome do Produto: `);
            let cont = 1
            this.produtos.forEach(produto =>{
                if (produto.nome == busca){
                    console.log(`Produto encontrado, deseja realmente excluir o Produto?`);
                    let confirma = this.entrada.receberNumero(`1. Excluir, 2. Cancelar: `)
                    switch(confirma){
                        case 1:
                            let indice = this.produtos.indexOf(produto)
                            this.produtos.splice(indice, 1)
                            console.log(`Produto excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break;
                            
                    }
                }
                else if(cont == this.produtos.length){
                    console.log(`\nNenhum Produto encontrado com o nome informado! \n`); 
                    executa = false
                }
                else{
                    cont++
                }
            })
                
                        
        }
    }

}