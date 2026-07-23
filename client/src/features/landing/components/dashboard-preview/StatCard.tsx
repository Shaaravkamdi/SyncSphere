import type { LucideIcon } from "lucide-react";

type StatCardProps = { icon: LucideIcon; title: string; value: string; change: string; iconBg: string; iconColor: string; };

const StatCard = ({ icon: Icon, title, value, change, iconBg, iconColor, }: StatCardProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-gray-900">
                        {value}
                    </h3>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
            </div>
            <p className="mt-2 text-sm font-semibold text-green-600">
                {change}
            </p>
        </div>
    );
};

export default StatCard;