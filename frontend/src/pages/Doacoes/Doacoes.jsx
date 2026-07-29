import "./Doacoes.css";

import { FaHandHoldingHeart, FaPix, FaHospital, FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { useHospitalInfo } from "../../hooks/useApi";

function Doacoes() {
    const { data: info, loading } = useHospitalInfo();
    const [copied, setCopied] = useState(false);

    const pixKey = loading ? "..." : (info?.pix_key ?? "hospitalnsbrasil@yahoo.com.br");

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    return (

        <main>

            <section className="page-header">

                <div className="container">

                    <h1>Faça uma Doação</h1>

                    <p>
                        Sua solidariedade ajuda a manter um atendimento de qualidade
                        e faz a diferença na vida de muitas pessoas.
                    </p>

                </div>

            </section>

            <section className="donation-page">

                <div className="container donation-grid">

                    <div className="donation-text">

                        <span>APOIE NOSSO HOSPITAL</span>

                        <h2>
                            Juntos podemos cuidar de mais vidas.
                        </h2>

                        <p>
                            As doações contribuem para melhorias na estrutura,
                            aquisição de equipamentos, medicamentos e projetos
                            voltados ao atendimento humanizado.
                        </p>

                        <div className="donation-benefits">

                            <div>
                                <FaHospital />
                                <p>Melhoria da infraestrutura</p>
                            </div>

                            <div>
                                <FaHeart />
                                <p>Atendimento humanizado</p>
                            </div>

                            <div>
                                <FaHandHoldingHeart />
                                <p>Apoio à comunidade</p>
                            </div>

                        </div>

                    </div>

                    <div className="donation-card">

                        <FaPix className="pix-icon"/>

                        <h3>Doe via PIX</h3>

                        <p>

                            Chave PIX

                        </p>

                        <div className="pix-key">

                            {loading ? "Carregando..." : pixKey}

                        </div>

                        <button onClick={handleCopy} disabled={loading}>

                            {copied ? "✓ Chave copiada!" : "Copiar chave PIX"}

                        </button>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default Doacoes;