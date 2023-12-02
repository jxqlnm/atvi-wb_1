import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

class Cliente {
    private nome: string;
    private nomeSocial: string;
    private genero: string;
    private cpf: CPF;
    private rgs: RG[];
    private dataCadastro: Date;
    private telefones: string[];
    private produtosConsumidos: Produto[];
    private servicosConsumidos: Servico[];

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

    get getCpf(): CPF {
        return this.cpf;
    }

    get getRgs(): RG[] {
        return this.rgs;
    }

    get getDataCadastro(): Date {
        return this.dataCadastro;
    }

    get getTelefones(): string[] {
        return this.telefones;
    }

    get getProdutosConsumidos(): Produto[] {
        return this.produtosConsumidos;
    }

    get getServicosConsumidos(): Servico[] {
        return this.servicosConsumidos;
    }

    addRg(rg: RG): void {
        this.rgs.push(rg);
    }

    addTelefones(telefone: string): void {
        this.telefones.push(telefone);
    }

    addProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        produto.addConsumo();
    }

    addServico(servico: Servico): void {
        this.servicosConsumidos.push(servico);
        servico.addConsumo();
    }

    get getGenero(): string {
        switch (this.genero) {
            case 'Masculino':
                return 'M - Masculino';
            case 'Feminino':
                return 'F - Feminino';
            default:
                return 'O - Outro';
        }
    }

    getGeneroChar(): string {
        return this.genero;
    }
}

export default Cliente;
