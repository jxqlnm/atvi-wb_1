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
          className="btn waves-effect waves-light purple"
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
                <h5>Pedro Alcântara de Bragança e Bourbon</h5>
                <h6>Nome Social: Dom Pedro</h6>
                <h6>Email: pedro@pedro.com</h6>
                <h6>Gênero: Masc.</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6><h6>RG: 460367705</h6></h6>
                <h6>CPF: 38075125193</h6>
                <h6> Telefone: (61) 991258201 </h6>
                
              </div> 
            </div>
            <Link
              to="/EditarCliente"
              className="btn waves cyan"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves pink pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Teresa Cristina de Bourbon-Duas Sicílias</h5>
                <h6>Nome Social: Mãe dos Brasileiros</h6>
                <h6>Email: teresa@teresa.com</h6>
                <h6>Gênero: Fem.</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6><h6>RG: 406117160</h6></h6>
                <h6>CPF: 96613778125</h6>
                <h6> Telefone: (71) 36873185 </h6>
              </div>
             </div>
            <Link
              to="/EditarCliente"
              className="btn waves cyan"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves pink pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança</h5>
                <h6>Nome Social: Princesa Isabel</h6>
                <h6>Email: isabel@isabel.com</h6>
                <h6>Gênero: Fem.</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6><h6>RG: 282022545</h6></h6>
                <h6>CPF: 66166420200</h6>
                <h6> Telefone: (79) 38477775 </h6>
              </div>
             </div>
            <Link
              to="/EditarCliente"
              className="btn wave cyan"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves pink pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias</h5>
                <h6>Nome Social: Pricesa Leopoldina</h6>
                <h6>Email: leopoldina@leopoldina.com</h6>
                <h6>Gênero: Fem.</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6><h6>RG: 490581675</h6></h6>
                <h6>CPF: 99564942241</h6>
                <h6> Telefone: (75) 29917991 </h6>
              </div>
             </div>
            <Link
              to="/EditarCliente"
              className="btn waves cyan"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Vizualizar
            </Link>

            <button
              className="btn-floating btn waves pink pl-2"
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