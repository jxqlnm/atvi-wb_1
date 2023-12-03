"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const entrada_1 = __importDefault(require("../io/entrada"));
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const produto_1 = __importDefault(require("../modelo/produto"));
const rg_1 = __importDefault(require("../modelo/rg"));
const servico_1 = __importDefault(require("../modelo/servico"));
const atualizarCliente_1 = __importDefault(require("../negocio/atualizarCliente"));
const atualizarProduto_1 = __importDefault(require("../negocio/atualizarProduto"));
const atualizarServicos_1 = __importDefault(require("../negocio/atualizarServicos"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
const CadastroConsumoCliente_1 = __importDefault(require("../negocio/CadastroConsumoCliente"));
const CadastroProdutos_1 = __importDefault(require("../negocio/CadastroProdutos"));
const CadastroServicos_1 = __importDefault(require("../negocio/CadastroServicos"));
const deletarCliente_1 = __importDefault(require("../negocio/deletarCliente"));
const deletarProduto_1 = __importDefault(require("../negocio/deletarProduto"));
const deletarServico_1 = __importDefault(require("../negocio/deletarServico"));
const ListagemComusumoGen_1 = __importDefault(require("../negocio/listagem/ListagemComusumoGen"));
const ListagemConsumoMais_1 = __importDefault(require("../negocio/listagem/ListagemConsumoMais"));
const ListagemConsumoMenos_1 = __importDefault(require("../negocio/listagem/ListagemConsumoMenos"));
const ListagemConsumoValor_1 = __importDefault(require("../negocio/listagem/ListagemConsumoValor"));
const ListagemGenero_1 = __importDefault(require("../negocio/listagem/ListagemGenero"));
const ListagemProdutosOuServicosMais_1 = __importDefault(require("../negocio/listagem/ListagemProdutosOuServicosMais"));
const listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
const ListagemProdutos_1 = __importDefault(require("../negocio/ListagemProdutos"));
const ListagemServicos_1 = __importDefault(require("../negocio/ListagemServicos"));
console.log(chalk_1.default.greenBright(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`));
let empresa = new empresa_1.default();
let cli1 = new cliente_1.default('Victor', 'Vituu', new cpf_1.default('45454545454', new Date(12, 12, 1221)), 'Masculino');
let cli2 = new cliente_1.default('Ana', 'Gata', new cpf_1.default('89421565454', new Date(12, 12, 1221)), 'Feminino');
let cli3 = new cliente_1.default('Luiz', 'LULU <3', new cpf_1.default('49478542453', new Date(12, 12, 1221)), 'Masculino');
let cli4 = new cliente_1.default('Belinha', 'Bela', new cpf_1.default('73454542354', new Date(12, 12, 1221)), 'Feminino');
let cli5 = new cliente_1.default('Vasco', 'Gigante', new cpf_1.default('28426645454', new Date(12, 12, 1221)), 'Masculino');
let cli6 = new cliente_1.default('Pedro', 'Pussy', new cpf_1.default('39454475554', new Date(12, 12, 1221)), 'Masculino');
let cli7 = new cliente_1.default('Hugo', 'Hugas', new cpf_1.default('14454877456', new Date(12, 12, 1221)), 'Masculino');
let cli8 = new cliente_1.default('Ulquiora', 'Ciffer', new cpf_1.default('52452245451', new Date(12, 12, 1221)), 'Feminino');
let cli9 = new cliente_1.default('Ichigo', 'Ichigo', new cpf_1.default('11454445458', new Date(12, 12, 1221)), 'Masculino');
let cli10 = new cliente_1.default('Naruto', 'Naruto', new cpf_1.default('31454745895', new Date(12, 12, 1221)), 'Masculino');
let cli11 = new cliente_1.default('Dalva', 'Mae', new cpf_1.default('56554745895', new Date(12, 12, 1221)), 'Feminino');
cli1.addRg(new rg_1.default('58951348', new Date(20, 12, 2000)));
cli2.addRg(new rg_1.default('89522146', new Date(20, 12, 2000)));
cli3.addRg(new rg_1.default('77572727', new Date(20, 12, 2000)));
cli4.addRg(new rg_1.default('53475527', new Date(20, 12, 2000)));
cli5.addRg(new rg_1.default('71466984', new Date(20, 12, 2000)));
cli6.addRg(new rg_1.default('39845464', new Date(20, 12, 2000)));
cli7.addRg(new rg_1.default('87214654', new Date(20, 12, 2000)));
cli8.addRg(new rg_1.default('44874668', new Date(20, 12, 2000)));
cli9.addRg(new rg_1.default('52115576', new Date(20, 12, 2000)));
cli10.addRg(new rg_1.default('47115597', new Date(20, 12, 2000)));
cli11.addRg(new rg_1.default('88715597', new Date(20, 12, 2000)));
empresa.getClientes.push(cli1);
empresa.getClientes.push(cli2);
empresa.getClientes.push(cli3);
empresa.getClientes.push(cli4);
empresa.getClientes.push(cli5);
empresa.getClientes.push(cli6);
empresa.getClientes.push(cli7);
empresa.getClientes.push(cli8);
empresa.getClientes.push(cli9);
empresa.getClientes.push(cli10);
empresa.getClientes.push(cli11);
let servico1 = new servico_1.default("Corte", 24);
let servico2 = new servico_1.default("Remoçao de rugas", 12);
let servico3 = new servico_1.default("Remoçao  de manchas na pele", 34);
let servico4 = new servico_1.default("Massagem relaxante", 45);
let servico5 = new servico_1.default("Tratamento capilar", 30);
let servico6 = new servico_1.default("Pedicure e Manicure", 40);
empresa.getServicos.push(servico1);
empresa.getServicos.push(servico2);
empresa.getServicos.push(servico3);
empresa.getServicos.push(servico4);
empresa.getServicos.push(servico5);
empresa.getServicos.push(servico6);
let produto1 = new produto_1.default("Pomada", 12);
let produto2 = new produto_1.default("Condicionador", 20);
let produto3 = new produto_1.default("Creme", 15);
let produto4 = new produto_1.default("Sabonete Esfoliante", 8);
let produto5 = new produto_1.default("Óleo Corporal", 18);
let produto6 = new produto_1.default("Mascara Facial", 25);
empresa.getProdutos.push(produto1);
empresa.getProdutos.push(produto2);
empresa.getProdutos.push(produto3);
empresa.getProdutos.push(produto4);
empresa.getProdutos.push(produto5);
empresa.getProdutos.push(produto6);
cli1.addProduto(produto1);
cli2.addProduto(produto2);
cli3.addProduto(produto3);
cli4.addProduto(produto4);
cli5.addProduto(produto5);
cli6.addProduto(produto6);
cli7.addProduto(produto3);
cli8.addProduto(produto6);
cli9.addProduto(produto1);
cli9.addProduto(produto3);
cli11.addProduto(produto2);
cli1.addServico(servico1);
cli2.addServico(servico2);
cli3.addServico(servico6);
cli4.addServico(servico2);
cli5.addServico(servico5);
cli6.addServico(servico3);
cli7.addServico(servico4);
cli8.addServico(servico5);
cli9.addServico(servico1);
cli11.addServico(servico1);
let execucao = true;
while (execucao) {
    console.log(chalk_1.default.blackBright(`Opções:`));
    console.log(chalk_1.default.blueBright(`1Cadastrar cliente`));
    console.log(chalk_1.default.blueBright(`2Listar todos os clientes`));
    console.log(chalk_1.default.blueBright(`3Atualizar clientes`));
    console.log(chalk_1.default.blueBright(`4Excluir clientes`));
    console.log(chalk_1.default.blueBright(`5Cadastrar Produto`));
    console.log(chalk_1.default.blueBright(`6Listar todos os produtos`));
    console.log(chalk_1.default.blueBright(`7Atualizar produtos`));
    console.log(chalk_1.default.blueBright(`8Excluir produtos`));
    console.log(chalk_1.default.blueBright(`9Cadastrar Serviços`));
    console.log(chalk_1.default.blueBright(`10Listar todos os Serviços`));
    console.log(chalk_1.default.blueBright(`11Atualizar serviços`));
    console.log(chalk_1.default.blueBright(`12Excluir serviços`));
    console.log(chalk_1.default.blueBright(`13Listagem por genero`));
    console.log(chalk_1.default.blueBright(`14Cadastrar consumo de produtos ou serviço para o cliente`));
    console.log(chalk_1.default.blueBright(`15Listagem do consumo dos produtos ou serviços mais consumidos`));
    console.log(chalk_1.default.blueBright(`16Listagem do consumo dos produtos ou serviços menos consumidos`));
    console.log(chalk_1.default.blueBright(`17Listagem do produto ou serviço mais consumido`));
    console.log(chalk_1.default.blueBright(`18Listagem do produto ou serviço mais consumido por genero`));
    console.log(chalk_1.default.blueBright(`19Listagem dos clientes que mais consumiram em valor`));
    console.log(chalk_1.default.red(`0. Sair`));
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Escolha uma opçao: `);
    switch (opcao) {
        case 1:
            let cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let atualizar = new atualizarCliente_1.default(empresa.getClientes);
            atualizar.atualiza();
            break;
        case 4:
            let exclusao = new deletarCliente_1.default(empresa.getClientes);
            exclusao.Exclui();
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos_1.default(empresa.getProdutos);
            cadastrarProd.cadastrar();
            break;
        case 6:
            let listagemProd = new ListagemProdutos_1.default(empresa.getProdutos);
            listagemProd.listar();
            break;
        case 7:
            let atualizarProdutos = new atualizarProduto_1.default(empresa.getProdutos);
            atualizarProdutos.atualiza();
            break;
        case 8:
            let exclusaoProduto = new deletarProduto_1.default(empresa.getProdutos);
            exclusaoProduto.Exclui();
            break;
        case 9:
            let cadastrarSer = new CadastroServicos_1.default(empresa.getServicos);
            cadastrarSer.cadastrar();
            break;
        case 10:
            let listagemSer = new ListagemServicos_1.default(empresa.getServicos);
            listagemSer.listar();
            break;
        case 11:
            let atualizaSer = new atualizarServicos_1.default(empresa.getServicos);
            atualizaSer.atualiza();
            break;
        case 12:
            let excluirSer = new deletarServico_1.default(empresa.getServicos);
            excluirSer.Exclui();
            break;
        case 13:
            let listagemGem = new ListagemGenero_1.default(empresa.getClientes);
            listagemGem.listar();
            break;
        case 14:
            let cadastroConsumoCliente = new CadastroConsumoCliente_1.default(empresa.getClientes, empresa);
            cadastroConsumoCliente.cadastrar();
            break;
        case 15:
            let listagem10mais = new ListagemConsumoMais_1.default(empresa.getClientes);
            listagem10mais.listar();
            break;
        case 16:
            let listagem10menos = new ListagemConsumoMenos_1.default(empresa.getClientes);
            listagem10menos.listar();
            break;
        case 17:
            let listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais_1.default(empresa);
            listagemProdutosOuServicosMais.listar();
            break;
        case 18:
            let listagemConsumoGem = new ListagemComusumoGen_1.default(empresa);
            listagemConsumoGem.listar();
            break;
        case 19:
            let listagemConsumoValor = new ListagemConsumoValor_1.default(empresa);
            listagemConsumoValor.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Fim`);
            break;
        default:
            console.log(`Operaçao nao entendida `);
    }
}
