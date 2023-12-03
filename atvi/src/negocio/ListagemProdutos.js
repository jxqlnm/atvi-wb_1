"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutos extends listagem_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }
    listar() {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produtos => {
            console.log(`---------------------------------`);
            console.log(`Nome: ` + produtos.nome);
            console.log('Preço: ' + produtos.preco);
        });
        console.log(`\n`);
    }
    quantidadeProduto() {
        let cont = this.produtos.length;
        console.log(cont);
        return cont;
    }
}
exports.default = ListagemProdutos;
