import { useContext } from "react"
import CounterContext from "./CounterContext"

const Controls = () => {
  const {increment, decrement, reset, count} = useContext(CounterContext)

  return (
    <div className="container">
      <h3>Count: {count}</h3>
      <div className="btn_container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Controls