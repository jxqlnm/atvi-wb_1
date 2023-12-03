"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const deletar_1 = __importDefault(require("./deletar"));
let executa = true;
class ExcluirCliente extends deletar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    Exclui() {
        console.log(`\nInicio da Exclusao do cliente`);
        executa = true;
        while (executa) {
            let busca = this.entrada.receberTexto(`Informe o numero do CPF do cliente: `);
            let cont = 1;
            this.clientes.forEach(cliente => {
                if (cliente.getCpf.getValor == busca) {
                    console.log(`Cliente encontrado, nome: ${cliente.nome}, deseja realmente excluir o cliente? `);
                    let confirma = this.entrada.receberNumero(`1. Excluir, 2. Cancelar: `);
                    switch (confirma) {
                        case 1:
                            let indice = this.clientes.indexOf(cliente);
                            this.clientes.splice(indice, 1);
                            console.log(`Cliente excluido!`);
                            executa = false;
                            break;
                        case 2:
                            executa = false;
                            console.log(`cancelado`);
                            break;
                    }
                }
                else if (cont == this.clientes.length) {
                    console.log(`\nNenhum cliente encontrado com o CPF informado! \n`);
                    executa = false;
                }
                else {
                    cont++;
                }
            });
        }
    }
}
exports.default = ExcluirCliente;
