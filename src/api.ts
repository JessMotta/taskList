import axios from "axios";
import type { Task } from "./types";

const api = axios.create({
    baseURL: 'http://localhost:3001'
});


export const getTasks = () => api.get<Task[]>('/tasks')
export const addTask = (task: Omit<Task, 'id'>) => api.post<Task>('tasks', task)
export const updateTask = (id: string, task: Task) => api.put<Task>(`/tasks/${id}`, task)
export const deleteTask = (id: string) => api.delete<Task>(`/tasks/${id}`)