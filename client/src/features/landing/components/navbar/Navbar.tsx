import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { logoLight } from "@/assets/logos";
import { NAV_ITEMS } from "@/shared/config/navigation.config";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link to="/" className="flex items-center">
                    <img src={logoLight} alt="SyncSphere" className="h-15 w-auto" />
                </Link>

                <div className="hidden items-center gap-15 lg:flex">
                    <ul className="flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <Link to={item.href} className="text-sm font-medium text-gray-900 transition-colors duration-200 hover:text-gray-500 ">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-5">
                        <Link to="/login" className="text-sm font-medium text-gray-700 transition-colors hover:text-black">
                            Login
                        </Link>

                        <Link to="/register" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                            Get Started
                        </Link>

                    </div>

                </div>
                <button className="rounded-lg p-2 text-white transition hover:bg-neutral-800 lg:hidden" aria-label="Open navigation menu">
                    <Menu size={22} />
                </button>

            </div>
        </nav>
    );
};

export default Navbar;