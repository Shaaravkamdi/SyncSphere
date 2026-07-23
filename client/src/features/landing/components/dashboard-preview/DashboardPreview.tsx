import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardPreview = () => {
    return (
        <section className="mt-16">
            <div className="mx-auto max-w-3/4 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-1 flex-col">
                        <Topbar title="Dashboard" subtitle="Welcome back, Shaarav" />
                        <DashboardContent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;