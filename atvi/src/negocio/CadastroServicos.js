"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const servico_1 = __importDefault(require("../modelo/servico"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroServicos extends cadastro_1.default {
    constructor(nome) {
        super();
        this.nomes = nome;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInicio do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preco do serviço: `);
        let servico = new servico_1.default(nome, preco);
        //servico.nome = nome
        this.nomes.push(servico);
        console.log(`\nCadastro concluido \n`);
    }
}
exports.default = CadastroServicos;
