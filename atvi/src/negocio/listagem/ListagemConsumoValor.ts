import chalk from "chalk";
import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class ListagemComusumoValor extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
    }
    public listar(): void {
        const getValorTotal = (Array) => {
            let total = 0;
            Array.forEach(item => {
                total = total + item.preco
            });
            return total;
        }

        let lista = this.empresa.getClientes
        let listaProduto = [];
        let listaServico = [];

        // copiando lista de clientes para ambas as listas para nao afetar a lista principal
        lista.forEach(cliente => {
            listaProduto.push(cliente);
            listaServico.push(cliente);
        });

        // ordenando as listas copiadas
        listaProduto.sort((c1, c2) => {
            let consumoC1 = getValorTotal(c1.getProdutosConsumidos);
            let consumoC2 = getValorTotal(c2.getProdutosConsumidos);
            if (consumoC1 > consumoC2) {return -1}
            return 1
        });
        listaServico.sort((c1, c2) => {
            let consumoC1 = getValorTotal(c1.getServicosConsumidos);
            let consumoC2 = getValorTotal(c2.getServicosConsumidos);
            if (consumoC1 > consumoC2) {return -1}
            return 1
        });

        let exec = true
        while (exec) {
            let entrada = new Entrada()
            console.log("------------------------------------------------");
            console.log(`Opçao de Listagem.`);
            console.log(`1. Produto`);
            console.log(`2. Serviço`); 
            let opcao = entrada.receberNumero(`Por favor, escolha uma opçao: `)
            switch (opcao) {
                case 1:
                    console.log(chalk.greenBright('\nListagem de clientes que MAIS consumiram produtos em VALOR'));
                    listaProduto.forEach((cliente, indice) => {
                        let txt = `${indice + 1}° - R$${getValorTotal(cliente.getProdutosConsumidos)} em produtos consumidos`

                        console.log(`${indice + 1}° - ${cliente.nome}: ${txt}`)
                    });
                    exec = false
                    break
                case 2:
                    console.log(chalk.greenBright('\nListagem de clientes que MAIS consumiram serviços em VALOR'));
                    listaServico.forEach((cliente, indice) => {

                        let txt = `${indice + 1}° - R$${getValorTotal(cliente.getServicosConsumidos)} em serviços consumidos`

                        console.log(`${indice + 1}° - ${cliente.nome}: ${txt}`)
                    });
                    exec = false
                    break
                default:
                    console.log(chalk.red(`Digite Uma Opçao Valida!`));
                    exec = true 
                        

            }
        }
        
        
        }
}