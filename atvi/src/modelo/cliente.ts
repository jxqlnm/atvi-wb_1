import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente {
    public nome: string;
    public nomeSocial: string;
    public genero: string;
    private cpf: CPF;
    private rgs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
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

    public get getCpf(): CPF {
        return this.cpf;
    }

    public get getRgs(): Array<RG> {
        return this.rgs;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }

    public addRg(rg: RG): void {
        this.rgs.push(rg);
    }

    public addTelefones(telefone: Telefone): void {
        this.telefones.push(telefone);
    }

    public addProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        produto.addConsumo();
    }

    public addServico(servico: Servico): void {
        this.servicosConsumidos.push(servico);
        servico.addConsumo();
    }

    public get getGenero(): string {
        switch (this.genero) {
            case 'Masculino':
                return 'M. Masculino';
            case 'Feminino':
                return 'F. Feminino';
            default:
                return 'O. Outro';
        }
    }

    public getGeneroChar(): string {
        return this.genero;
    }
}
