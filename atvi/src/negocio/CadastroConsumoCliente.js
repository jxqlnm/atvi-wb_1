"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const entrada_1 = __importDefault(require("../io/entrada"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroConsumoCliente extends cadastro_1.default {
    constructor(clientes, empresa) {
        super();
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
        this.clientes = clientes;
    }
    cadastrar() {
        let proc = this.entrada.receberCpf(`Informe o cpf da pessoa: `);
        let exe = true;
        let c = 1;
        let execucao = true;
        while (execucao) {
            this.clientes.forEach(cliente => {
                if (cliente.getCpf.getValor == proc) {
                    while (exe) {
                        console.log("------------------------------------------------");
                        console.log(chalk_1.default.greenBright(`Opeçao de consumo.`));
                        console.log(chalk_1.default.blueBright(`1Produto`));
                        console.log(chalk_1.default.blueBright(`2Serviço`));
                        console.log(chalk_1.default.redBright(`0Sair`));
                        let op = this.entrada.receberNumero('Insira a Opçao:  ');
                        let cont = 1;
                        switch (op) {
                            case 1:
                                let produtoNome = this.entrada.receberTexto(`Informe o nome do produto: `);
                                this.empresa.getProdutos.forEach(prod => {
                                    if (prod.nome == produtoNome) {
                                        cliente.addProduto(prod);
                                        prod.addConsumo();
                                        console.log(chalk_1.default.greenBright(`\nInserido com Sucesso`));
                                    }
                                    else if (cont == this.empresa.getProdutos.length) {
                                        console.log(chalk_1.default.redBright(`Produto invalido!`));
                                    }
                                    else {
                                        cont++;
                                    }
                                });
                                break;
                            case 2:
                                let servicoNome = this.entrada.receberTexto(`Informe o nome do serviço: `);
                                this.empresa.getServicos.forEach(ser => {
                                    if (ser.nome == servicoNome) {
                                        cliente.addServico(ser);
                                        ser.addConsumo();
                                        console.log(chalk_1.default.blueBright(`\nInserido com Sucesso`));
                                    }
                                    else if (cont == this.empresa.getServicos.length) {
                                        console.log(chalk_1.default.redBright(`Serviço invalido!`));
                                    }
                                    else {
                                        cont++;
                                    }
                                });
                                break;
                            case 0:
                                exe = false;
                                execucao = false;
                                console.log(chalk_1.default.greenBright(`Obrigado!`));
                                break;
                            default:
                                console.log(chalk_1.default.redBright(`Digite Uma Opçao Valida!`));
                                exe = true;
                        }
                    }
                }
                else if (c == this.clientes.length) {
                    console.log(chalk_1.default.redBright('CPF invalido!'));
                    console.log('\n');
                    execucao = false;
                }
                else {
                    c++;
                }
            });
        }
    }
}
exports.default = CadastroConsumoCliente;
