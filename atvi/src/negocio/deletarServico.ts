import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Excluir from "./deletar";

let executa = true

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInicio da Exclusao do Serviço`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Informe o nome do Serviço: `);
            let cont = 1
            this.servicos.forEach(servico =>{
                if (servico.nome == busca){
                    console.log(`Serviço encontrado, deseja realmente excluir o Serviço?`);
                    let confirma = this.entrada.receberNumero(`1excluir, 2cancelar: `)
                    switch(confirma){
                        case 1:
                            let indice = this.servicos.indexOf(servico)
                            this.servicos.splice(indice, 1)
                            console.log(`Serviço excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break;
                            
                    }
                }
                else if(cont == this.servicos.length){
                    console.log(`\n nenhum Serviço encontrado com o nome informado! \n`); 
                    executa = false
                }
                else{
                    cont++
                }
            })      
        }
    }

}