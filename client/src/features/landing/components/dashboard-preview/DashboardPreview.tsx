import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardPreview = () => {
    return (
        <section className="mt-16">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-1 flex-col">
                        <Topbar />
                        <main className="flex-1 bg-gray-50">
                            {/* Dashboard Content */}
                        </main>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;