import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import DonationSection from "../../components/DonationSection/DonationSection";

function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <DonationSection />
        </>
    );
}

export default Home;