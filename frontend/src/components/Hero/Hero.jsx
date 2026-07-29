import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useHospitalImages } from "../../hooks/useApi";
import hospitalFallback from "../../assets/images/hospital.png";

function Hero() {
    const navigate = useNavigate();
    const { data: images, loading } = useHospitalImages();

    // Pega a primeira imagem cadastrada no banco; usa o fallback local se ainda não carregou
    const heroImage = !loading && images.length > 0
        ? images[0].image
        : hospitalFallback;

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
                        src={heroImage}
                        alt="Hospital Nossa Senhora do Brasil"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;