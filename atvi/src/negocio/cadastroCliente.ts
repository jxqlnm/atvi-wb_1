import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    // private rgs: Array<RG>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        // this.rgs = rgs
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        
        console.log(`\nInicio do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberGenero(`Por favor informe o genero do cliente: ['M' ou 'F'] `)
        // RG
        let rgValor = this.entrada.receberTexto(`Por favor informe o RG do cliente: `)
        let dataRg = this.entrada.receberData(`Por favor informe a data de emissao do RG, no padrao dd/mm/yyyy: `)
        let partesDataRg = dataRg.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        // CPF
        let valor = this.entrada.receberCpf(`Por favor informe o número do cpf, no padrao 00000000000: `);
        let data = this.entrada.receberData(`Por favor informe a data de emissao do cpf, no padrao dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)

        let cpf = new CPF(valor, dataEmissao);
        let rg = new RG(rgValor, dataEmissaoRg)

        // this.rgs.push(rg)
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        cliente.addRg(rg)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluido \n`);
        }
        
}
