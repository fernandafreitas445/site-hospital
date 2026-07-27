import "./ServicesSection.css";

import {
    FaHeartbeat,
    FaUserMd,
    FaAmbulance,
    FaBaby,
    FaFlask,
    FaProcedures
} from "react-icons/fa";

function ServicesSection() {

    const services = [
        {
            icon: <FaUserMd />,
            title: "Clínica Médica",
            text: "Atendimento clínico com foco na prevenção, diagnóstico e tratamento."
        },
        {
            icon: <FaHeartbeat />,
            title: "Cardiologia",
            text: "Cuidados especializados para a saúde do coração."
        },
        {
            icon: <FaBaby />,
            title: "Pediatria",
            text: "Atendimento dedicado à saúde de crianças e adolescentes."
        },
        {
            icon: <FaFlask />,
            title: "Exames",
            text: "Exames laboratoriais e apoio ao diagnóstico."
        },
        {
            icon: <FaProcedures />,
            title: "Internação",
            text: "Estrutura preparada para internações com conforto e segurança."
        },
        {
            icon: <FaAmbulance />,
            title: "Urgência e Emergência",
            text: "Atendimento rápido para situações de urgência e emergência."
        }
    ];

    return (

        <section className="services">

            <div className="container">

                <div className="section-header">

                    <span>NOSSOS SERVIÇOS</span>

                    <h2>
                        Atendimento completo para cuidar de você.
                    </h2>

                    <p>
                        Contamos com uma equipe qualificada e uma estrutura preparada
                        para oferecer atendimento de qualidade em diferentes áreas.
                    </p>

                </div>

                <div className="services-grid">

                    {services.map((service, index) => (

                    <div className="service-card" key={index}>

                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.text}</p>

                    </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default ServicesSection;