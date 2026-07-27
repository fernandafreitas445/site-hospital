import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import DonationSection from "../../components/DonationSection/DonationSection";

function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <DoctorsSection />
            <StatsSection />
            <DonationSection />
        </>
    );
}

export default Home;