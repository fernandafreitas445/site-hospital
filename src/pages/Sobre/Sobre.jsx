import "./Sobre.css";

import hospital from "../../assets/images/hospital.png";

function Sobre() {

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
                        src={hospital}
                        alt="Hospital"
                    />

                </div>

                <div className="about-text">

                    <h2>Excelência em atendimento.</h2>

                    <p>
                        O Hospital Nossa Senhora do Brasil atua há décadas
                        oferecendo assistência médica de qualidade,
                        sempre priorizando o cuidado humanizado,
                        a ética e o respeito aos pacientes.
                    </p>

                    <p>
                        Nossa estrutura foi planejada para proporcionar
                        conforto, segurança e atendimento eficiente,
                        contando com profissionais altamente capacitados.
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
                            Promover atendimento humanizado e de excelência.
                        </p>

                    </div>

                    <div>

                        <h3>Visão</h3>

                        <p>
                            Ser referência regional em qualidade hospitalar.
                        </p>

                    </div>

                    <div>

                        <h3>Valores</h3>

                        <p>
                            Ética, respeito, compromisso e inovação.
                        </p>

                    </div>

                </div>

            </section>

        </main>

    )

}

export default Sobre;