import "./Footer.css";

import logo from "../../assets/images/logo_hosp.jpg";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer(){

    return(

        <footer className="footer">

            <div className="container footer-grid">

                <div>

                    <img
                        src={logo}
                        alt="Hospital"
                        className="footer-logo"
                    />

                    <p>

                        Cuidando da saúde da comunidade
                        com excelência, acolhimento e
                        compromisso.

                    </p>

                </div>

                <div>

                    <h3>Institucional</h3>

                    <ul>

                        <li><a to="/">Início</a></li>

                        <li><a to="/sobre">Sobre</a></li>

                        <li><a to="/servicos">Serviços</a></li>

                        <li><a to="/medicos">Médicos</a></li>

                        <li><a to="/doacoes">Doações</a></li>

                    </ul>

                </div>

                <div>

                    <h3>Contato</h3>

                    <ul>

                        <li><FaMapMarkerAlt/> Bambuí - MG</li>

                        <li><FaPhoneAlt/> (37) 3431-0000</li>

                        <li><FaEnvelope/> contato@hospital.com.br</li>

                    </ul>

                </div>

                <div>

                    <h3>Atendimento</h3>

                    <ul>

                        <li><FaClock/> Atendimento 24 horas</li>

                        <li>Emergência</li>

                        <li>Internação</li>

                    </ul>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 Hospital Nossa Senhora do Brasil.
                Todos os direitos reservados.

            </div>

        </footer>

    )

}

export default Footer;