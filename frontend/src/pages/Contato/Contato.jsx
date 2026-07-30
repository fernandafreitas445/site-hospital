import "./Contato.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebookF
} from "react-icons/fa";

import { useHospitalInfo } from "../../hooks/useApi";

function Contato() {
    const { data: info, loading } = useHospitalInfo();

    const contactCards = loading ? [] : [
        {
            icon: <FaMapMarkerAlt />,
            title: "Endereço",
            value: info?.address ?? "Rua Dr. Mário Campos, 80, Centro, Bambuí - MG"
        },
        {
            icon: <FaInstagram />,
            title: "Instagram",
            value: info?.instagram ?? "@hospitalnsbrasil"
        },
        {
            icon: <FaPhoneAlt />,
            title: "Telefone",
            value: info?.phone ?? "(37) 3417-0241"
        },
        {
            icon: <FaFacebookF />,
            title: "Facebook",
            value: info?.facebook ?? "Hospital Nossa Senhora do Brasil"
        },
        {
            icon: <FaEnvelope />,
            title: "E-mail",
            value: info?.email ?? "hospitalnsbrasil@yahoo.com.br"
        },
        {
            icon: <FaClock />,
            title: "Horário",
            value: info?.working_hours ?? "Atendimento 24 horas"
        }
    ];

    return (

        <main>

            <section className="page-header">

                <div className="container">

                    <h1>Contato</h1>

                    <p>

                        Estamos à disposição para esclarecer dúvidas,
                        fornecer informações e receber seu contato.

                    </p>

                </div>

            </section>

            <section className="contact-page">

                <div className="container">

                    {loading ? (
                        <p style={{ textAlign: 'center', color: '#666' }}>Carregando informações de contato...</p>
                    ) : (
                        <div className="contact-info-grid">

                            {contactCards.map((card, index) => (

                                <div className="contact-card" key={index}>

                                    <div className="icon-circle">
                                        {card.icon}
                                    </div>

                                    <h3>{card.title}</h3>

                                    <p>{card.value}</p>

                                </div>

                            ))}

                        </div>
                    )}

                </div>

            </section>

        </main>

    )

}

export default Contato;