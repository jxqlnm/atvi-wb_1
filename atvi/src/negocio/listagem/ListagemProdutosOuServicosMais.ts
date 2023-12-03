import chalk from "chalk";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class ListagemProdutosOuServicosMais extends Listagem {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    private listarProdutos = () => {
        let lista = this.empresa.getProdutos.sort((p1, p2) => {
            if (p1.consumo > p2.consumo) return -1;
            else return 1;
        });
        console.log('\nListagem geral dos produtos mais consumidos');
        lista.forEach((produto, indice) => {
            console.log(`${indice + 1}° - ${produto.nome}: consumido ${produto.consumo} vezes`);
        });
    }

    private listarServicos = () => {
        let lista = this.empresa.getServicos.sort((s1, s2) => {
            if (s1.consumo > s2.consumo) return -1;
            else return 1;
        });
        console.log('\nListagem geral dos serviços mais consumidos');
        lista.forEach((servico, indice) => {
            console.log(`${indice + 1}° - ${servico.nome}: consumido ${servico.consumo} vezes`);
        });
    }

    public async listar(): Promise<void> {
        let consumoProduto: any = [];
        let consumoServico: any = [];
        let consumoP: any = [];

        consumoProduto.sort(function (n1, n2) {
            return n2.quantidadeProdutos - n1.quantidadeProdutos;
        });

        consumoServico.sort(function (n1, n2) {
            return n2.quantidadeServicos - n1.quantidadeServicos;
        });
        consumoServico = consumoServico.slice(0, 5);

        let exec = true;
        while (exec) {
            let entrada = new Entrada();
            console.log("------------------------------------------------");
            console.log(`Opção de Listagem.`);
            console.log(`1. Produto`);
            console.log(`2. Serviço`);
            let opcao = entrada.receberNumero(`Escolha uma opção: `);
            switch (opcao) {
                case 1:
                    console.log(chalk.greenBright("Listagem dos produtos mais consumidos em quantidade."));

                    console.log(chalk.red(`\n---------------------------------------------------------------\n`));

                    this.listarProdutos();
                    exec = false;
                    break;
                case 2:
                    console.log(chalk.greenBright("Listagem dos serviços mais consumidos em quantidade."));
                    console.log(chalk.red(`\n---------------------------------------------------------------\n`));
                    this.listarServicos();
                    exec = false;
                    break;
                default:
                    console.log(chalk.red(`Digite Uma Opção Válida!`));
                    exec = true;
            }
        }
    }
}
