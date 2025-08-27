import type { Task } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

const TaskList = ({ tasks, onToggleComplete, onRemoveTask }: TaskListProps) => {
    return (
        <>
            <ul className="task-list">
                {tasks.map(task => (
                    <TaskItem key={task.id}
                        task={task}
                        onToggleComplete={onToggleComplete}
                        onRemoveTask={onRemoveTask}
                    />
                ))}
            </ul>
        </>
    )
}

export default TaskList;