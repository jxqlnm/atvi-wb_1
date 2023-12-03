"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    addRg(rg) {
        this.rgs.push(rg);
    }
    addTelefones(telefone) {
        this.telefones.push(telefone);
    }
    addProduto(produto) {
        this.produtosConsumidos.push(produto);
        produto.addConsumo();
    }
    addServico(servico) {
        this.servicosConsumidos.push(servico);
        servico.addConsumo();
    }
    get getGenero() {
        switch (this.genero) {
            case 'Masculino':
                return 'MMasculino';
            case 'Feminino':
                return 'FFeminino';
            default:
                return 'OOutro';
        }
    }
    getGeneroChar() {
        return this.genero;
    }
}
exports.default = Cliente;
