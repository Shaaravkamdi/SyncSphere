type TaskCardProps = {
    title: string;
    tag: string;
    assignee: string;
};

const TaskCard = ({
    title,
    tag,
    assignee,
}: TaskCardProps) => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <h4 className="line-clamp-2 text-sm font-semibold text-gray-900">
                {title}
            </h4>

            <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {tag}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                    {assignee}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;