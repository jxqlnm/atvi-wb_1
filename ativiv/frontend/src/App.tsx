import { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import FormularioCadastroCliente from "./componentes/CadastroCliente";
import Home from "./componentes/home";
import Listagens from "./componentes/Listagens";

class App extends Component{
    render() {
        return(
            <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente />} />
                <Route path="/Listagens" element={<Listagens/>}/>
            </Routes>
        </BrowserRouter>
        )
    }
}

export default App
