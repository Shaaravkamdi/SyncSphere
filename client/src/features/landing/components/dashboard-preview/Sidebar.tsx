import { Link } from "react-router-dom";

import { logoDark } from "@/assets/logos";
import { SIDEBAR_ITEMS } from "@/shared/config/sidebar.config";

const Sidebar = () => {
    return (
        <aside className="flex w-72 flex-col bg-slate-900">
            <div className="border-b border-slate-800 px-6 py-5">
                <Link to="/" className="flex items-center">
                    <img src={logoDark} alt="SyncSphere" className="h-14 w-auto" />
                </Link>
            </div>

            <nav className="mt-6 flex flex-1 flex-col px-4">
                <div className="space-y-1">
                    {SIDEBAR_ITEMS.map((item) => {
                        const isActive = item.title === "Dashboard";

                        return (
                            <Link key={item.title} to={item.href} className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ease-in-out ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}>
                                <item.icon className="h-5 w-5 shrink-0" />
                                <span>{item.title}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <div className="border-t border-slate-800 p-4">
                {/* User Profile */}
            </div>
        </aside>
    );
};

export default Sidebar;