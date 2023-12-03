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
      <Link to="/CadastrarServico" className="btn waves-effect waves-light blue">
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
                <h5>Nome: Belinha</h5>
                <h6> Tipo: Cachorro</h6>
                <h6>Raça: Pinsher</h6>
                <h6>Gênero: Fêmea</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Dono: Francisca de Moraes</h6>
                <h6>CPF: 283748374-21</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(13) 947362746</li>
                  <li>(13) 984738473</li>
                </ul>
              </div>
            </div>
            <Link
              className="btn waves"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
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
                <h5>Nome: Max</h5>
                <h6> Tipo: Cachorro</h6>
                <h6>Raça: Golden Retriever</h6>
                <h6>Gênero: Macho</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Dono: Eduardo de Lima</h6>
                <h6>CPF: 58475847482</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(12) 994738273</li>
                </ul>
              </div>
            </div>
            <Link
              className="btn waves"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
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
                <h5>Nome: Sofia</h5>
                <h6> Tipo: Gato</h6>
                <h6>Raça: Siamês</h6>
                <h6>Gênero: Fêmea</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Dono: Maria Eduarda de Moraes</h6>
                <h6>CPF: 58474837243</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(13) 947384732</li>
                  <li>(13) 936273643</li>
                </ul>
              </div>
            </div>
            <Link
              className="btn waves"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
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
                <h5>Nome: Lassie</h5>
                <h6> Tipo: Cachorro</h6>
                <h6>Raça: Vira-lata</h6>
                <h6>Gênero: Fêmea</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Dono: Mauricio de Souza</h6>
                <h6>CPF: 48394839483</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>(13) 948394834</li>
                  <li>(13) 949380349</li>
                </ul>
              </div>
            </div>
            <Link
              className="btn waves"
              to='/EditarServico'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
            </Link>
            <button
              className="btn-floating btn waves red pl-2"
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