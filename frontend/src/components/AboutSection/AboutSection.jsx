import "./AboutSection.css";
import sobreFallback from "../../assets/images/sobre_recep.png";
import { useNavigate } from "react-router-dom";
import { useHospitalInfo, useHospitalImages } from "../../hooks/useApi";

function AboutSection() {
    const navigate = useNavigate();
    const { data: info, loading: loadingInfo } = useHospitalInfo();
    const { data: images, loading: loadingImages } = useHospitalImages();

    // Usa a segunda imagem para a seção Sobre (se disponível), senão usa a primeira
    const sobreImage = !loadingImages && images.length > 1
        ? images[1].image
        : !loadingImages && images.length > 0
            ? images[0].image
            : sobreFallback;

    return (
        <section className="about">

            <div className="container about-container">

                <div className="about-image">
                    <img
                        src={loadingImages ? sobreFallback : sobreImage}
                        alt="Sobre o Hospital"
                    />
                </div>

                <div className="about-content">

                    <span className="section-tag">
                        SOBRE O HOSPITAL
                    </span>

                    <h2>
                        {loadingInfo
                            ? "Compromisso com a saúde e o bem-estar da comunidade."
                            : info?.about_title}
                    </h2>

                    <p>
                        {loadingInfo
                            ? "O Hospital Nossa Senhora do Brasil atua oferecendo atendimento humanizado, estrutura moderna e uma equipe preparada para atender pacientes com qualidade, ética e responsabilidade."
                            : info?.about_text_1}
                    </p>

                    <p>
                        {loadingInfo
                            ? "Nosso compromisso é promover um atendimento seguro, acolhedor e eficiente, colocando sempre o paciente no centro do cuidado."
                            : info?.about_text_2}
                    </p>

                    <button onClick={() => navigate("/sobre")}>
                        Saiba mais
                    </button>

                </div>

            </div>

        </section>
    );
}

export default AboutSection;