import "./Hero.css";
import hospital from "../../assets/images/hospital.png";
import { useNavigate } from "react-router-dom";

function Hero() {

    const navigate = useNavigate();

    return (
        <section className="hero">

            <div className="container hero-container">

                <div className="hero-text">

                    <span className="hero-subtitle">
                        Hospital Nossa Senhora do Brasil
                    </span>

                    <h1>
                        Saúde com excelência,
                        acolhimento e confiança.
                    </h1>

                    <p>
                        Nossa missão é oferecer atendimento humanizado,
                        tecnologia e profissionais qualificados para cuidar
                        da saúde da comunidade.
                    </p>

                    <div className="hero-buttons">

                        <button className="btn-primary" onClick={() => navigate("/servicos")}>
                        Conheça nossos serviços
                        </button>

                        <button className="btn-outline" onClick={() => navigate("/contato")}>
                        Fale conosco
                        </button>

                    </div>

                </div>

                <div className="hero-image">

                    <img
                        src={hospital}
                        alt="Hospital"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;