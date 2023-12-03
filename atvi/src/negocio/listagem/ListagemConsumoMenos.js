"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
class ListagemConsumoMenos extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            let consumoProduto = [];
            let consumoServico = [];
            this.clientes.forEach(cliente => {
                let produtosConsumidosTamanho = cliente.getProdutosConsumidos.length;
                consumoProduto.push({
                    nome: cliente.nome,
                    cpf: cliente.getCpf.getValor,
                    quantidadeProdutos: produtosConsumidosTamanho
                });
                let servicosConsumidosTamanho = cliente.getServicosConsumidos.length;
                consumoServico.push({
                    nome: cliente.nome,
                    cpf: cliente.getCpf.getValor,
                    quantidadeServicos: servicosConsumidosTamanho
                });
            });
            consumoProduto.sort(function (n1, n2) {
                return n1.quantidadeProdutos - n2.quantidadeProdutos;
            });
            consumoProduto = consumoProduto.slice(0, 10);
            consumoServico.sort(function (n1, n2) {
                return n1.quantidadeServicos - n2.quantidadeServicos;
            });
            consumoServico = consumoServico.slice(0, 10);
            let exec = true;
            while (exec) {
                let entrada = new entrada_1.default();
                console.log("------------------------------------------------");
                console.log(`Opeçao de Listagem.`);
                console.log(`1. Produto`);
                console.log(`2. Serviço`);
                let opcao = entrada.receberNumero(`Por favor, escolha uma opçao: `);
                switch (opcao) {
                    case 1:
                        console.log(chalk_1.default.blue("Listagem dos 10 Clientes que Menos consumiram produtos em quantidade."));
                        console.log(chalk_1.default.red(`\n---------------------------------------------------------------\n`));
                        consumoProduto.forEach(cliente => {
                            console.log(chalk_1.default.blueBright('Nome do Cliente: ') + cliente.nome);
                            console.log(chalk_1.default.blueBright('CPF do Cliente: ') + cliente.cpf);
                            console.log(chalk_1.default.blueBright('Quantidade de Produtos Consumidos pelo Cliente: ') + cliente.quantidadeProdutos);
                            console.log(chalk_1.default.red(`\n---------------------------------------------------------------\n`));
                        });
                        exec = false;
                        break;
                    case 2:
                        console.log(chalk_1.default.blue("Listagem dos 10 Clientes que Menos consumiram serviços em quantidade."));
                        console.log(chalk_1.default.red(`\n---------------------------------------------------------------\n`));
                        consumoServico.forEach(cliente => {
                            console.log(chalk_1.default.blueBright('Nome do Cliente: ') + cliente.nome);
                            console.log(chalk_1.default.blueBright('CPF do Cliente: ') + cliente.cpf);
                            console.log(chalk_1.default.blueBright('Quantidade de Serviços Consumidos pelo Cliente: ') + cliente.quantidadeServicos);
                            console.log(chalk_1.default.red(`\n---------------------------------------------------------------\n`));
                        });
                        exec = false;
                        break;
                    default:
                        console.log(chalk_1.default.red(`Digite Uma Opçao Valida!`));
                        exec = true;
                }
            }
        });
    }
}
exports.default = ListagemConsumoMenos;
