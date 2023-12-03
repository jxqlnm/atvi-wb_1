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
let cliente12 = new Cliente('Rafaela Silva', 'Rafa', new CPF('87654321098', new Date(15, 9, 1996)), 'Feminino');
let cliente13 = new Cliente('Vinícius Pereira', 'Vini', new CPF('13579246801', new Date(3, 12, 1987)), 'Masculino');
let cliente14 = new Cliente('Fernanda Lima', 'Nanda', new CPF('45678901230', new Date(20, 4, 1999)), 'Feminino');
let cliente15 = new Cliente('Roberto Oliveira', 'Beto', new CPF('98765432123', new Date(8, 10, 1980)), 'Masculino');
let cliente16 = new Cliente('Amanda Costa', 'Mandy', new CPF('87654321012', new Date(11, 8, 1992)), 'Feminino');
let cliente17 = new Cliente('Diego Santos', 'Diguinho', new CPF('54321098765', new Date(27, 5, 1984)), 'Masculino');
let cliente18 = new Cliente('Camila Oliveira', 'Cami', new CPF('21098765432', new Date(14, 3, 1997)), 'Feminino');
let cliente19 = new Cliente('Felipe Silva', 'Fe', new CPF('78901234567', new Date(6, 1, 2001)), 'Masculino');
let cliente20 = new Cliente('Larissa Lima', 'Lari', new CPF('43210987654', new Date(23, 7, 1994)), 'Feminino');
let cliente21 = new Cliente('Andre Santos', 'Dede', new CPF('10987654321', new Date(17, 4, 1986)), 'Masculino');
let cliente22 = new Cliente('Carolina Oliveira', 'Carol', new CPF('87654321098', new Date(25, 11, 1998)), 'Feminino');
let cliente23 = new Cliente('Lucas Pereira', 'Luquinhas', new CPF('45678901230', new Date(19, 6, 1991)), 'Masculino');
let cliente24 = new Cliente('Bruna Lima', 'Bru', new CPF('98765432123', new Date(2, 9, 1983)), 'Feminino');
let cliente25 = new Cliente('Renato Santos', 'Renatinho', new CPF('54321098765', new Date(13, 12, 1997)), 'Masculino');
let cliente26 = new Cliente('Tatiane Oliveira', 'Tati', new CPF('21098765432', new Date(9, 8, 1989)), 'Feminino');
let cliente27 = new Cliente('Ricardo Silva', 'Rick', new CPF('78901234567', new Date(4, 3, 2002)), 'Masculino');
let cliente28 = new Cliente('Patrícia Costa', 'Paty', new CPF('43210987654', new Date(21, 7, 1995)), 'Feminino');
let cliente29 = new Cliente('Jose Lima', 'Ze', new CPF('10987654321', new Date(16, 4, 1987)), 'Masculino');
let cliente30 = new Cliente('Vanessa Santos', 'Van', new CPF('87654321098', new Date(28, 11, 1990)), 'Feminino');

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
cliente12.addRg(new RG('58951348', new Date(2004, 1, 20)));
cliente13.addRg(new RG('89522146', new Date(2002, 11, 2)));
cliente14.addRg(new RG('53475527', new Date(1999, 4, 28)));
cliente15.addRg(new RG('71466984', new Date(1942, 3, 23)));
cliente16.addRg(new RG('39845464', new Date(1967, 7, 22)));
cliente17.addRg(new RG('87214654', new Date(1953, 9, 21)));
cliente18.addRg(new RG('44874668', new Date(2010, 1, 13)));
cliente19.addRg(new RG('52115576', new Date(1994, 11, 14)));
cliente20.addRg(new RG('47115597', new Date(1996, 4, 16)));
cliente21.addRg(new RG('88715597', new Date(1997, 5, 6)));
cliente22.addRg(new RG('58951348', new Date(2004, 1, 20)));
cliente23.addRg(new RG('89522146', new Date(2002, 11, 2)));
cliente24.addRg(new RG('53475527', new Date(1999, 4, 28)));
cliente25.addRg(new RG('71466984', new Date(1942, 3, 23)));
cliente26.addRg(new RG('39845464', new Date(1967, 7, 22)));
cliente27.addRg(new RG('87214654', new Date(1953, 9, 21)));
cliente28.addRg(new RG('44874668', new Date(2010, 1, 13)));
cliente29.addRg(new RG('52115576', new Date(1994, 11, 14)));
cliente30.addRg(new RG('47115597', new Date(1996, 4, 16)));

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
let produto7 = new Produto("Shampoo Hidratante", 14);
let produto8 = new Produto("Creme Noturno Reparador", 22);
let produto9 = new Produto("Gel de Banho Energizante", 10);
let produto10 = new Produto("Loção Hidratante de Aloe Vera", 16);
let produto11 = new Produto("Perfume Floral Elegante", 30);
let produto12 = new Produto("Esfoliante Labial de Baunilha", 12);
let produto13 = new Produto("Creme para Mãos e Unhas", 14);
let produto14 = new Produto("Óleo Essencial de Tea Tree", 25);
let produto15 = new Produto("Mascara Capilar Nutritiva", 18);
let produto16 = new Produto("Gel de Limpeza Facial Suave", 15);
let produto17 = new Produto("Perfume Masculino Intenso", 28);
let produto18 = new Produto("Sabonete Líquido Relaxante", 12);
let produto19 = new Produto("Spray Corporal Refrescante", 10);
let produto20 = new Produto("Creme para Pes Ressecados", 14);

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
cliente10.addProduto(produto11);
cliente11.addProduto(produto11);
cliente12.addProduto(produto12);
cliente13.addProduto(produto13);
cliente14.addProduto(produto14);
cliente15.addProduto(produto15);
cliente16.addProduto(produto16);
cliente17.addProduto(produto17);
cliente18.addProduto(produto18);
cliente19.addProduto(produto19);
cliente20.addProduto(produto20);
cliente21.addProduto(produto1);
cliente22.addProduto(produto2);
cliente23.addProduto(produto3);
cliente24.addProduto(produto4);
cliente25.addProduto(produto5);
cliente26.addProduto(produto6);
cliente27.addProduto(produto7);
cliente28.addProduto(produto8);
cliente29.addProduto(produto9);
cliente30.addProduto(produto10);

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
    console.log(chalk.blueBright(`1. Cadastrar cliente`));
    console.log(chalk.blueBright(`2. Listar todos os clientes`));
    console.log(chalk.blueBright(`3. Atualizar clientes`));
    console.log(chalk.blueBright(`4. Excluir clientes`));
    console.log(chalk.blueBright(`5. Cadastrar Produto`));
    console.log(chalk.blueBright(`6. Listar todos os produtos`));
    console.log(chalk.blueBright(`7. Atualizar produtos`));
    console.log(chalk.blueBright(`8. Excluir produtos`));
    console.log(chalk.blueBright(`9. Cadastrar Serviços`));
    console.log(chalk.blueBright(`10. Listar todos os Serviços`));
    console.log(chalk.blueBright(`11. Atualizar serviços`));
    console.log(chalk.blueBright(`12. Excluir serviços`));
    console.log(chalk.blueBright(`13. Listagem por genero`));
    console.log(chalk.blueBright(`14. Cadastrar consumo de produtos ou serviço para o cliente`));
    console.log(chalk.blueBright(`15. Listagem do consumo dos produtos ou serviços mais consumidos`));
    console.log(chalk.blueBright(`16. Listagem do consumo dos produtos ou serviços menos consumidos`));
    console.log(chalk.blueBright(`17. Listagem do produto ou serviço mais consumido`));
    console.log(chalk.blueBright(`18. Listagem do produto ou serviço mais consumido por genero`));
    console.log(chalk.blueBright(`19. Listagem dos clientes que mais consumiram em valor`));
    console.log(chalk.red(`0. Sair`));

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Escolha uma opçao: `)

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
            console.log(`Fim`)
            break;
        default:
            console.log(`Operaçao invalida `)
    }
}