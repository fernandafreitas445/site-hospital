import "./ServicesSection.css";
import { useServices } from "../../hooks/useApi";
import { getIcon } from "../../utils/iconMap";

function ServicesSection() {
    const { data: services, loading } = useServices();

    // Exibe apenas os primeiros 6 serviços na seção da Home
    const displayServices = services.slice(0, 6);

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

                {loading ? (
                    <p style={{ textAlign: 'center', color: '#666' }}>Carregando serviços...</p>
                ) : (
                    <div className="services-grid">

                        {displayServices.map((service) => (

                            <div className="service-card" key={service.id}>

                                <div className="service-icon">
                                    {getIcon(service.icon)}
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.text}</p>

                            </div>

                        ))}

                    </div>
                )}

            </div>

        </section>

    );
}

export default ServicesSection;