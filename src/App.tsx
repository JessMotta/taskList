import { useEffect, useState } from "react";
import type { Task } from "./types";
import './App.css'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  // get data from API
  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then(response => {
      setTasks(response.data)
    })
  }, [])

  // add new task
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();

    // check if input isn't empty
    if (newTaskText !== '') {
      const newTask: Task = {
        id: uuidv4(),
        text: newTaskText,
        isCompleted: false
      }

      try {
        const response = await axios.post("http://localhost:3001/tasks", newTask);
        setTasks([...tasks, response.data]);
        setNewTaskText('');
      } catch (error) {
        console.log('Error adding item', error)
      }

    }
    else {
      window.alert("Precisa digitar a tarefa")
    }
  }

  // toggle task
  const handleToggleComplete = async (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    })

    const taskToUpdate = updatedTasks.find(task => task.id === id)
    if (taskToUpdate) {
      try {
        await axios.put(`http://localhost:3001/tasks/${id}`, taskToUpdate)
      } catch (error) {
        console.log('Error updating item', error)
      }
    }
    setTasks(updatedTasks)
  }


  // remove task
  const handleRemoveTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`)
      const updatedTasks = tasks.filter(task => task.id !== id)
      setTasks(updatedTasks)

    } catch (error) {
      console.log('Error deleting time', error)
    }
  }

  // filtered tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') {
      return !task.isCompleted
    } else if (filter === 'completed') {
      return task.isCompleted
    }
    return true
  })

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Adicionar nova tarefa" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('pending')}>Pendentes</button>
        <button onClick={() => setFilter('completed')}>Concluídas</button>
      </div>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(task.id)}>
              <input type="checkbox" checked={task.isCompleted} onChange={() => handleToggleComplete(task.id)} />
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
