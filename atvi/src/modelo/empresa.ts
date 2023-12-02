import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

class Empresa {
    private clientes: Cliente[];
    private produtos: Produto[];
    private servicos: Servico[];

    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }

    get getClientes(): Cliente[] {
        return this.clientes;
    }

    get getProdutos(): Produto[] {
        return this.produtos;
    }

    get getServicos(): Servico[] {
        return this.servicos;
    }
}

export default Empresa;
