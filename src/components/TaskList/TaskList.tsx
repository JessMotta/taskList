import type { Task } from "../../types";
import './TaskList.css'
import TaskItem from "../TaskItem/TaskItem";

interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

const TaskList = ({ tasks, onToggleComplete, onRemoveTask }: TaskListProps) => {
    return (
        <>
            <ul className="taskList">
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