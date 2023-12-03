import chalk from "chalk";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroConsumoCliente from "../negocio/CadastroConsumoCliente";
import CadastroProdutos from "../negocio/CadastroProdutos";
import CadastroServicos from "../negocio/CadastroServicos";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ListagemComusumoGen from "../negocio/listagem/ListagemComusumoGen";
import ListagemConsumoMais from "../negocio/listagem/ListagemConsumoMais";
import ListagemConsumoMenos from "../negocio/listagem/ListagemConsumoMenos";
import ListagemComusumoValor from "../negocio/listagem/ListagemConsumoValor";
import ListagemGenero from "../negocio/listagem/ListagemGenero";
import ListagemProdutosOuServicosMais from "../negocio/listagem/ListagemProdutosOuServicosMais";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/ListagemProdutos";
import ListagemServicos from "../negocio/ListagemServicos";

console.log(chalk.greenBright(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`))
let empresa = new Empresa()

let cliente1 = new Cliente('Giovanna Martins', 'Giovanna', new CPF('12345678561', new Date(20, 11, 1995)), 'Masculino');
let cliente2 = new Cliente('Lucas da Silva', 'Luca', new CPF('12345678901', new Date(15, 5, 1990)), 'Masculino');
let cliente3 = new Cliente('Ana Beatriz Oliveira', 'Aninha', new CPF('98765432109', new Date(22, 8, 1985)), 'Feminino');
let cliente4 = new Cliente('Pedro Henrique Souza', 'PH', new CPF('56789012345', new Date(10, 2, 2000)), 'Masculino');
let cliente5 = new Cliente('Mariana Santos', 'Mari', new CPF('23456789012', new Date(7, 11, 1998)), 'Feminino');
let cliente6 = new Cliente('Fernando Silva', 'Nando', new CPF('34567890123', new Date(25, 4, 1982)), 'Masculino');
let cliente7 = new Cliente('Gabriela Oliveira', 'Gabi', new CPF('78901234567', new Date(18, 9, 1995)), 'Feminino');
let cliente8 = new Cliente('Carlos Roberto Lima', 'Carlinhos', new CPF('45678901234', new Date(30, 1, 1977)), 'Masculino');
let cliente9 = new Cliente('Juliana Costa', 'Juju', new CPF('89012345678', new Date(12, 7, 1989)), 'Feminino');
let cliente10 = new Cliente('Miguel Santos', 'Mi', new CPF('65432109876', new Date(5, 3, 2005)), 'Masculino');
let cliente11 = new Cliente('Isabella Oliveira', 'Bella', new CPF('32109876543', new Date(28, 6, 1993)), 'Feminino');


cliente1.addRg(new RG('58951348', new Date(2004, 1, 20)));
cliente2.addRg(new RG('89522146', new Date(2002, 11, 2)));
cliente3.addRg(new RG('77572727', new Date(1994, 12, 10)));
cliente4.addRg(new RG('53475527', new Date(1999, 4, 28)));
cliente5.addRg(new RG('71466984', new Date(1942, 3, 23)));
cliente6.addRg(new RG('39845464', new Date(1967, 7, 22)));
cliente7.addRg(new RG('87214654', new Date(1953, 9, 21)));
cliente8.addRg(new RG('44874668', new Date(2010, 1, 13)));
cliente9.addRg(new RG('52115576', new Date(1994, 11, 14)));
cliente10.addRg(new RG('47115597', new Date(1996, 4, 16)));
cliente11.addRg(new RG('88715597', new Date(1997, 5, 6)));


empresa.getClientes.push(cliente1)
empresa.getClientes.push(cliente2)
empresa.getClientes.push(cliente3)
empresa.getClientes.push(cliente4)
empresa.getClientes.push(cliente5)
empresa.getClientes.push(cliente6)
empresa.getClientes.push(cliente7)
empresa.getClientes.push(cliente8)
empresa.getClientes.push(cliente9)
empresa.getClientes.push(cliente10)
empresa.getClientes.push(cliente11)

let servico1 = new Servico("Corte de Cabelo Moderno", 24);
let servico2 = new Servico("Tratamento Facial Anti-idade", 12);
let servico3 = new Servico("Remoçao de Manchas na Pele a Laser", 34);
let servico4 = new Servico("Massagem Relaxante com Óleos Essenciais", 45);
let servico5 = new Servico("Tratamento Capilar com Queratina", 30);
let servico6 = new Servico("Manicure e Pedicure de Luxo", 40);

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)

let produto1 = new Produto("Sabonete de Ervas", 12);
let produto2 = new Produto("Condicionador Revitalizante", 20);
let produto3 = new Produto("Creme Antirrugas", 15);
let produto4 = new Produto("Esfoliante Corporal de Frutas", 8);
let produto5 = new Produto("Óleo Corporal de Lavanda", 18);
let produto6 = new Produto("Mascara de Argila Facial", 25);

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)

cliente1.addProduto(produto1);
cliente2.addProduto(produto2);
cliente3.addProduto(produto3);
cliente4.addProduto(produto4);
cliente5.addProduto(produto5);
cliente6.addProduto(produto6);
cliente7.addProduto(produto3);
cliente8.addProduto(produto6);
cliente9.addProduto(produto1);
cliente9.addProduto(produto3);
cliente11.addProduto(produto2);

cliente1.addServico(servico1);
cliente2.addServico(servico2);
cliente3.addServico(servico6);
cliente4.addServico(servico2);
cliente5.addServico(servico5);
cliente6.addServico(servico3);
cliente7.addServico(servico4);
cliente8.addServico(servico5);
cliente9.addServico(servico1);
cliente11.addServico(servico1);

let execucao = true

while (execucao) {
    console.log(chalk.blackBright(`Opções:`));
    console.log(chalk.blueBright(`1Cadastrar cliente`));
    console.log(chalk.blueBright(`2Listar todos os clientes`));
    console.log(chalk.blueBright(`3Atualizar clientes`));
    console.log(chalk.blueBright(`4Excluir clientes`));
    console.log(chalk.blueBright(`5Cadastrar Produto`));
    console.log(chalk.blueBright(`6Listar todos os produtos`));
    console.log(chalk.blueBright(`7Atualizar produtos`));
    console.log(chalk.blueBright(`8Excluir produtos`));
    console.log(chalk.blueBright(`9Cadastrar Serviços`));
    console.log(chalk.blueBright(`10Listar todos os Serviços`));
    console.log(chalk.blueBright(`11Atualizar serviços`));
    console.log(chalk.blueBright(`12Excluir serviços`));
    console.log(chalk.blueBright(`13Listagem por genero`));
    console.log(chalk.blueBright(`14Cadastrar consumo de produtos ou serviço para o cliente`));
    console.log(chalk.blueBright(`15Listagem do consumo dos produtos ou serviços mais consumidos`));
    console.log(chalk.blueBright(`16Listagem do consumo dos produtos ou serviços menos consumidos`));
    console.log(chalk.blueBright(`17Listagem do produto ou serviço mais consumido`));
    console.log(chalk.blueBright(`18Listagem do produto ou serviço mais consumido por genero`));
    console.log(chalk.blueBright(`19Listagem dos clientes que mais consumiram em valor`));
    console.log(chalk.red(`0Sair`));

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opçao: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 8:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 9:
            let cadastrarSer = new CadastroServicos(empresa.getServicos)
            cadastrarSer.cadastrar()
            break
        case 10:
            let listagemSer = new ListagemServicos(empresa.getServicos)
            listagemSer.listar()
            break
        case 11:
            let atualizaSer = new AtualizarServicos(empresa.getServicos)
            atualizaSer.atualiza()
            break
        case 12:
            let excluirSer = new ExcluirServico(empresa.getServicos)
            excluirSer.Exclui()
            break
        case 13:
            let listagemGem = new ListagemGenero(empresa.getClientes)
            listagemGem.listar()
            break
        case 14:
            let cadastroConsumoCliente = new CadastroConsumoCliente(empresa.getClientes,empresa)
            cadastroConsumoCliente.cadastrar()
            break
        case 15:
            let listagem10mais = new ListagemConsumoMais(empresa.getClientes)
            listagem10mais.listar()
            break
        case 16:
            let listagem10menos = new ListagemConsumoMenos(empresa.getClientes)
            listagem10menos.listar()
            break
        case 17:
            let listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais(empresa)
            listagemProdutosOuServicosMais.listar()
            break
        case 18:
            let listagemConsumoGem = new ListagemComusumoGen(empresa)
            listagemConsumoGem.listar()
            break
        case 19:
            let listagemConsumoValor = new ListagemComusumoValor(empresa)
            listagemConsumoValor.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operaçao nao entendida `)
    }
}