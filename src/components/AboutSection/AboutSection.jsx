import "./AboutSection.css";
import sobre from "../../assets/images/sobre.png";

function AboutSection() {
    return (
        <section className="about">

            <div className="container about-container">

                <div className="about-image">
                    <img src={sobre} alt="Sobre" />
                </div>

                <div className="about-content">

                    <span className="section-tag">
                        SOBRE O HOSPITAL
                    </span>

                    <h2>
                        Compromisso com a saúde e o bem-estar da comunidade.
                    </h2>

                    <p>
                        O Hospital Nossa Senhora do Brasil atua oferecendo atendimento
                        humanizado, estrutura moderna e uma equipe preparada para atender
                        pacientes com qualidade, ética e responsabilidade.
                    </p>

                    <p>
                        Nosso compromisso é promover um atendimento seguro, acolhedor e
                        eficiente, colocando sempre o paciente no centro do cuidado.
                    </p>

                    <button>
                        Saiba mais
                    </button>

                </div>

            </div>

        </section>
    );
}

export default AboutSection;