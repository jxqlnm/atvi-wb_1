import Servico from "../../modelo/servico";
import Produto from "../../modelo/produto";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";
import Entrada from "../../io/entrada";
import chalk from "chalk";

export default class ListaGeneroConsumo extends Listagem {
    private empresa: Empresa 
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    private listaProduto = {
        listaFem: [],
        listaMasc: [],
        listaOutros: []
    }

    private listaServico = {
        listaFem: [],
        listaMasc: [],
        listaOutros: []
    }

    private registrarItens = () => {
        this.empresa.getClientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(p => {
                let produto = new Produto(p.nome, p.preco);
                switch(cliente.getGeneroChar()){
                    case 'Feminino':
                        if (this.listaProduto.listaFem.length == 0) {
                            produto.addConsumo();
                            this.listaProduto.listaFem.push(produto);
                        } else {
                            let produtoEncontrado = this.listaProduto.listaFem.find(prod => {
                                return produto.nome == prod.nome
                            });
                            if (produtoEncontrado == undefined){
                                produto.addConsumo();
                                this.listaProduto.listaFem.push(produto);
                            } else {
                                produtoEncontrado.addConsumo();
                            }
                        }
                        break;
                    case 'Masculino':
                        if (this.listaProduto.listaMasc.length == 0) {
                            produto.addConsumo();
                            this.listaProduto.listaMasc.push(produto);
                        } else {
                            let produtoEncontrado = this.listaProduto.listaMasc.find(prod => {
                                return produto.nome == prod.nome
                            });
                            if (produtoEncontrado == undefined){
                                produto.addConsumo();
                                this.listaProduto.listaMasc.push(produto);
                            } else {
                                produtoEncontrado.addConsumo();
                            }
                        }
                        break;
                    default:
                        if (this.listaProduto.listaOutros.length == 0) {
                            produto.addConsumo();
                            this.listaProduto.listaOutros.push(produto);
                        } else {
                            let produtoEncontrado = this.listaProduto.listaOutros.find(prod => {
                                return produto.nome == prod.nome
                            });
                            if (produtoEncontrado == undefined){
                                produto.addConsumo();
                                this.listaProduto.listaOutros.push(produto);
                            } else {
                                produtoEncontrado.addConsumo();
                            }
                        }
                }
            });
            cliente.getServicosConsumidos.forEach(s => {
                let servico = new Servico(s.nome, s.preco);
                switch(cliente.getGeneroChar()){
                    case 'Feminino':
                        if (this.listaServico.listaFem.length == 0) {
                            servico.addConsumo();
                            this.listaServico.listaFem.push(servico);
                        } else {
                            let servicoEncontrado = this.listaServico.listaFem.find(serv => {
                                return servico.nome == serv.nome
                            });
                            if (servicoEncontrado == undefined){
                                servico.addConsumo();
                                this.listaServico.listaFem.push(servico);
                            } else {
                                servicoEncontrado.addConsumo();
                            }
                        }
                        break;
                    case 'Masculino':
                        if (this.listaServico.listaMasc.length == 0) {
                            servico.addConsumo();
                            this.listaServico.listaMasc.push(servico);
                        } else {
                            let servicoEncontrado = this.listaServico.listaMasc.find(prod => {
                                return servico.nome == prod.nome
                            });
                            if (servicoEncontrado == undefined){
                                servico.addConsumo();
                                this.listaServico.listaMasc.push(servico);
                            } else {
                                servicoEncontrado.addConsumo();
                            }
                        }
                        break;
                    default:
                        if (this.listaServico.listaOutros.length == 0) {
                            servico.addConsumo();
                            this.listaServico.listaOutros.push(servico);
                        } else {
                            let servicoEncontrado = this.listaServico.listaOutros.find(prod => {
                                return servico.nome == prod.nome
                            });
                            if (servicoEncontrado == undefined){
                                servico.addConsumo();
                                this.listaServico.listaOutros.push(servico);
                            } else {
                                servicoEncontrado.addConsumo();
                            }
                        }
                }
            });
        });
        let listaLista = [
            this.listaProduto.listaFem, this.listaProduto.listaMasc, this.listaProduto.listaOutros,
            this.listaServico.listaFem, this.listaServico.listaMasc, this.listaServico.listaOutros
        ]
        listaLista.forEach(lista => {
            lista.sort((item1, item2) => {
                if (item1.consumo > item2.consumo) return -1
                else return 1
            });
        })
    }

    listar(): void {
        let exec = true
        this.registrarItens();
        while (exec) {
            let entrada = new Entrada()
            console.log("------------------------------------------------");
            console.log(`Opçao de Listagem.`);
            console.log(`1Produto`);
            console.log(`2Serviço`); 
            let opcao = entrada.receberNumero(`Por favor, escolha uma opçao: `)
            switch (opcao) {
                case 1:
                    console.log('\nLista de produtos mais consumidos pelo público...')
                    console.log('\nFEMININO')
                    this.listaProduto.listaFem.forEach(produto => {
                        console.log(`- ${produto.nome}: Consumido ${produto.consumo} vezes`)
                    });
                    console.log('---------------');
                    console.log('\nMASCULINO')
                    this.listaProduto.listaMasc.forEach(produto => {
                        console.log(`- ${produto.nome}: Consumido ${produto.consumo} vezes`)
                    });
                    console.log('---------------');
                    exec = false
                    break
                case 2:
                    console.log('\nLista de serviços mais consumidos pelo público...');
                    console.log('\nFEMININO')
                    this.listaServico.listaFem.forEach(servico => {
                        console.log(`- ${servico.nome}: Consumido ${servico.consumo} vezes`)
                    });
                    console.log('---------------');
                    console.log('\nMASCULINO')
                    this.listaServico.listaMasc.forEach(servico => {
                        console.log(`- ${servico.nome}: Consumido ${servico.consumo} vezes`)
                    });
                    console.log('---------------');
                    exec = false
                    break
                default:
                    console.log(chalk.red(`Digite Uma Opçao Valida!`));
                    exec = true 
                }
        }
    }

}