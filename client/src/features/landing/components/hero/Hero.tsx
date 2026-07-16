import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden pt-32">
            <HeroBackground />
            <div className="relative z-10">
                <HeroContent />
                <DashboardPreview />
            </div>
        </section>
    );
};

export default Hero;