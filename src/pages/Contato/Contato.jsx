import "./Contato.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebookF
} from "react-icons/fa";

function Contato() {

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

                    <div className="contact-info-grid">

                        <div className="contact-card">

                            <div className="icon-circle">
                                <FaMapMarkerAlt />
                            </div>

                            <h3>Endereço</h3>

                            <p>
                                Praça Dom Eduardo, Centro<br/>
                                Bambuí - MG
                            </p>

                        </div>

                        <div className="contact-card">

                            <div className="icon-circle">
                                <FaInstagram />
                            </div>

                            <h3>Instagram</h3>

                            <p>@hospitalnsbrasil</p>

                        </div>

                        <div className="contact-card">

                            <div className="icon-circle">
                                <FaPhoneAlt />
                            </div>

                            <h3>Telefone</h3>

                            <p>(37) 3431-0000</p>

                        </div>

                        <div className="contact-card">

                            <div className="icon-circle">
                                <FaFacebookF />
                            </div>

                            <h3>Facebook</h3>

                            <p>Hospital Nossa Senhora do Brasil</p>

                        </div>

                        <div className="contact-card">

                            <div className="icon-circle">
                                <FaEnvelope />
                            </div>

                            <h3>E-mail</h3>

                            <p>contato@hospital.com.br</p>

                        </div>

                        <div className="contact-card">

                            <div className="icon-circle">
                                <FaClock />
                            </div>

                            <h3>Horário</h3>

                            <p>Atendimento 24 horas</p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    )

}

export default Contato;