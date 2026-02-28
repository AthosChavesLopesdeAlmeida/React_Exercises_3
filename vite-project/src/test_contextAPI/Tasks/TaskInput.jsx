import './task.css'
import { useContext } from "react"
import { TasksContext } from "./TasksContext" 

const TaskInput = () => {
  const { addTask } = useContext(TasksContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const txt = e.target.txt.value
    addTask(txt)
  }

  return (
    <nav className='input_section'>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit} className='input_form'>
        <input type="text" name="txt" className='txt_input'/>
        <button type="submit">Create Task</button>
      </form>
    </nav>
  )
}

export default TaskInput