import './task.css'
import TaskItem from "./TaskItem"
import { useContext, useState } from "react"
import { TasksContext } from "./TasksContext"

const TaskList = () => {
  const { tasks } = useContext(TasksContext)
  const [filter, setFilter] = useState('all')

  let visibleTasks 
  if (filter === 'all') visibleTasks = tasks
  if (filter === 'completed') visibleTasks = tasks.filter(task => task.completed === true)
  if (filter === 'pending') visibleTasks = tasks.filter(task => task.completed === false)

  return (
    <>
    <select name="filter" id="filter" onChange={e => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
    <main className="task_list">
      {visibleTasks.map((task) => {
        return (
          <TaskItem task={task} key={task.id}/>
        )
      })}
    </main>
    </>
  )
}

export default TaskList