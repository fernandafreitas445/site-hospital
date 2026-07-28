import "./Servicos.css";
import { Link } from "react-router-dom";
import {
    FaHeartbeat,
    FaUserMd,
    FaAmbulance,
    FaBaby,
    FaFlask,
    FaProcedures,
    FaArrowRight
} from "react-icons/fa";

function Servicos() {
    const services = [
        {
            icon: <FaUserMd />,
            title: "Clínica Médica",
            text: "Nossos médicos clínicos oferecem atendimento integral, cuidando da sua saúde de forma preventiva, diagnosticando e tratando as principais patologias gerais com empatia e humanidade."
        },
        {
            icon: <FaHeartbeat />,
            title: "Cardiologia",
            text: "Especialidade focada na prevenção, diagnóstico precoce e tratamento de doenças cardiovasculares. Contamos com aparelhos modernos para eletrocardiograma e acompanhamento completo."
        },
        {
            icon: <FaBaby />,
            title: "Pediatria",
            text: "Um olhar afetuoso e especializado para o crescimento seguro e saudável das crianças e bebês. Nossa equipe atende desde consultas de rotina até urgências pediátricas."
        },
        {
            icon: <FaFlask />,
            title: "Exames de Diagnóstico",
            text: "Equipamentos de última geração para exames laboratoriais e diagnóstico por imagem com rapidez e precisão de resultados para apoiar as decisões médicas."
        },
        {
            icon: <FaProcedures />,
            title: "Internações e Cirurgias",
            text: "Quartos confortáveis e centro cirúrgico moderno, equipados com a infraestrutura necessária para oferecer segurança, monitoramento contínuo e ótima recuperação aos pacientes."
        },
        {
            icon: <FaAmbulance />,
            title: "Urgência e Emergência",
            text: "Pronto-atendimento disponível 24 horas por dia, com equipe médica de plantão e triagem rápida para prestar assistência imediata a situações críticas de saúde."
        }
    ];

    return (
        <div className="servicos-page">
            <div className="container">
                
                <div className="servicos-header">
                    <span>O que fazemos</span>
                    <h1>Nossos Serviços</h1>
                    <p>
                        Oferecemos uma estrutura médica completa, atendimento humanizado e 
                        tecnologia de ponta em todas as etapas do seu cuidado de saúde.
                    </p>
                </div>

                <div className="servicos-grid-layout">
                    {services.map((service, index) => (
                        <div className="servico-page-card" key={index}>
                            <div className="servico-page-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <Link 
                                to={`/contato?assunto=Informações sobre ${service.title}`}
                                className="servico-page-link"
                            >
                                Saber Mais <FaArrowRight />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Banner de Destaque */}
                <div className="servico-highlight-banner">
                    <div className="servico-highlight-content">
                        <h2>Precisa de um atendimento especializado?</h2>
                        <p>
                            Nossa central de agendamento está disponível para marcar suas consultas e exames 
                            com comodidade e rapidez. Agende hoje mesmo sua consulta online!
                        </p>
                    </div>
                    <div className="servico-highlight-btn-wrapper">
                        <Link to="/contato?assunto=Agendamento de Consulta" className="servico-highlight-btn">
                            Agendar Agora
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Servicos;