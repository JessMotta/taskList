# :ballot_box_with_check: Task List :ballot_box_with_check:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=for-the-badge)


 ## Description :bookmark_tabs:
 Application to manage tasks:
 - add tasks
 - toggle status (pending or completed)
 - delete tasks

 To help you see your task list more clearly it's possible to filter the tasks by status using buttons: All (show all tasks in your board), Pending (show tasks that you haven't done) and Completed (show the tasks that you've done).

<img width="1600" height="900" alt="mockup" src="https://github.com/user-attachments/assets/f3109e02-629e-4d1b-8cb2-4ef764040b20" />

## Technologies :information_source:
- React.js
- TypeScript
- Vite
- JSON Server
- Axios

## Routes
| Path | Description
|-------| ---------
| `/tasks` | Página de login
| `/tasks/{id}` | Página com salas do aluno


## How to run this code :computer:
### Preparing environment

1. Clone this repository in your computer
```bash
git clone https://github.com/JessMotta/taskList.git
```

2. Open the repository
```bash
cd tasklist
```
3. Install all dependencies of the project
```bash
npm install
```
4. In a terminal run
```bash
npm run dev
```
5. Open the folder
```bash
cd tasklist/src
```
6. Run the backend in other terminal
```bash
json-server --watch db_tasks.json --port 3001
```


## Contact me :envelope_with_arrow:
<p align="center">
  <a href="https://www.linkedin.com/in/jessicamotta17/">
    <img alt="Jéssica Motta" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>

  <a href = "mailto:jessicamotta.dev@gmail.com">
   <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
 </a>
 </p>
