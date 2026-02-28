import { useContext } from "react"
import { TasksContext } from "./TasksContext" 
import { FaTrash } from '../../../node_modules/react-icons/fa'

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useContext(TasksContext)

  return (
    <div className="task" key={task.id}>
      <input type="checkbox" onChange={ () => toggleTask(task.id)} checked={task.completed} />
      <span>{task.text}</span>
      <button onClick={() => removeTask(task.id)} className="trash_btn"><FaTrash/></button>
    </div>
  )
}

export default TaskItem