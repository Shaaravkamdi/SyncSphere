import { KANBAN_COLUMNS } from "@/shared/config/project-overview.config";
import KanbanColumn from "./KanbanColumn";

const ProjectOverview = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
                Project Overview
            </h2>
            <p className="mt-1 text-sm text-gray-500">
                Manage and organize your team's ongoing work.
            </p>
            <div className="mt-6 grid grid-cols-4 gap-4">
                {KANBAN_COLUMNS.map((column) => (
                    <KanbanColumn
                        key={column.id}
                        title={column.title}
                        tasks={column.tasks.filter((t): t is NonNullable<typeof column.tasks[number]> => t !== undefined)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectOverview;