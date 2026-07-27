import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo_hosp from "../../assets/images/logo_hosp.png";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-content">

            <Link to="/" className="logo">
                <img src={logo_hosp} alt="Hospital Nossa Senhora do Brasil" />
            </Link>

            <nav className="nav-menu">
                <NavLink to="/" end>Início</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/servicos">Serviços</NavLink>
                <NavLink to="/medicos">Médicos</NavLink>
                <NavLink to="/doacoes">Doações</NavLink>
                <NavLink to="/contato">Contato</NavLink>
            </nav>

            </div>
        </header>
    );
}

export default Navbar;