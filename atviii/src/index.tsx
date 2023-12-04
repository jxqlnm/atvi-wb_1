import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";

import App from "./App";

import ListaClientes from "./pages/Clientes/ListaClientes";
import FormularioCadastroCliente from "./pages/Clientes/FormularioCadastroCliente";
import FormularioEditaCliente from "./pages/Clientes/FormularioEditaCliente";

import ListaProdutos from "./pages/Produtos/ListaProdutos";
import FormularioCadastroProdutos from "./pages/Produtos/FormularioCadastroProdutos";
import FormularioEditaProduto from "./pages/Produtos/FormularioEditaProduto";

import ListaServicos from "./pages/Servicos/ListaServicos";
import FormularioCadastroServico from "./pages/Servicos/FormularioCadastroServico";
import FormularioEditaServico from "./pages/Servicos/FormularioEditaServico";

import Listagem from "./pages/Listagem/Listagem";

import RegistraCompra from "./pages/Compras/RegistraCompra";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <ListaClientes/>
            }, {
                path: "/CadastrarCliente",
                element: <FormularioCadastroCliente/>
            }, {
                path: "/EditarCliente",
                element: <FormularioEditaCliente/>
            }, {
                path: "/Produtos",
                element: <ListaProdutos/>
            }, {
                path: "/Servicos",
                element: <ListaServicos/>
            }, {
                path: "/CadastrarServico",
                element: <FormularioCadastroServico/>
            }, {
                path: "/EditarServico",
                element: <FormularioEditaServico/>
            }, {
                path: "/CadastrarProduto",
                element: <FormularioCadastroProdutos/>
            }, {
                path: "/EditarProduto",
                element: <FormularioEditaProduto/>
            }, {
              path: "/Listagem",
              element: <Listagem/>
            }, {
              path: "/RegistrarCompra",
              element: <RegistraCompra/>
          }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);