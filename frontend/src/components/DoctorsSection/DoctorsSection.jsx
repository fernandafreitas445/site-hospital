import { useEffect, useState } from "react";
import "./DoctorsSection.css";
import { getDoctors } from "../../services/api";

import doctor1 from "../../assets/images/doctors/doctor1.png";
import doctor2 from "../../assets/images/doctors/doctor2.png";
import doctor3 from "../../assets/images/doctors/doctor3.png";

function DoctorsSection() {
    const [doctors, setDoctors] = useState([]);
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
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="doctors">
            <div className="container">
                <div className="section-header">
                    <span>CORPO CLÍNICO</span>
                    <h2>Profissionais preparados para cuidar de você.</h2>
                    <p>
                        Nossa equipe é formada por médicos altamente qualificados,
                        comprometidos com um atendimento humanizado e de excelência.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                    </div>
                ) : (
                    <div className="doctors-grid">
                        {doctors.map((doctor, index) => {
                            const imageSrc = doctor.foto ? doctor.foto : localPhotos[index % localPhotos.length];
                            return (
                                <div className="doctor-card" key={doctor.id || index}>
                                    <img
                                        src={imageSrc}
                                        alt={doctor.nome}
                                        onError={(e) => {
                                            e.target.src = localPhotos[index % localPhotos.length];
                                        }}
                                    />
                                    <div className="doctor-info">
                                        <h3>{doctor.nome}</h3>
                                        <span>{doctor.especialidade}</span>
                                        <button>
                                            Saiba mais
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default DoctorsSection;