import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Servicos from "../pages/Servicos/Servicos";
import Medicos from "../pages/Medicos/Medicos";
import Doacoes from "../pages/Doacoes/Doacoes";
import Contato from "../pages/Contato/Contato";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/doacoes" element={<Doacoes />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
}

export default AppRoutes;