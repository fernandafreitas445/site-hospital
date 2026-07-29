import "./Sobre.css";
import hospitalFallback from "../../assets/images/hospital.png";
import { useHospitalInfo, useHospitalImages } from "../../hooks/useApi";

function Sobre() {
    const { data: info, loading: loadingInfo } = useHospitalInfo();
    const { data: images, loading: loadingImages } = useHospitalImages();

    const hospitalImage = !loadingImages && images.length > 0
        ? images[0].image
        : hospitalFallback;

    return (

        <main className="sobre">

            <section className="page-header">

                <div className="container">

                    <h1>Sobre o Hospital</h1>

                    <p>
                        Conheça nossa história, missão e compromisso
                        com a saúde da comunidade.
                    </p>

                </div>

            </section>

            <section className="container about-page">

                <div className="about-image">

                    <img
                        src={loadingImages ? hospitalFallback : hospitalImage}
                        alt="Hospital"
                    />

                </div>

                <div className="about-text">

                    <h2>Excelência em atendimento.</h2>

                    <p>
                        {loadingInfo
                            ? "O Hospital Nossa Senhora do Brasil atua há décadas oferecendo assistência médica de qualidade, sempre priorizando o cuidado humanizado, a ética e o respeito aos pacientes."
                            : info?.about_text_1}
                    </p>

                    <p>
                        {loadingInfo
                            ? "Nossa estrutura foi planejada para proporcionar conforto, segurança e atendimento eficiente, contando com profissionais altamente capacitados."
                            : info?.about_text_2}
                    </p>

                    <p>
                        Trabalhamos diariamente para promover saúde,
                        bem-estar e qualidade de vida para toda a comunidade.
                    </p>

                </div>

            </section>

            <section className="mission">

                <div className="container mission-grid">

                    <div>

                        <h3>Missão</h3>

                        <p>
                            {loadingInfo
                                ? "Promover atendimento humanizado e de excelência."
                                : info?.mission}
                        </p>

                    </div>

                    <div>

                        <h3>Visão</h3>

                        <p>
                            {loadingInfo
                                ? "Ser referência regional em qualidade hospitalar."
                                : info?.vision}
                        </p>

                    </div>

                    <div>

                        <h3>Valores</h3>

                        <p>
                            {loadingInfo
                                ? "Ética, respeito, compromisso e inovação."
                                : info?.values}
                        </p>

                    </div>

                </div>

            </section>

        </main>

    )

}

export default Sobre;