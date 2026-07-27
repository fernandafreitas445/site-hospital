import { useState, useEffect } from "react";
import "./Sobre.css";
import { getHospitalInfo, getAchievements } from "../../services/api";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

function Sobre() {
    const [hospitalInfo, setHospitalInfo] = useState(null);
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([getHospitalInfo(), getAchievements()])
            .then(([infoData, achievementsData]) => {
                setHospitalInfo(infoData);
                // Ordena por data_realizacao decrescente
                const sortedAchievements = achievementsData.sort((a, b) => 
                    new Date(b.data_realizacao) - new Date(a.data_realizacao)
                );
                setAchievements(sortedAchievements);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao carregar dados institucionais:", err);
                setLoading(false);
            });
    }, []);

    // Formata a data (ex: 2025-10-15 -> Outubro de 2025)
    const formatMonthYear = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr + "T00:00:00");
        return date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
    };

    return (
        <div className="sobre-page">
            <div className="container">
                
                <div className="sobre-header">
                    <span>Quem Somos</span>
                    <h1>Nossa História</h1>
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* História */}
                        <div className="historia-section">
                            <div className="historia-content">
                                <h2>Compromisso com a sua saúde</h2>
                                <p>
                                    {hospitalInfo ? hospitalInfo.historia : (
                                        "O Hospital Nossa Senhora do Brasil atua oferecendo atendimento " +
                                        "humanizado, estrutura moderna e uma equipe preparada para atender " +
                                        "pacientes com qualidade, ética e responsabilidade."
                                    )}
                                </p>
                            </div>
                            <div className="historia-decor-box">
                                <h3>Desde 1985</h3>
                                <p>
                                    Cuidando da comunidade de Bambuí e região com foco na acolhida 
                                    calorosa, diagnósticos precisos e tratamentos inovadores.
                                </p>
                            </div>
                        </div>

                        {/* Missão, Visão e Valores */}
                        <div className="mvv-grid">
                            <div className="mvv-card">
                                <FaBullseye className="mvv-icon" />
                                <h3>Missão</h3>
                                <p>{hospitalInfo ? hospitalInfo.missao : "Promover a saúde e bem-estar dos pacientes."}</p>
                            </div>
                            <div className="mvv-card">
                                <FaEye className="mvv-icon" />
                                <h3>Visão</h3>
                                <p>{hospitalInfo ? hospitalInfo.visao : "Ser referência regional em excelência hospitalar."}</p>
                            </div>
                            <div className="mvv-card">
                                <FaHeart className="mvv-icon" />
                                <h3>Valores</h3>
                                <p>{hospitalInfo ? hospitalInfo.valores : "Humanização, Ética, Excelência, Segurança."}</p>
                            </div>
                        </div>

                        {/* Linha do Tempo de Realizações */}
                        {achievements.length > 0 && (
                            <div style={{ marginTop: "100px" }}>
                                <h2 className="timeline-section-title">Nossas Conquistas e Realizações</h2>
                                <div className="timeline-container">
                                    {achievements.map((ach, index) => {
                                        const alignmentClass = index % 2 === 0 ? "timeline-item left-item" : "timeline-item right-item";
                                        return (
                                            <div className={alignmentClass} key={ach.id || index}>
                                                <div className="timeline-content">
                                                    <span className="timeline-date">{formatMonthYear(ach.data_realizacao)}</span>
                                                    <h3>{ach.titulo}</h3>
                                                    <p>{ach.descricao}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    );
}

export default Sobre;