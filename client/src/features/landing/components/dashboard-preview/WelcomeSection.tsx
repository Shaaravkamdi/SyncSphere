type WelcomeSectionProps = {
    greeting: string,
    message: string
}

const WelcomeSection = ({ greeting, message }: WelcomeSectionProps) => {
    return (
        <section className="px-8 py-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">
                    {greeting}
                </h2>

                <p className="mt-2 text-base text-gray-500">
                    {message}
                </p>
            </div>
        </section>
    );
};

export default WelcomeSection;