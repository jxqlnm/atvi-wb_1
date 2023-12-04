import {Component} from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css';

class FormularioEditaServico extends Component {

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
                        <h2>Editar Servico</h2>
                    </div>

                    <div className="row">

                        <div className="input-field col s3">
                            <label htmlFor="codigo" className="label">
                                Codigo:
                            </label>
                            <br/>
                            <input id="codigo" type="text" className="validate"/>
                        </div>

                        <div className="input-field col s3">
                            <label htmlFor="nome" className="label">
                                Nome:
                            </label>
                            <br/>
                            <input id="nome" type="text" className="validate"/>
                        </div>

                        <div className="input-field col s3">
                            <label htmlFor="preco" className="label">
                                Preco:
                            </label>
                            <br/>
                            <input id="preco" type="text" className="validate"/>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col s12">
                            <Link
                                to="/Servicos"
                                className="btn"
                                style={{
                                position: 'absolute',
                                bottom: 50,
                                left: 50
                            }}>
                                Atualizar
                            </Link>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default FormularioEditaServico;