"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const atualizar_1 = __importDefault(require("./atualizar"));
class AtualizarServicos extends atualizar_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    atualiza() {
        let cont = 1;
        console.log(`\nInicio da atualizaçao do Serviço`);
        let busca = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `);
        this.servicos.forEach(servico => {
            if (servico.nome == busca) {
                console.log(`Serviço encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `);
                servico.nome = nome;
                console.log(`\nCadastro atualizado \n`);
            }
            else if (cont == this.servicos.length) {
                console.log(`\n nenhum Serviço encontrado com o nome informado!!! \n`);
            }
            else {
                cont++;
            }
        });
    }
}
exports.default = AtualizarServicos;
