import { CheckCircle2, FolderKanban, TrendingUp, Users } from "lucide-react";

export const DASHBOARD_STATS = [
    {
        id: "projects",
        title: "Active Projects",
        value: "24",
        change: "+12% this month",
        icon: FolderKanban,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        id: "tasks",
        title: "Completed Tasks",
        value: "186",
        change: "+18% this week",
        icon: CheckCircle2,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        id: "team",
        title: "Team Members",
        value: "12",
        change: "+2 this month",
        icon: Users,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        id: "productivity",
        title: "Productivity",
        value: "94%",
        change: "+8% this week",
        icon: TrendingUp,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },
];