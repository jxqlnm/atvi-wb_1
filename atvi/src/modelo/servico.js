"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }
    getNomeS() {
        return this.nome;
    }
    getPrecos() {
        return this.preco;
    }
    addConsumo() {
        this.consumo += 1;
    }
}
exports.default = Servico;
