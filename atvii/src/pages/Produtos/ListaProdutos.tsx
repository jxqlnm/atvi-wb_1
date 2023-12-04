import{ Component } from "react";
import { Link } from "react-router-dom";


class ListaProdutos extends Component{
  render() {
  return (
    <>
    <div style={{ margin: "1em" }}>
      <div className="center">
        <br/>
      <h2>Produtos</h2>
      </div>
      <Link to="/CadastrarProduto" className="btn waves-effect waves- purple">
        Cadastrar Produto
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
                <h5>Sabonete de Ervas</h5>
                <h6>Código: 413096403</h6>
                <h6>Preço: R$15,00</h6>
              </div>
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarProduto'
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
                <h5>Condicionador Revitalizante</h5>
                <h6>Código: 282152350</h6>
                <h6>Preço: R$97,00</h6>
              </div>
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarProduto'
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
                <h5>Creme Antirrugas</h5>
                <h6>Código: 254915693</h6>
                <h6>Preço: R$199,00</h6>
              </div>
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarProduto'
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
                <h5>Esfoliante Corporal de Frutas</h5>
                <h6>Código: 418066346</h6>
                <h6>Preço: R$85,00</h6>
              </div>
            </div>
            <Link
              className="btn waves cyan"
              to='/EditarProduto'
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

export default ListaProdutos;