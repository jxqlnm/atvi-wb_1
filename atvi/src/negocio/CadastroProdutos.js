"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const produto_1 = __importDefault(require("../modelo/produto"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroProdutos extends cadastro_1.default {
    constructor(nome) {
        super();
        this.nomes = nome;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInicio do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Informe o preço do produto: `);
        let produto = new produto_1.default(nome, preco);
        //produto.nome = nome
        this.nomes.push(produto);
        console.log(`\nCadastro concluido \n`);
    }
}
exports.default = CadastroProdutos;
