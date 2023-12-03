import {Component} from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css';

class RegistraCompra extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div style={{
                margin: '3em'
            }}>
                <form className="col s12">
                    <div className="center-align">
                        <h2>Registra Compra</h2>
                    </div>

                    <div className="row">

                        <div className="input-field col s3">
                            <label htmlFor="cliente" className="label">
                                Cliente:
                            </label>
                            <br/>
                            <input id="cliente" type="text" className="validate"/>
                        </div>

                        <div className="input-field col s3">
                            <label htmlFor="produto" className="label">
                                Produto:
                            </label>
                            <br/>
                            <input id="produto" type="text" className="validate"/>
                        </div>

                        <div className="input-field col s3">
                            <label htmlFor="servico" className="label">
                                Servico:
                            </label>
                            <br/>
                            <input id="servico" type="text" className="validate"/>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col s12">
                            <Link
                                to="/Produtos"
                                className="btn"
                                style={{
                                position: 'absolute',
                                bottom: 50,
                                left: 50
                            }}>
                                Registrar
                            </Link>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default RegistraCompra;