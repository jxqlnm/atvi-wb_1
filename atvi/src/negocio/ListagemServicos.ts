import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servicos => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + servicos.nome);
            console.log('Preço: ' + servicos.preco);
            
        });
        console.log(`\n`);
    }
    
}