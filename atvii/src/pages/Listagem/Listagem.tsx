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
                        <h3 className="text-align: center">Clientes que mais consumiram produtos e serviços, em quantidade</h3>
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
                                            <td>Victor</td>
                                            <td>16</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ana</td>
                                            <td>12</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Luiz</td>
                                            <td>8</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <h3 className="text-align: center">Clientes que mais consumiram produtos e serviços, em valor</h3>
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
                                            <td>Victor</td>
                                            <td>R$160</td>
                                            <td>R$120</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ana</td>
                                            <td>R$120</td>
                                            <td>R$100</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Luiz</td>
                                            <td>R$80</td>
                                            <td>R$80</td>
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
                                            <td>Victor</td>
                                            <td>M</td>
                                        </tr>
                                        <tr>
                                            <td>Ana</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Luiz</td>
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
                                            <td>Shampoo</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Shampoo</td>
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
                                            <td>Pedicure</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
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
                                            <td>Shampoo</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>Pente</td>
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
                                            <td>Pedicure</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>6</td>
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
                                                <td>Luiz</td>
                                                <td>5</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Victor</td>
                                                <td>7</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Ana</td>
                                                <td>8</td>
                                                <td>9</td>
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