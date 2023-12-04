import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscadores/buscadorClientes";
import RemovedorCliente from "../removedores/removedorCliente";
import Endereco from "./models/endereco";
import Cliente from "./models/cliente";
import Telefone from "./models/telefone";



type state = {
    clientes: any[]
}


export default class Listagens extends Component<{}, state> {

    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        this.excluirLocal = this.excluirLocal.bind(this)
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar()
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes
        })
        this.excluirRemoto(id)
    }
    componentDidMount() {
        this.buscarClientes();
        console.log(M);
        M.AutoInit();
    }
    
render() {
    return (
        <div>
        <>
            <nav>
                <div className="nav-wrapper">
                    <a style={{marginLeft: '12px'}} href="/listagens">Cliente</a>
                    <a style={{marginLeft: '12px'}} href="/formularioCadastroCliente">Cadastrar Cliente</a>
                </div>
            </nav>

        </>
        {this.state.clientes.map(item => {
                        let endereco = new Endereco(item.endereco.cidade, item.endereco.estado, item.endereco.rua, item.endereco.bairro, item.endereco.numero, item.endereco.informacoesAdicionais, item.endereco.codigoPostal)
                        endereco.id = item.endereco.id
                        let cliente = new Cliente(item.nome, item.sobreNome, item.email, endereco)
                        cliente.id = item.id
                        return (
                            <div className='container center'>
                            <br></br>
                            <h3>Clientes</h3>
                            <div className="row">
                                <div className="">
                                    <ul className="tabs-swipe-demo tabs tabsConsumo ">
                                        <li className="tab col s12"><a href="#2" style={{color: 'black', fontSize: '16px'}}><h5> {item.nome}</h5></a></li>
                                    </ul>
                                </div>
                                <div id="1" className="col s12">
                                    <form>
                                        <div>
                                            <table className='responsive-table centered'>
                                                <thead>
                                                    <tr>
                                                        <th>Nome</th>
                                                        <th>Sobrenome</th>
                                                        <th>Email</th>
                                                        <th>DDD</th>
                                                        <th>Número</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td id="nome_cliente" >{item.nome}</td>
                                                        <td id="sobrenome_clienet">{item.sobreNome}</td>
                                                        <td id="email_cliente">{item.email}</td>
                                                        {item.telefones.map(t => {
                                                        let tel = new Telefone()
                                                        tel.ddd = t.ddd
                                                        tel.numero = t.numero
                                                        cliente.telefones.push(tel)
                                                        return (
                                                            <>
                                                            <td id="ddd_cliente">{t.ddd}</td>
                                                            <td id="numeroTel_cliente">{t.numero}</td>
                                                            </>
                                                        )
                                                    })}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className='responsive-table centered'>
                                                <thead>
                                                    <tr>
                                                        <th>Estado</th>
                                                        <th>Cidade</th>
                                                        <th>Bairro</th>
                                                        <th>Rua</th>
                                                        <th>N°</th>
                                                        <th>Código postal</th>
                                                        <th>Informações adicionais</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td id="estado_cliente">{item.endereco.estado}</td>
                                                        <td id="cidade_cliente">{item.endereco.cidade}</td>
                                                        <td id="bairro_cliente">{item.endereco.bairro}</td>
                                                        <td id="rua_cliente">{item.endereco.rua}</td>
                                                        <td id="numeroCasa_cliente">{item.endereco.numero}</td>
                                                        <td id="codigoPostal_cliente">{item.endereco.codigoPostal}</td>
                                                        <td id="informacoesAdicionais_cliente">{item.endereco.informacoesAdicionais}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <br></br>
                                        <div className="col s2">
                                                <button className="btn waves-effect waves-light"type="submit" name="action" 
                                                    onClick={(e) => this.excluirLocal(cliente['id'], e)}>Excluir
                                                </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        )
                    })}
        </div>
        )
    }
}