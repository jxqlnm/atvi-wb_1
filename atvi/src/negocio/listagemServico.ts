import Listagem from "./listagem";
import Servico from "../modelo/servico";

export default class ListagemServicos extends Listagem {
    private servicos: Servico[];

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
    }

    public listar(): void {
        console.log(`\nLista de todos os serviços:`);

        this.servicos.forEach(servico => {
            console.log(`---------------------------------`);
            console.log(`Nome: ${servico.getNomeS()}`);
            console.log(`Preço: ${servico.getPrecos()}`);
        });

        console.log(`\n`);
    }
}
