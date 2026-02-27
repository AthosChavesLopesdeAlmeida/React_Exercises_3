import { createContext, useState } from "react";

const CounterContext = createContext()

function CounterProvider ({ children }) {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

  const increment = () => {
    setCount(prev => prev + 1)
    setHistory([...history, {action: 'increment', time: new Date().toLocaleTimeString()}])
  }

  const decrement = () => {
    setCount(prev => prev - 1)
    setHistory([...history, {action: 'decrement', time: new Date().toLocaleTimeString()}])
  }

  const reset = () => {
    setCount(0)
    setHistory([...history, {action: 'reset', time: new Date().toLocaleTimeString()}])
  }

  const value = {
    increment,
    decrement,
    reset,
    count,
    history
  }

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  )
}

export {CounterProvider}
export default CounterContext