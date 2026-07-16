const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-white" />
            <div className="absolute -top-56 -left-40 h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[180px] " />
            <div className="absolute -top-40 -right-52 h-[650px] w-[650px] rounded-full bg-violet-500/15 blur-[180px] " />

        </div>
    );
};

export default HeroBackground;