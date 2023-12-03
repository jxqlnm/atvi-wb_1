import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Atualizar from "./atualizar";
import ListagemClientes from "./listagemClientes";

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        console.log(`\nInicio da atualizaçao do cliente`);
        let busca = this.entrada.receberTexto(`Informe o número do CPF do cliente: `);
        let cont = 1

        this.clientes.forEach(cliente =>{
            if (cliente.getCpf.getValor == busca){
                console.log(`Cliente encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Informe o nome do cliente: `)
                let nomeSocial = this.entrada.receberTexto(`Informe o nome social do cliente: `)
                cliente.nome = nome
                cliente.nomeSocial = nomeSocial
                console.log(`\nCadastro atualizado \n`);
            }
            else if(cont == this.clientes.length){
                console.log(`\n nenhum cliente encontrado com o CPF informado! \n`); 
            }
            else{
                cont++
            }
                      
        })
    }
}