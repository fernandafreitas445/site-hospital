import {
    FaHeartbeat,
    FaUserMd,
    FaAmbulance,
    FaBaby,
    FaFlask,
    FaProcedures,
    FaXRay,
    FaStethoscope,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebookF,
    FaHospitalAlt,
    FaSyringe,
    FaBrain,
    FaBone,
    FaTooth,
    FaEye,
    FaHeart
} from 'react-icons/fa';

const iconMap = {
    FaHeartbeat: <FaHeartbeat />,
    FaUserMd: <FaUserMd />,
    FaAmbulance: <FaAmbulance />,
    FaBaby: <FaBaby />,
    FaFlask: <FaFlask />,
    FaProcedures: <FaProcedures />,
    FaXRay: <FaXRay />,
    FaStethoscope: <FaStethoscope />,
    FaPhoneAlt: <FaPhoneAlt />,
    FaEnvelope: <FaEnvelope />,
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaClock: <FaClock />,
    FaInstagram: <FaInstagram />,
    FaFacebookF: <FaFacebookF />,
    FaHospitalAlt: <FaHospitalAlt />,
    FaSyringe: <FaSyringe />,
    FaBrain: <FaBrain />,
    FaBone: <FaBone />,
    FaTooth: <FaTooth />,
    FaEye: <FaEye />,
    FaHeart: <FaHeart />,
};

export function getIcon(iconName, fallback = <FaStethoscope />) {
    return iconMap[iconName] ?? fallback;
}

export default iconMap;
