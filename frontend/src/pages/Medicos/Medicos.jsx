import "./Medicos.css";
import { useDoctors } from "../../hooks/useApi";

function Medicos() {
    const { data: doctors, loading, error } = useDoctors();

    return (
        <main>

            <section className="page-header">

                <div className="container">

                    <h1>Nossa Equipe Médica</h1>

                    <p>
                        Profissionais especializados e comprometidos com a sua saúde.
                    </p>

                </div>

            </section>

            <section className="medicos-page">

                <div className="container">

                    {loading && (
                        <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                            Carregando equipe médica...
                        </p>
                    )}

                    {error && (
                        <p style={{ textAlign: 'center', padding: '3rem', color: 'red' }}>
                            Erro ao carregar dados dos médicos.
                        </p>
                    )}

                    {!loading && !error && (
                        <div className="medicos-grid">
                            {doctors.map((doctor) => (
                                <div className="medico-card" key={doctor.id}>
                                    {doctor.image && (
                                        <div className="medico-foto">
                                            <img
                                                src={doctor.image}
                                                alt={doctor.name}
                                            />
                                        </div>
                                    )}
                                    <div className="medico-info">
                                        <h3>{doctor.name}</h3>
                                        <span className="medico-especialidade">{doctor.specialty}</span>
                                        {doctor.crm && (
                                            <p className="medico-crm">CRM: {doctor.crm}</p>
                                        )}
                                        {doctor.phone && (
                                            <p className="medico-phone">📞 {doctor.phone}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

            </section>

        </main>
    );
}

export default Medicos;