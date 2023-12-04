import { Component } from "react";

class Listagem extends Component{
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tabs');
            M.Tabs.init(elems);
        });
    }
    render() {
        return (
            <>
                <div className="row">
        
    
                    {/* Clientes que mais consumiram */}
                    <div id="clientesMaisConsumiram" className="col s12">
                        <div className="row">
                        <h3 className="text-align: center">Clientes que mais consumiram produtos e serviços (quantidade) </h3>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Qtd produtos consumidos</th>
                                            <th>Qtd serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Teresa</td>
                                            <td>17</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Pedro</td>
                                            <td>10</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Isabel</td>
                                            <td>9</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Leopoldina</td>
                                            <td>7</td>
                                            <td>3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <h3 className="text-align: center">Clientes que mais consumiram produtos e serviços (valor) </h3>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Valor total de produtos consumidos</th>
                                            <th>Valor total de serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Teresa</td>
                                            <td>R$15.000</td>
                                            <td>R$10.000</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Isabel</td>
                                            <td>R$12.000</td>
                                            <td>R$8.000</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pedro</td>
                                            <td>R$900</td>
                                            <td>R$900</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Leopoldina</td>
                                            <td>R$500</td>
                                            <td>R$120</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    {/* Clientes por gênero */}
                    <div id="generoClientes" className="col s12">
                        <div className="row">
                        <h3 className="text-align: center">Todos os clientes por gênero</h3>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Teresa</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Isabel</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Pedro</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <h3 className="text-align: center">Produtos e serviços mais consumidos por gênero</h3>
                        <div className="row">
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Sabonete de Ervas</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Esfoliante Corporal de Frutas</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Tratamento Facial Anti-idade</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Massagem Relaxante com Óleos Essenciais</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Produtos e serviços mais consumidos */}
                    <div id="produtosServicosMaisConsumidos" className="col s12">
                        <div className="row" >
                        <h3 className="text-align: center">Produtos mais consumidos</h3>
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Qtd de pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Sabonete de Ervas</td>
                                            <td> 250
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Esfoliante Corporal de Frutas</td>
                                            <td>25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <h3 className="text-align: center">Serviços mais consumidos</h3>
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Qtd de pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Massagem Relaxante com Óleos Essenciais</td>
                                            <td>700</td>
                                        </tr>
                                        <tr>
                                            <td>Tratamento Facial Anti-idade</td>
                                            <td>170</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Produtos e serviços menos consumidos */}
                    <div id="clientesMenosConsumiram" className="col s12">
                    <div className="row">
                    <h3 className="text-align: center">Clientes que menos consumiram</h3>
                                <div className="col s12">
                                    <table className="centered responsive-table ">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Nome</th>
                                                <th>Qtd produtos consumidos</th>
                                                <th>Qtd serviços utilizados</th>
                                            </tr>
                                        </thead>
    
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Leopoldina</td>
                                                <td>7</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Isabel</td>
                                                <td>9</td>
                                                <td>7</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Pedro</td>
                                                <td>10</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Listagem;