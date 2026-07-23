import { ArrowRight, CheckCircle2 } from "lucide-react";

const activities = [
    {
        id: 1,
        icon: CheckCircle2,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        user: "Sarah",
        action: "completed Landing Page Design",
        time: "2 min ago",
    }
];

const TeamActivity = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-4">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold text-gray-900">
                        Team Activity
                    </h2>
                    <button className="group flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700">
                        <span>See all</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                    Latest updates from your workspace.
                </p>
            </div>
            <div className="space-y-5">
                {activities.map((activity) => {
                    const Icon = activity.icon;
                    return (
                        <div key={activity.id} className="flex items-start gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${activity.iconBg}`}>
                                <Icon className={`h-5 w-5 ${activity.iconColor}`} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold text-gray-900">
                                        {activity.user}
                                    </span>{" "}
                                    {activity.action}
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TeamActivity;