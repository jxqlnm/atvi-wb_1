"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const deletar_1 = __importDefault(require("./deletar"));
let executa = true;
class ExcluirProduto extends deletar_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    Exclui() {
        console.log(`\nInicio da Exclusao do Produto`);
        executa = true;
        while (executa) {
            let busca = this.entrada.receberTexto(`Informe o nome do Produto: `);
            let cont = 1;
            this.produtos.forEach(produto => {
                if (produto.nome == busca) {
                    console.log(`Produto encontrado, deseja realmente excluir o Produto?`);
                    let confirma = this.entrada.receberNumero(`1. Excluir, 2. Cancelar: `);
                    switch (confirma) {
                        case 1:
                            let indice = this.produtos.indexOf(produto);
                            this.produtos.splice(indice, 1);
                            console.log(`Produto excluido!`);
                            executa = false;
                            break;
                        case 2:
                            executa = false;
                            console.log(`cancelado`);
                            break;
                    }
                }
                else if (cont == this.produtos.length) {
                    console.log(`\nNenhum Produto encontrado com o nome informado! \n`);
                    executa = false;
                }
                else {
                    cont++;
                }
            });
        }
    }
}
exports.default = ExcluirProduto;
