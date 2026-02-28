import { createContext, useEffect, useState } from "react";

const TasksContext = createContext()

function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    setTasks(prev => [...prev, {id: Date.now(), text, completed: false}])
  }

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    // eslint-disable-next-line
    if (saved) setTasks(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const value = {
    tasks,
    addTask,
    removeTask,
    toggleTask
  }

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext }
export default TasksProvider