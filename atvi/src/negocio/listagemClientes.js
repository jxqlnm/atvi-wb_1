"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(chalk_1.default.blueBright(`\nLista de todos os clientes:`));
        console.log(chalk_1.default.red(`----------------------------------------------------------`));
        this.clientes.forEach(cliente => {
            console.log(chalk_1.default.blueBright(`Nome: `) + cliente.nome);
            console.log(chalk_1.default.blueBright(`Nome social: `) + cliente.nomeSocial);
            console.log(chalk_1.default.blueBright('Genero: ') + cliente.genero);
            console.log(chalk_1.default.blueBright(`CPF: `) + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(chalk_1.default.blueBright(`RG: `) + rg.getValor);
            });
            console.log(chalk_1.default.blueBright(`Produtos consumidos: [ `));
            cliente.getProdutosConsumidos.forEach(prod => {
                console.log('      ' + prod.nome);
            });
            console.log(chalk_1.default.blueBright(']'));
            console.log(chalk_1.default.blueBright(`Serviços consumidos: [ `));
            cliente.getServicosConsumidos.forEach(ser => {
                console.log('      ' + ser.nome);
            });
            console.log(chalk_1.default.blueBright(']'));
            console.log(chalk_1.default.red(`----------------------------------------------------------`));
        });
        console.log(`\n`);
    }
}
exports.default = ListagemClientes;
