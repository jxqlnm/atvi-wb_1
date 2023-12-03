import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import ListaClientes from "./pages/Clientes/ListaClientes";
import FormularioCadastroCliente from "./pages/Clientes/FormularioCadastroCliente";
import FormularioEditaCliente from "./pages/Clientes/FormularioEditaCliente";

import ListaProdutos from "./pages/Produtos/ListaProdutos";
import FormularioCadastroProdutos from "./pages/Produtos/FormularioCadastroProdutos";
import FormularioEditaProduto from "./pages/Produtos/FormularioEditaProduto";

import ListaServicos from "./pages/Servicos/ListaServicos";
import FormularioCadastroServico from "./pages/Servicos/FormularioCadastroServico";
import FormularioEditaServico from "./pages/Servicos/FormularioEditaServico";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< ListaClientes />}/>
                <Route path="/CadastrarCliente" element={< FormularioCadastroCliente />}/>
                <Route path="/EditarCliente" element={< FormularioEditaCliente />}/>

                <Route path="/ListaProdutos" element={< ListaProdutos />}/>
                <Route
                    path="/FormularioCadastroProdutos"
                    element={< FormularioCadastroProdutos />}/>
                <Route path="/FormularioEditaProduto" element={< FormularioEditaProduto />}/>

                <Route path="/ListaServicos" element={< ListaServicos />}/>
                <Route
                    path="/FormularioCadastroServico"
                    element={< FormularioCadastroServico />}/>
                <Route path="/FormularioEditaServico" element={< FormularioEditaServico />}/>

            </Routes>
        </Router>
    );
};
export default AppRoutes;
