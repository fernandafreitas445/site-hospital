import "./DoctorsSection.css";

import doctor1 from "../../assets/images/doctors/doctor1.png";
import doctor2 from "../../assets/images/doctors/doctor2.png";
import doctor3 from "../../assets/images/doctors/doctor3.png";

function DoctorsSection() {

    const doctors = [

        {
            image: doctor2,
            name: "Dr. João Silva",
            specialty: "Clínica Médica"
        },

        {
            image: doctor1,
            name: "Dra. Ana Oliveira",
            specialty: "Cardiologia"
        },

        {
            image: doctor3,
            name: "Dr. Carlos Souza",
            specialty: "Pediatria"
        }

    ];

    return (

        <section className="doctors">

            <div className="container">

                <div className="section-header">

                    <span>CORPO CLÍNICO</span>

                    <h2>
                        Profissionais preparados para cuidar de você.
                    </h2>

                    <p>
                        Nossa equipe é formada por médicos altamente qualificados,
                        comprometidos com um atendimento humanizado e de excelência.
                    </p>

                </div>

                <div className="doctors-grid">

                    {doctors.map((doctor, index) => (

                        <div className="doctor-card" key={index}>

                            <img
                                src={doctor.image}
                                alt={doctor.name}
                            />

                            <div className="doctor-info">

                                <h3>{doctor.name}</h3>

                                <span>{doctor.specialty}</span>

                                <button>
                                    Saiba mais
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default DoctorsSection;