import { Sparkles } from "@/assets/icons";

const HeroContent = () => {
    return (
        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700 font-bold">AI-Powered Enterprise Collaboration Platform</span>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;