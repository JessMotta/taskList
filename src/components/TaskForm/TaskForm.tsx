import { useState } from "react";
import './TaskForm.css'


interface FormProps {
    onAddTask: (text: string) => void;
}

const TaskForm = ({ onAddTask }: FormProps) => {
    const [newTaskText, setNewTaskText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;

        onAddTask(newTaskText)
        setNewTaskText('')
    }

    return (
        <>
            <form className="taskForm" onSubmit={handleSubmit}>
                <input id="form-input" className="taskForm-input" type="text" placeholder="Add new task" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
                <button className="taskForm-button" type="submit">Add</button>
            </form>
        </>
    )
}

export default TaskForm;