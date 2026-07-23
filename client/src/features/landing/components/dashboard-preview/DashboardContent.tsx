import StatsCards from "./StatsCards";
import ProjectOverview from "./ProjectOverview";
import WelcomeSection from "./WelcomeSection";
import AIAssistantCard from "./AIAssistantCard";
import TeamActivity from "./TeamActivity";

const DashboardContent = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-gray-50">
            <WelcomeSection greeting="Good Morning" message="Here's what's happening across your workspace today." />

            <StatsCards />

            <div className="grid gap-6 px-5 pb-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <ProjectOverview />
                </div>

                <div className="space-y-6">
                    <AIAssistantCard />

                    <TeamActivity />
                </div>
            </div>
        </main>
    );
};

export default DashboardContent;