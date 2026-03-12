import './TaskList.css'
import React from "react"

const TaskItem = React.memo(({ task, onDelete }) => {
  console.log('Rendering: ', task.text)

  return (
    <div className="taskitem">
      <p className="taskitem_text">{task.text}</p>
      <button className="taskitem_btn" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
})

export default TaskItem