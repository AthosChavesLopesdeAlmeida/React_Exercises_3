import './TaskList.css'
import initialTasks from "./data"
import TaskItem from "./TaskItem"
import { useState, useCallback } from "react"

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleDelete = useCallback((id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }, [tasks])

  const handleAdd = useCallback((e) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    setTasks([...tasks, { id: Date.now(), text: inputValue }])
    setInputValue('')
  }, [tasks, inputValue])

  return (
    <main className="tasklist_container">

      <section className="tasklist_section">
        <h4 className="tasklist_title">Add task</h4>
        <form className="tasklist_form" onSubmit={handleAdd}>
          <input className="tasklist_input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className="tasklist_btn" type="submit">Add</button>
        </form>
      </section>

      <section className="tasklist_section">
        <h4 className="tasklist_title">Tasks</h4>
        {tasks.map((task) => (
          <TaskItem task={task} onDelete={handleDelete} key={task.id}/>
        ))}
      </section>

      <section className="tasklist_section">
        <h4 className="tasklist_title">Count</h4>
        <span className="tasklist_count">{count}</span>
        <button className="tasklist_btn" onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </main>
  )
}

export default TaskList