import{ Component } from "react";
import { Link } from "react-router-dom";


class ListaServicos extends Component{
  render() {
  return (
    <>
    <div style={{ margin: "1em" }}>
      <div className="center">
        <br/>
      <h2>Serviços</h2>
      </div>
      <Link to="/CadastrarServico" className="btn waves-effect waves- purple">
        Cadastrar Servico
      </Link>
      <br/>
      <br/>
      <br/>

    </div>
    <div className="collection">
    <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a className="collection-item" style={{ position: "relative" }}>
            <div className="row">
              <div className="col s5">
                <h5>Corte de Cabelo Moderno</h5>
                <h6>Código: 426264940</h6>
                <h6>Preço: R$84,00</h6>
              </div>
             
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
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
                <h5>Tratamento Facial Anti-idade</h5>
                <h6>Código: 300358271</h6>
                <h6>Preço: R$554,00</h6>
              </div>
              </div>
            <Link
              className="btn waves cyan"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
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
                <h5>Remoçao de Manchas na Pele a Laser</h5>
                <h6>Código: 208479314</h6>
                <h6>Preço: R$1500,00</h6>
              </div>
             
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
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
                <h5>Massagem Relaxante com Óleos Essenciais</h5>
                <h6>Código: 398094822</h6>
                <h6>Preço: R$180,00</h6>
              </div>
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
            </Link>
            <button
              className="btn-floating btn waves pink pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
        </div>
      </div>;
  </>
  );
}
}

export default ListaServicos;