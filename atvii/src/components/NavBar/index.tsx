import {Link} from "react-router-dom";

const Index = () => {
    return (
        <nav className="">
            <div
                className="nav-wrapper"
                style={{
                marginLeft: '10px'
            }}>
                <Link to="/" className="brand-logo">
                    World Beauty
                </Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">Menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/" className="white-text">
                            Clientes
                        </Link>
                    </li>
                    <li>
                        <Link to="/Produtos" className="white-text">
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/Servicos" className="white-text">
                            Servicos
                        </Link>
                    </li>
                    <li>
                        <Link to="/RegistrarCompra" className="white-text">
                            Registrar Compra
                        </Link>
                    </li>
                    <li>
                        <Link to="/Listagem" className="white-text">
                        Listagem
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Index;
