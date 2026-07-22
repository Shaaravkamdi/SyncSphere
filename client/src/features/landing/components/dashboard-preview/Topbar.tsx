import { Bell, Plus, Search } from "@/assets/icons";

type TopbarProps = {
    title: string,
    subtitle: string
}

const Topbar = ({ title, subtitle }: TopbarProps) => {
    return (
        <header className="flex h-24 items-center justify-between border-b border-gray-200 bg-white px-8">
            <div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search projects..." className="w-72 rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:bg-gray-100" aria-label="Notifications">
                    <Bell className="h-5 w-5" />
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white"
                    aria-label="User Profile">
                    SK
                </button>

                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700">
                    <Plus className="h-4 w-4" />
                    <span>New Project</span>
                </button>
            </div>
        </header>
    );
};

export default Topbar;