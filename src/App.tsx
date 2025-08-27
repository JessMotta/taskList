import { useEffect, useState } from "react";
import type { Task } from "./types";
import './App.css'
import * as api from "./services/api";
import { v4 as uuidv4 } from 'uuid'
import TaskList from "./components/TaskList/TaskList";
import Form from "./components/Form/Form";
import TaskFilter from "./components/TaskFilter/TaskFilter";


function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  // get data from API
  useEffect(() => {
    api.getTasks().then(response => {
      setTasks(response.data)
    })
  }, [])

  // add new task
  const handleAddTask = async (newTaskText: string) => {

    // check if input isn't empty

    if (newTaskText !== '') {
      const newTask: Task = {
        id: uuidv4(),
        text: newTaskText,
        isCompleted: false
      }


      try {
        const response = await api.addTask(newTask);
        setTasks([...tasks, response.data]);
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
        await api.updateTask(id, taskToUpdate)
      } catch (error) {
        console.log('Error updating item', error)
      }
    }
    setTasks(updatedTasks)
  }


  // remove task
  const handleRemoveTask = async (id: string) => {
    try {
      await api.deleteTask(id)
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
      <Form onAddTask={handleAddTask} />
      <TaskFilter onChangeFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onRemoveTask={handleRemoveTask}
      />
    </>
  )
}

export default App
