import {Component} from "react";
import {Link} from "react-router-dom";

class FormularioEditaCliente extends Component {
    render() {
        return (
            <div style={{
                margin: "3em"
            }}>
                <form className="col s12">
                    <div className="center-align">
                        <h2>Editar Cliente</h2>
                    </div>

                    <div className="row">

                        <div
                            className="input-field col"
                            style={{
                            width: "25%"
                        }}>
                            <label htmlFor="nome">Nome:</label>
                            <br/>
                            <input id="nome" type="text" name="nome" className="validate"/>
                        </div>

                        <div
                            className="input-field col"
                            style={{
                            width: "25%"
                        }}>
                            <label htmlFor="nomeSocial">Nome Social:</label>
                            <br/>
                            <input id="nomeSocial" type="text" className="validate"/>
                        </div>

                        <div
                            className="input-field col"
                            style={{
                            width: "25%"
                        }}>
                            <label htmlFor="telefone">Telefone:</label>
                            <br/>
                            <input id="telefone" type="text" className="validate"/>
                        </div>

                    </div>

                    <div className="row">

                        <div
                            className="input-field col"
                            style={{
                            width: "25%"
                        }}>
                            <label htmlFor="cpf">CPF:</label>
                            <br/>
                            <input id="cpf" type="text" name="cpf" className="validate"/>
                        </div>

                        <div
                            className="input-field col"
                            style={{
                            width: "25%"
                        }}>
                            <label htmlFor="rg">RG:</label>
                            <br/>
                            <input id="rg" type="text" name="rg" className="validate"/>
                        </div>

                        <div
                            className="input-field col"
                            style={{
                            width: "25%"
                        }}>
                            <label htmlFor="genero">Genero:</label>
                            <br/>
                            <input id="genero" type="text" className="validate"/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col s12">
                            <Link to="/" className="btn">
                                Atualizar
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormularioEditaCliente;