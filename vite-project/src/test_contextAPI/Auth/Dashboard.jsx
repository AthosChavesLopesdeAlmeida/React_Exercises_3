import AuthContext from "./AuthContext"
import { useContext } from "react"
import './Auth.css'

const Dashboard = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className="container">
      <h3>Welcome {user.name}</h3>
    </div>
  )
}

export default Dashboard