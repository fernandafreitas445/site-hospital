import "./Footer.css";
import logo_hosp from "../../assets/images/logo_hosp.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">

            <div className="footer-brand">
                <img
                    src={logo_hosp}
                    alt="Hospital Nossa Senhora do Brasil"
                />

                <h3>Hospital Nossa Senhora do Brasil</h3>

                <p>
                    Cuidando da saúde da comunidade com excelência,
                    acolhimento e compromisso.
                </p>
            </div>

            <div className="footer-info">

                <h4>Contato</h4>

                <p> Bambuí - MG</p>
                <p> (37) XXXX-XXXX</p>
                <p> contato@hospital.com.br</p>

            </div>

            </div>

            <div className="footer-bottom">
                © 2026 Hospital Nossa Senhora do Brasil. Todos os direitos reservados.
            </div>
        </footer>
    );
}

export default Footer;