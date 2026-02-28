import TaskList from "./test_contextAPI/Tasks/TaskList"
import TaskInput from "./test_contextAPI/Tasks/TaskInput"
import TasksProvider from "./test_contextAPI/Tasks/TasksContext"


function App() {

  return (
    <TasksProvider>
      <TaskList/>
      <TaskInput/>
    </TasksProvider>
  )
}

export default App
