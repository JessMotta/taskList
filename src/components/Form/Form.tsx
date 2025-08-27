import { useState } from "react";


interface FormProps {
    onAddTask: (text: string) => void;
}

const Form = ({ onAddTask }: FormProps) => {
    const [newTaskText, setNewTaskText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;

        onAddTask(newTaskText)
        setNewTaskText('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicionar nova tarefa" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
                <button type="submit">Adicionar</button>
            </form>
        </>
    )
}

export default Form;