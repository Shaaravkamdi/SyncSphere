import DashboardPreview from "../dashboard-preview/DashboardPreview";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden pt-32">
            <HeroBackground />
            <div className="relative z-10">
                <HeroContent />
                <HeroStats />
                <DashboardPreview />
            </div>
        </section>
    );
};

export default Hero;