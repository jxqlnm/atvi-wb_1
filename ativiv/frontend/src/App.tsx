import { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import FormularioCadastroCliente from "./componentes/CadastroCliente";
import Listagens from "./componentes/Listagens";

class App extends Component{
    render() {
        return(
            <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/listagens" />} />
                <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente />} />
                <Route path="/Listagens" element={<Listagens/>}/>
            </Routes>
        </BrowserRouter>
        )
    }
}

export default App
