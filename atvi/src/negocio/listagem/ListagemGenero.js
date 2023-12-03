"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
class ListagemGenero extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let mas = [];
        let fem = [];
        this.clientes.forEach(cliente => {
            if (cliente.genero[0] == 'M') {
                mas.push(cliente);
            }
            else {
                fem.push(cliente);
            }
        });
        let entrada = new entrada_1.default();
        let genero = entrada.receberGenero('Qual é o genero?: ');
        if (genero[0].toUpperCase() == 'M') {
            console.log(chalk_1.default.red(`--------------------------------------`));
            mas.forEach(cliente => {
                console.log(chalk_1.default.blueBright(`Nome: `) + cliente.nome);
                console.log(chalk_1.default.blueBright(`Nome social: `) + cliente.nomeSocial);
                console.log(chalk_1.default.blueBright(`Genero: `) + cliente.genero);
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
                console.log(chalk_1.default.red(`--------------------------------------`));
            });
        }
        else {
            console.log(chalk_1.default.red(`--------------------------------------`));
            fem.forEach(cliente => {
                console.log(chalk_1.default.blueBright(`Nome: `) + cliente.nome);
                console.log(chalk_1.default.blueBright(`Nome social: `) + cliente.nomeSocial);
                console.log(chalk_1.default.blueBright(`Genero: `) + cliente.genero);
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
                console.log(chalk_1.default.red(`--------------------------------------`));
            });
        }
    }
}
exports.default = ListagemGenero;
