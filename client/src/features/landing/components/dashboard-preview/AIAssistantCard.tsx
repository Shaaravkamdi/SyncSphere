import { Bot, Sparkles } from "lucide-react";

const AIAssistantCard = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
                        <Bot className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            AI Assistant
                        </h2>

                        <p className="text-sm text-gray-500">
                            Powered by AI
                        </p>
                    </div>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
                    Beta
                </span>
            </div>

            <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-violet-600" />
                    <p className="text-sm leading-6 text-gray-700">
                        Hi! I'm your AI assistant. I can help summarize your
                        team's progress, generate reports, and answer questions
                        about your workspace.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AIAssistantCard;