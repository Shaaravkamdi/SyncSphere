import { ArrowRight, CirclePlay, Sparkles } from "@/assets/icons";
import { Link } from "react-router-dom";

const HeroContent = () => {
    return (
        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="flex items-center flex-col">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700 font-bold">AI-Powered Enterprise Collaboration Platform</span>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl ">
                        One Intelligent {" "} <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-violet-700">Workspace.</span>
                        
                        Everything Your Team Needs.
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <p className="max-w-3xl text-lg font-medium leading-8 text-gray-600">
                        Manage Projects, collaborate with teams, manage documents,
                        run meetings, and let AI automate repetitive work -
                        all from one unified platform.
                    </p>
                </div>
                <div className="mt-8 flex justify-center gap-5">
                    <Link to="/register" className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 h-12 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700 shadow-sm hover:shadow-md">
                        <span>Get Started Free</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <button type="button" className="group inline-flex h-12 items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-black shadow-sm transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"                    >
                        <CirclePlay className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;