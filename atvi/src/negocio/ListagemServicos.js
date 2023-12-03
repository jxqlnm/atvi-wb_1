"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemServicos extends listagem_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }
    listar() {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servicos => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + servicos.nome);
            console.log('Preço: ' + servicos.preco);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemServicos;
