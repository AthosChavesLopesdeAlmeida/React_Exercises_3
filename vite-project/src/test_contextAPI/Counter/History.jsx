import { useContext } from "react"
import CounterContext from "./CounterContext"

const History = () => {
  const {history} = useContext(CounterContext)

  return (
    <div className="container" >
      <h3>History</h3>
      <ul>
        {history.map((updt) => {
        return (
          <li>
            {updt.action}, {updt.time}
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default History