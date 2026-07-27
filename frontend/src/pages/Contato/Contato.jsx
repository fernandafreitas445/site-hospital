import { useState, useEffect } from "react";
import "./Contato.css";
import { getHospitalInfo, sendContactMessage } from "../../services/api";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contato() {
    const query = new URLSearchParams(useLocation().search);
    const assuntoParam = query.get("assunto") || "";

    const [hospitalInfo, setHospitalInfo] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
    });
    
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });

    useEffect(() => {
        // Carrega info do hospital
        getHospitalInfo()
            .then(data => setHospitalInfo(data))
            .catch(err => console.error("Erro ao carregar informações de contato do hospital:", err));
    }, []);

    useEffect(() => {
        // Preenche o assunto automaticamente se vier via URL
        if (assuntoParam) {
            setFormData(prev => ({ ...prev, assunto: assuntoParam }));
        }
    }, [assuntoParam]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus({ type: null, message: "" });

        try {
            await sendContactMessage(formData);
            setStatus({
                type: "success",
                message: "Sua mensagem foi enviada com sucesso! Em breve nossa equipe entrará em contato."
            });
            // Limpa o formulário
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                assunto: "",
                mensagem: ""
            });
        } catch (error) {
            setStatus({
                type: "danger",
                message: error.message || "Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde."
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contato-page">
            <div className="container">
                
                <div className="contato-header">
                    <span>Fale Conosco</span>
                    <h1>Contato</h1>
                    <p>
                        Dúvidas, agendamentos, sugestões ou elogios? Entre em contato conosco através do 
                        formulário abaixo ou utilize nossos canais de atendimento direto.
                    </p>
                </div>

                <div className="contato-layout-grid">
                    
                    {/* Lado Esquerdo: Formulário de Contato */}
                    <div className="contato-form-card">
                        {status.type && (
                            <div className={`alert-msg alert-msg-${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome Completo *</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    className="form-control-input"
                                    required
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Digite seu nome completo"
                                />
                            </div>

                            <div className="form-group-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control-input"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu.email@exemplo.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefone">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        className="form-control-input"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        placeholder="(37) 99999-9999"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="assunto">Assunto *</label>
                                <input
                                    type="text"
                                    id="assunto"
                                    name="assunto"
                                    className="form-control-input"
                                    required
                                    value={formData.assunto}
                                    onChange={handleChange}
                                    placeholder="Ex: Agendamento de Consulta, Dúvidas, Comercial"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem *</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    className="form-control-input"
                                    required
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    placeholder="Escreva sua mensagem com detalhes..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={submitting}
                            >
                                {submitting ? "Enviando..." : "Enviar Mensagem"}
                            </button>
                        </form>
                    </div>

                    {/* Lado Direito: Informações Institucionais */}
                    <div className="contato-info-card">
                        <h3>Informações de Contato</h3>
                        
                        <div className="info-item">
                            <div className="info-item-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="info-item-content">
                                <h4>Endereço</h4>
                                <p>{hospitalInfo ? hospitalInfo.endereco : "Av. Armando Franco, 350 - Centro, Bambuí - MG"}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-item-icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="info-item-content">
                                <h4>Telefone</h4>
                                <p>{hospitalInfo ? hospitalInfo.telefone : "(37) 3431-0000"}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-item-icon">
                                <FaEnvelope />
                            </div>
                            <div className="info-item-content">
                                <h4>E-mail</h4>
                                <p>{hospitalInfo ? hospitalInfo.email : "contato@hospital.com.br"}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-item-icon">
                                <FaClock />
                            </div>
                            <div className="info-item-content">
                                <h4>Horário de Funcionamento</h4>
                                <p>{hospitalInfo ? hospitalInfo.horario_funcionamento : "Atendimento 24 horas"}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contato;