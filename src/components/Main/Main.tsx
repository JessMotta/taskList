import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TaskList from "../TaskList/TaskList";
import Task from "../Task/Task";

const Main = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState<string[]>([]);

    function handleTask(){
        const input = document.getElementById("task-input") as HTMLInputElement;
        setTask(input.value);
    }

    useEffect(() => {
        setTaskList([...taskList, task])
    }, [task])

    return (
    <main>
      <h1>Task List</h1>
      <Input id="task-input"/>
      <Button onClick={handleTask}/>
      <TaskList>{taskList.map((task, index) => <Task key={index}>{task}</Task>)}</TaskList>
    </main>
  )
}

export default Main;
