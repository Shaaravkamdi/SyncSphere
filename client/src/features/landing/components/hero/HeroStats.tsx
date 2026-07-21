import { ChartNoAxesCombined, ShieldCheck, Users, Zap } from 'lucide-react'

const HERO_STATS = [
    {
        icon: Users,
        value: "15,000+",
        title: "Teams Trust Us",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        icon: Zap,
        value: "AI Powered",
        title: "Smart Automation",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
    },
    {
        icon: ShieldCheck,
        value: "Enterprise Grade",
        title: "Security & Compliance",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        icon: ChartNoAxesCombined,
        value: "99.9%",
        title: "Uptime Guarantee",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },
];

const HeroStats = () => {
    return (
        <section className="mt-14">
            <div className="mx-auto flex max-w-6xl items-center justify-center">
                {HERO_STATS.map((item, index) => (
                    <div key={item.title} className="flex items-center">
                        <div className="flex items-center gap-4 px-8">
                            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg}`}>
                                <item.icon className={`h-6 w-6 ${item.iconColor}`} strokeWidth={2}/>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {item.value}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                        {index !== HERO_STATS.length - 1 && (
                            <div className="h-14 w-px bg-gray-200" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HeroStats