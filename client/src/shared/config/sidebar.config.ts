import { BarChart3, Bot, CalendarDays, FileText, FolderKanban, Home, ListTodo, MessageSquare, Settings } from "lucide-react";

export const SIDEBAR_ITEMS = [
    {
        title: "Dashboard",
        icon: Home,
        href: "/dashboard"
    },
    {
        title: "Projects",
        icon: FolderKanban,
        href: "/projects"
    },
    {
        title: "Tasks",
        icon: ListTodo,
        href: "/tasks"
    },
    {
        title: "Calender",
        icon: CalendarDays,
        href: "/calender"
    },
    {
        title: "Documents",
        icon: FileText,
        href: "/documents"
    },
    {
        title: "Team Chat",
        icon: MessageSquare,
        href: "/chat"
    },
    {
        title: "AI Assistant",
        icon: Bot,
        href: "/ai"
    },
    {
        title: "Reports",
        icon: BarChart3,
        href: "/reports"
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/settings"
    }
]