import './test_contextAPI/Counter/counter.css'
import History from "./test_contextAPI/Counter/History"
import Controls from "./test_contextAPI/Counter/Controls"
import { CounterProvider } from "./test_contextAPI/Counter/CounterContext"

function App() {

  return (
    <CounterProvider>
      <History/>
      <Controls/>
    </CounterProvider>
  )
}

export default App
