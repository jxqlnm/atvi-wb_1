"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const deletar_1 = __importDefault(require("./deletar"));
let executa = true;
class ExcluirServico extends deletar_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    Exclui() {
        console.log(`\nInicio da Exclusao do Serviço`);
        executa = true;
        while (executa) {
            let busca = this.entrada.receberTexto(`Informe o nome do Serviço: `);
            let cont = 1;
            this.servicos.forEach(servico => {
                if (servico.nome == busca) {
                    console.log(`Serviço encontrado, deseja realmente excluir o Serviço?`);
                    let confirma = this.entrada.receberNumero(`1excluir, 2cancelar: `);
                    switch (confirma) {
                        case 1:
                            let indice = this.servicos.indexOf(servico);
                            this.servicos.splice(indice, 1);
                            console.log(`Serviço excluido!`);
                            executa = false;
                            break;
                        case 2:
                            executa = false;
                            console.log(`cancelado`);
                            break;
                    }
                }
                else if (cont == this.servicos.length) {
                    console.log(`\n nenhum Serviço encontrado com o nome informado! \n`);
                    executa = false;
                }
                else {
                    cont++;
                }
            });
        }
    }
}
exports.default = ExcluirServico;
