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
            <li key={task.id} aria-label={task.id} className={`taskItem ${task.isCompleted ? 'completed' : ''}`}>
                <span className="taskItem-checkbox" onClick={() => onToggleComplete(task.id)}>
                    <input id={task.id} className="taskItem-input" type="checkbox" checked={task.isCompleted} onChange={() => onToggleComplete(task.id)} />
                    <label htmlFor={task.id}>
                        <svg className="taskItem-checkmark--icon" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                    </label>
                    {task.text}
                </span>
                <button id={task.id} className="taskItem-button--delete" onClick={() => onRemoveTask(task.id)} aria-labelledby={task.id} ><FaRegTrashCan size={16} /></button>
            </li>
        </>
    )
}

export default TaskItem;