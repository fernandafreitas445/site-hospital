import { useState, useEffect } from "react";
import "./Medicos.css";
import { getDoctors } from "../../services/api";
import { FaSearch, FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";

import doctor1 from "../../assets/images/doctors/doctor1.png";
import doctor2 from "../../assets/images/doctors/doctor2.png";
import doctor3 from "../../assets/images/doctors/doctor3.png";

function Medicos() {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    const localPhotos = [doctor2, doctor1, doctor3];

    useEffect(() => {
        getDoctors()
            .then(data => {
                // Filtra apenas médicos ativos
                setDoctors(data.filter(doc => doc.ativo));
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao carregar médicos:", err);
                setLoading(false);
            });
    }, []);

    // Filtra médicos pelo nome ou especialidade
    const filteredDoctors = doctors.filter(doctor => {
        const nameMatch = doctor.nome.toLowerCase().includes(searchTerm.toLowerCase());
        const specialtyMatch = doctor.especialidade.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || specialtyMatch;
    });

    return (
        <div className="medicos-page">
            <div className="container">
                
                <div className="medicos-header">
                    <span>Nossa Equipe</span>
                    <h1>Corpo Clínico</h1>
                    <p>
                        Contamos com uma equipe de profissionais dedicados, especializados 
                        e focados em oferecer o melhor atendimento para você e sua família.
                    </p>
                </div>

                {/* Filtro de Busca */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Busque por médico ou especialidade..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="search-icon" />
                </div>

                {/* Estado de Carregamento */}
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                    </div>
                ) : (
                    <div className="medicos-list-grid">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor, index) => {
                                const imageSrc = doctor.foto ? doctor.foto : localPhotos[index % localPhotos.length];
                                return (
                                    <div className="medico-card-item" key={doctor.id || index}>
                                        <div className="medico-img-wrapper">
                                            <img
                                                src={imageSrc}
                                                alt={doctor.nome}
                                                onError={(e) => {
                                                    e.target.src = localPhotos[index % localPhotos.length];
                                                }}
                                            />
                                        </div>
                                        <div className="medico-info-box">
                                            <span className="medico-specialty-badge">{doctor.especialidade}</span>
                                            <h3>{doctor.nome}</h3>
                                            <span className="medico-crm">CRM: {doctor.crm}</span>
                                            <p className="medico-bio">{doctor.biografia}</p>
                                            <Link 
                                                to={`/contato?assunto=Agendamento com ${doctor.nome}`}
                                                className="medico-contact-btn"
                                            >
                                                Agendar Consulta
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="no-medicos-found">
                                <FaUserMd size={50} color="#ccc" style={{ marginBottom: "15px" }} />
                                <h3>Nenhum profissional encontrado</h3>
                                <p>Tente buscar por outro termo ou especialidade.</p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Medicos;