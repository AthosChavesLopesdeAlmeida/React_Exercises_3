import AuthContext from "./AuthContext"
import { useContext } from "react" 
import './Auth.css'

const LoginForm = () => {
  const {login} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
    login(email, password)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginForm