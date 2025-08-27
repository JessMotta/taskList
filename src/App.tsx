import { useEffect, useState } from "react";
import initialTasks from "./db_tasks.json"
import type { Task } from "./types";
import './App.css'

function App() {


  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState("");


  useEffect(() => {
    setTasks(initialTasks)
  }, [])

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      text: newTaskText,
      isCompleted: false
    }

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  const handleToggleComplete = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, isCompleted: !task.isCompleted} : task
    )
    setTasks(updatedTasks);
  }

  const handleRemoveTask = (id: number) => {
       const uptadedTasks = tasks.filter(task => task.id !== id);
       setTasks(uptadedTasks)  
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Adicionar nova tarefa" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(task.id)}>
              <input type="checkbox" checked={task.isCompleted} onChange={() => handleToggleComplete(task.id)}/>
              {task.text}
            </span>
              <button onClick={() => handleRemoveTask(task.id)}>Del</button>
          </li>
        ))}

      </ul>


    </>
  )
}

export default App
