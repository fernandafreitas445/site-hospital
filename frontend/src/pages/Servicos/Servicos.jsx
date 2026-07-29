import "./Servicos.css";
import { useServices } from "../../hooks/useApi";
import { getIcon } from "../../utils/iconMap";

function Servicos() {
    const { data: services, loading } = useServices();

    return (

        <main>

            <section className="page-header">

                <div className="container">

                    <h1>Nossos Serviços</h1>

                    <p>
                        Atendimento completo, estrutura moderna e profissionais qualificados para cuidar da sua saúde.
                    </p>

                </div>

            </section>

            <section className="services-page">

                <div className="container">

                    {loading ? (
                        <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                            Carregando serviços...
                        </p>
                    ) : (
                        <div className="services-grid">

                            {services.map((service) => (

                                <div className="service-page-card" key={service.id}>

                                    <div className="service-page-icon">
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

        </main>

    );

}

export default Servicos;