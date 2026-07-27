import "./StatsSection.css";

import {
    FaHospital,
    FaUserMd,
    FaClock,
    FaUsers,
} from "react-icons/fa";

function StatsSection() {
    const stats = [
        {
            icon: <FaHospital />,
            number: "40+",
            text: "Anos de história",
        },
        {
            icon: <FaClock />,
            number: "24h",
            text: "Atendimento",
        },
        {
            icon: <FaUserMd />,
            number: "120+",
            text: "Profissionais",
        },
        {
            icon: <FaUsers />,
            number: "10 mil+",
            text: "Pacientes atendidos",
        },
    ];

    return (
        <section className="stats">

            <div className="container">

                <div className="stats-grid">

                    {stats.map((item, index) => (

                        <div className="stat-card" key={index}>

                            <div className="stat-icon">
                                {item.icon}
                            </div>

                            <h2>{item.number}</h2>

                            <p>{item.text}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default StatsSection;