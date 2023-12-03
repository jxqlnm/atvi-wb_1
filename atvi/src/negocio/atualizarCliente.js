"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const atualizar_1 = __importDefault(require("./atualizar"));
class AtualizarCliente extends atualizar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    atualiza() {
        console.log(`\nInicio da atualizaçao do cliente`);
        let busca = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `);
        let cont = 1;
        this.clientes.forEach(cliente => {
            if (cliente.getCpf.getValor == busca) {
                console.log(`Cliente encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
                cliente.nome = nome;
                cliente.nomeSocial = nomeSocial;
                console.log(`\nCadastro atualizado \n`);
            }
            else if (cont == this.clientes.length) {
                console.log(`\n nenhum cliente encontrado com o cpf informado!!! \n`);
            }
            else {
                cont++;
            }
        });
    }
}
exports.default = AtualizarCliente;
