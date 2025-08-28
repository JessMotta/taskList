import type { Task } from "../../types"
import { FaRegTrashCan } from "react-icons/fa6";

interface TaskItemProps {
    task: Task;
    onToggleComplete: (id: string) => void
    onRemoveTask: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onRemoveTask }: TaskItemProps) => {
    return (
        <>
            <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
                <span>
                    <input type="checkbox" checked={task.isCompleted} onChange={() => onToggleComplete(task.id)} />
                    {task.text}
                </span>
                <button onClick={() => onRemoveTask(task.id)}><FaRegTrashCan /></button>
            </li>
        </>
    )
}

export default TaskItem;