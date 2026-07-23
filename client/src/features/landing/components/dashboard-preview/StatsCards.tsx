import { DASHBOARD_STATS } from "@/shared/config/dashboard-stats.config";
import StatCard from "./StatCard";

const StatsCards = () => {
    return (
        <section className="grid grid-cols-1 gap-5 px-5 pb-5 md:grid-cols-2 xl:grid-cols-4">
            {DASHBOARD_STATS.map((item) => (
                <StatCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    change={item.change}
                    iconBg={item.iconBg}
                    iconColor={item.iconColor}
                />
            ))}
        </section>
    );
};

export default StatsCards;