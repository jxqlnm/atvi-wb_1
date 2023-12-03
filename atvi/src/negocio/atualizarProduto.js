"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const atualizar_1 = __importDefault(require("./atualizar"));
class AtualizarProdutos extends atualizar_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    atualiza() {
        let cont = 1;
        console.log(`\nInicio da atualizaçao do produto`);
        let busca = this.entrada.receberTexto(`Informe o nome do produto: `);
        this.produtos.forEach(produto => {
            if (produto.nome == busca) {
                console.log(`Produto encontrado, forneça as informações!`);
                let nome = this.entrada.receberTexto(`Informe o novo nome do Produto: `);
                produto.nome = nome;
                console.log(`\nCadastro atualizado \n`);
            }
            else if (cont == this.produtos.length) {
                console.log(`\nNenhum Produto encontrado com o nome informado! \n`);
            }
            else {
                cont++;
            }
        });
    }
}
exports.default = AtualizarProdutos;
