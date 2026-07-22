import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import Topbar from "./Topbar";
import WelcomeSection from "./WelcomeSection";

const DashboardPreview = () => {
    return (
        <section className="mt-16">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-1 flex-col">
                        <Topbar title="Dashboard" subtitle="Welcome back, Shaarav" />
                        <main className="flex-1 bg-gray-50">
                            <WelcomeSection greeting="Good Morning" message="Here's what's happening across your workspace today." />
                            <StatsCards />
                        </main>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;