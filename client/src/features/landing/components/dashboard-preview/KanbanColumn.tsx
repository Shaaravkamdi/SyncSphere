import TaskCard from "./TaskCard";

type Task = {
    id: string;
    title: string;
    tag: string;
    assignee: string;
};

type KanbanColumnProps = {
    title: string;
    tasks: Task[];
};

const KanbanColumn = ({ title, tasks }: KanbanColumnProps) => {
    return (
        <div className="rounded-xl bg-gray-50 p-4">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">
                    {title}
                </h3>
                <span className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600">
                    {tasks.length}
                </span>
            </div>
            <div className="space-y-3">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        tag={task.tag}
                        assignee={task.assignee}
                    />
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;