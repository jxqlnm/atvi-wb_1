"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const rg_1 = __importDefault(require("../modelo/rg"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroCliente extends cadastro_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        // this.rgs = rgs
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInicio do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Informe o nome social do cliente: `);
        let genero = this.entrada.receberGenero(`Informe o genero do cliente: ['M' ou 'F'] `);
        // RG
        let rgValor = this.entrada.receberTexto(`Informe o RG do cliente: `);
        let dataRg = this.entrada.receberData(`Informe a data de emissao do RG, no padrao dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/');
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf();
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf();
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf();
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
        // CPF
        let valor = this.entrada.receberCpf(`Informe o número do cpf, no padrao 00000000000: `);
        let data = this.entrada.receberData(`Informe a data de emissao do cpf, no padrao dd/mm/yyyy: `);
        let partesData = data.split('/');
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new cpf_1.default(valor, dataEmissao);
        let rg = new rg_1.default(rgValor, dataEmissaoRg);
        // this.rgs.push(rg)
        let cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        cliente.addRg(rg);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluido \n`);
    }
}
exports.default = CadastroCliente;
