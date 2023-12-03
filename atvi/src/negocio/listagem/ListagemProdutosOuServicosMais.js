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
class ListagemProdutosOuServicosMais extends listagem_1.default {
    constructor(empresa) {
        super();
        this.listarProdutos = () => {
            let lista = this.empresa.getProdutos.sort((p1, p2) => {
                if (p1.consumo > p2.consumo)
                    return -1;
                else
                    return 1;
            });
            console.log('\nListagem geral dos produtos mais consumidos');
            lista.forEach((produto, indice) => {
                console.log(`${indice + 1}° - ${produto.nome}: consumido ${produto.consumo} vezes`);
            });
        };
        this.listarServicos = () => {
            let lista = this.empresa.getServicos.sort((s1, s2) => {
                if (s1.consumo > s2.consumo)
                    return -1;
                else
                    return 1;
            });
            console.log('\nListagem geral dos serviços mais consumidos');
            lista.forEach((servico, indice) => {
                console.log(`${indice + 1}° - ${servico.nome}: consumido ${servico.consumo} vezes`);
            });
        };
        this.empresa = empresa;
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            let consumoProduto = [];
            let consumoServico = [];
            let consumoP = [];
            consumoProduto.sort(function (n1, n2) {
                return n2.quantidadeProdutos - n1.quantidadeProdutos;
            });
            consumoServico.sort(function (n1, n2) {
                return n2.quantidadeServicos - n1.quantidadeServicos;
            });
            consumoServico = consumoServico.slice(0, 5);
            let exec = true;
            while (exec) {
                let entrada = new entrada_1.default();
                console.log("------------------------------------------------");
                console.log(`Opçao de Listagem.`);
                console.log(`1. Produto`);
                console.log(`2. Serviço`);
                let opcao = entrada.receberNumero(`Por favor, escolha uma opçao: `);
                switch (opcao) {
                    case 1:
                        console.log(chalk_1.default.greenBright("Listagem dos produtos mais consumidos em quantidade."));
                        console.log(chalk_1.default.red(`\n---------------------------------------------------------------\n`));
                        this.listarProdutos();
                        exec = false;
                        break;
                    case 2:
                        console.log(chalk_1.default.greenBright("Listagem dos serviços mais consumidos em quantidade."));
                        console.log(chalk_1.default.red(`\n---------------------------------------------------------------\n`));
                        this.listarServicos();
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
exports.default = ListagemProdutosOuServicosMais;
