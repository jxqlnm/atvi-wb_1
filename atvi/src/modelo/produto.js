"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    addConsumo() {
        this.consumo += 1;
    }
}
exports.default = Produto;
