import "./AboutSection.css";
import sobreRecepFallback from "../../assets/images/sobre_recep.png";
import { useNavigate } from "react-router-dom";
import { useHospitalInfo, useHospitalImages } from "../../hooks/useApi";

function AboutSection() {
    const navigate = useNavigate();
    const { data: info, loading: loadingInfo } = useHospitalInfo();
    const { data: images, loading: loadingImages } = useHospitalImages();

    // Busca a imagem sobre_recep no banco de dados; usa o fallback local se não carregou ou não encontrou
    const sobreImage = !loadingImages && images.length > 0
        ? (images.find(img => img.image?.includes('sobre_recep'))?.image || (images.length > 2 ? images[2].image : sobreRecepFallback))
        : sobreRecepFallback;

    return (
        <section className="about">

            <div className="container about-container">

                <div className="about-image">
                    <img
                        src={loadingImages ? sobreRecepFallback : sobreImage}
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