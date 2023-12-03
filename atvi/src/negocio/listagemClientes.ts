import chalk from "chalk";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(chalk.blueBright(`\nLista de todos os clientes:`));
        console.log(`--------------------------`);
        this.clientes.forEach(cliente => {
            console.log(chalk.blueBright(`Nome: ` )+ cliente.nome); 
            console.log(chalk.blueBright(`Nome social: ` ) + cliente.nomeSocial);
            console.log(chalk.blueBright('Genero: ' ) + cliente.genero);
            console.log(chalk.blueBright(`CPF: ` ) + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(chalk.blueBright(`RG: ` ) + rg.getValor );
            })
            console.log(chalk.blueBright(`Produtos consumidos: [ `))
            cliente.getProdutosConsumidos.forEach(prod => {
                console.log('      '+ prod.nome)
            });console.log(chalk.blueBright(']'));
            console.log(chalk.blueBright(`Serviços consumidos: [ `))
            cliente.getServicosConsumidos.forEach(ser => {
                console.log('      '+ ser.nome);
            });console.log(chalk.blueBright(']'));
            console.log(`--------------------------`);
        });
        console.log(`\n`);
    }
}