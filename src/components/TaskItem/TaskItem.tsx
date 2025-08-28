import type { Task } from "../../types"
import './TaskItem.css'
import { FaRegTrashCan } from "react-icons/fa6";


interface TaskItemProps {
    task: Task;
    onToggleComplete: (id: string) => void
    onRemoveTask: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onRemoveTask }: TaskItemProps) => {
    return (
        <>
            <li key={task.id} className={`taskItem ${task.isCompleted ? 'completed' : ''}`}>
                <span className="taskItem-checkbox">
                    <input id={task.id} className="taskItem-input" type="checkbox" checked={task.isCompleted} onChange={() => onToggleComplete(task.id)} />
                    {task.text}
                </span>
                <button className="taskItem-button" onClick={() => onRemoveTask(task.id)}><FaRegTrashCan size={16} /></button>
            </li>
        </>
    )
}

export default TaskItem;