import "./Hero.css";
import hospital from "../../assets/images/hospital.png"

function Hero() {
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

                        <button className="btn-primary">
                        Conheça nossos serviços
                        </button>

                        <button className="btn-outline">
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