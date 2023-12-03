import { Component } from "react";
import { Link } from "react-router-dom";

class ListaClientes extends Component {
  render() {
    return (
    <>
      <div style={{ margin: "1em" }}>
        <div className="center">
          <br />
          <h2>Clientes</h2>
        </div>
        <Link
          to="/CadastrarCliente"
          className="btn waves-effect waves-light blue"
        >
          Cadastrar Cliente
        </Link>
        <br />
        <br />
        <br />
      </div>
      <div className="collection">
        <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Nome: Pedro Alcântara de Bragança e Bourbon</h5>
                <h6>Nome Social: Dom Pedro</h6>
                <h6>Email: pedro@pedro.com</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Código Postal: 20010-010</h6>
                <h6>Nº Residência: 48</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(12) 983627384</li>
                  <li>(12) 982244667</li>
                </ul>
              </div>
            </div>
            <Link
              to="/EditarCliente"
              className="btn waves"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Nome: Teresa Cristina de Bourbon-Duas Sicílias</h5>
                <h6>Nome Social: Mãe dos Brasileiros</h6>
                <h6>Email: teresa@teresa.com</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Código Postal: 20010-010</h6>
                <h6>Nº Residência: 48</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(13) 947362746</li>
                  <li>(13) 374837421</li>
                </ul>
              </div>
            </div>
            <Link
              to="/EditarCliente"
              className="btn waves"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Nome: Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança</h5>
                <h6>Nome Social: Princesa Isabel</h6>
                <h6>Email: isabel@isabel.com</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Código Postal: 12857-630</h6>
                <h6>Nº Residência: 48</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(13) 947362746</li>
                  <li>(13) 374837421</li>
                </ul>
              </div>
            </div>
            <Link
              to="/EditarCliente"
              className="btn waves"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Nome: Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias</h5>
                <h6>Nome Social: Pricesa Leopoldina</h6>
                <h6>Email: leopoldina@leopoldina.com</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Código Postal: 12857-463</h6>
                <h6>Nº Residência: 48</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(13) 947362746</li>
                  <li>(13) 374837421</li>
                </ul>
              </div>
            </div>
            <Link
              to="/EditarCliente"
              className="btn waves"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
        </div>
      </div>
    </>
    );
  }
}

export default ListaClientes;