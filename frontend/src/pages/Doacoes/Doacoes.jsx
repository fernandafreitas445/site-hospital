import { useState, useEffect } from "react";
import "./Doacoes.css";
import { getDonationCampaigns, getDonationMethods } from "../../services/api";
import { FaHeart, FaCopy, FaCheck } from "react-icons/fa";

function Doacoes() {
    const [campaigns, setCampaigns] = useState([]);
    const [methods, setMethods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        Promise.all([getDonationCampaigns(), getDonationMethods()])
            .then(([campaignsData, methodsData]) => {
                setCampaigns(campaignsData.filter(camp => camp.ativa));
                setMethods(methodsData.filter(method => method.ativo));
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao carregar dados de doação:", err);
                setLoading(false);
            });
    }, []);

    const handleCopyPix = (key, id) => {
        navigator.clipboard.writeText(key)
            .then(() => {
                setCopiedId(id);
                setTimeout(() => setCopiedId(null), 2000);
            })
            .catch(err => {
                console.error("Erro ao copiar chave pix:", err);
            });
    };

    return (
        <div className="doacoes-page">
            <div className="container">
                
                <div className="doacoes-header">
                    <span>Faça a Diferença</span>
                    <h1>Campanhas de Doação</h1>
                    <p>
                        O Hospital Nossa Senhora do Brasil é uma instituição que conta com o apoio 
                        da comunidade. Sua contribuição nos ajuda a salvar vidas, melhorar nossa 
                        estrutura e adquirir novos equipamentos de saúde.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                    </div>
                ) : (
                    <div className="doacoes-layout-grid">
                        
                        {/* Lado Esquerdo: Campanhas Ativas */}
                        <div>
                            <h2 className="campaigns-section-title">Campanhas Ativas</h2>
                            {campaigns.length > 0 ? (
                                campaigns.map((campaign) => (
                                    <div className="campaign-card-item" key={campaign.id}>
                                        <div className="campaign-body">
                                            <h3>{campaign.titulo}</h3>
                                            <p>{campaign.descricao}</p>
                                            
                                            {/* Bloco de doação Pix */}
                                            <div className="pix-box-wrapper">
                                                <div className="pix-title">Doe via PIX</div>
                                                <div className="pix-key-row">
                                                    <span className="pix-key-text">{campaign.chave_pix}</span>
                                                    <button 
                                                        className="copy-pix-btn"
                                                        onClick={() => handleCopyPix(campaign.chave_pix, campaign.id)}
                                                    >
                                                        {copiedId === campaign.id ? (
                                                            <>
                                                                <FaCheck style={{ marginRight: "5px" }} /> Copiado!
                                                            </>
                                                        ) : (
                                                            <>
                                                                <FaCopy style={{ marginRight: "5px" }} /> Copiar Chave
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="pix-beneficiary">
                                                    <strong>Beneficiário:</strong> {campaign.beneficiario}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-campaigns">
                                    <FaHeart size={40} color="#dc3545" style={{ marginBottom: "15px" }} />
                                    <h3>Nenhuma campanha ativa no momento</h3>
                                    <p>Mas você ainda pode contribuir utilizando as formas de doação fixa ao lado!</p>
                                </div>
                            )}
                        </div>

                        {/* Lado Direito: Formas de Doação Fixas */}
                        <div>
                            <h2 className="methods-section-title">Outras Formas de Contribuir</h2>
                            {methods.length > 0 ? (
                                methods.map((method) => (
                                    <div className="method-card-item" key={method.id}>
                                        <h4>{method.tipo}</h4>
                                        <p className="method-desc">{method.descricao}</p>
                                        <div className="method-instructions">
                                            <strong>Como fazer:</strong>
                                            <p style={{ margin: "5px 0 0 0" }}>{method.instrucoes}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-campaigns">
                                    <p>Nenhuma forma de doação fixa cadastrada.</p>
                                </div>
                            )}
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Doacoes;