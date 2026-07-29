import "./DonationSection.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DonationSection() {

    const navigate = useNavigate();

    return (
        <section className="donation">

            <div className="container">

                <div className="donation-card">

                    <div className="donation-icon">
                        <FaHeart />
                    </div>

                    <span>FAÇA A DIFERENÇA</span>

                    <h2>
                        Sua contribuição ajuda a salvar vidas.
                    </h2>

                    <p>
                        Com o apoio da comunidade podemos investir em equipamentos,
                        melhorias na estrutura e oferecer um atendimento cada vez melhor
                        aos nossos pacientes.
                    </p>

                    <button onClick={() => navigate("/doacoes")}>
                        Quero Doar
                    </button>

                </div>

            </div>

        </section>
    );
}

export default DonationSection;