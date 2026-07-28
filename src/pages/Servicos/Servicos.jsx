import "./Servicos.css";

import {
    FaHeartbeat,
    FaUserMd,
    FaAmbulance,
    FaBaby,
    FaFlask,
    FaProcedures,
    FaXRay,
    FaStethoscope
} from "react-icons/fa";

function Servicos() {

    const services = [
        {
            icon: <FaUserMd />,
            title: "Clínica Médica",
            text: "Atendimento para prevenção, diagnóstico e tratamento de diversas doenças."
        },
        {
            icon: <FaHeartbeat />,
            title: "Cardiologia",
            text: "Acompanhamento especializado para a saúde cardiovascular."
        },
        {
            icon: <FaBaby />,
            title: "Pediatria",
            text: "Cuidados médicos completos para crianças e adolescentes."
        },
        {
            icon: <FaFlask />,
            title: "Exames Laboratoriais",
            text: "Diagnósticos rápidos e precisos para auxiliar no tratamento."
        },
        {
            icon: <FaProcedures />,
            title: "Internação",
            text: "Estrutura confortável e segura para recuperação dos pacientes."
        },
        {
            icon: <FaAmbulance />,
            title: "Urgência e Emergência",
            text: "Atendimento disponível para situações de emergência."
        },
        {
            icon: <FaXRay />,
            title: "Exames de Imagem",
            text: "Raio-X, ultrassom e outros exames para apoio ao diagnóstico."
        },
        {
            icon: <FaStethoscope />,
            title: "Consultas Especializadas",
            text: "Atendimento em diversas especialidades médicas."
        }
    ];

    return (

        <main>

            <section className="page-header">

                <div className="container">

                    <h1>Nossos Serviços</h1>

                    <p>
                        Atendimento completo, estrutura moderna e profissionais qualificados para cuidar da sua saúde.
                    </p>

                </div>

            </section>

            <section className="services-page">

                <div className="container">

                    <div className="services-grid">

                        {services.map((service, index) => (

                            <div className="service-page-card" key={index}>

                                <div className="service-page-icon">
                                    {service.icon}
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.text}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </main>

    );

}

export default Servicos;