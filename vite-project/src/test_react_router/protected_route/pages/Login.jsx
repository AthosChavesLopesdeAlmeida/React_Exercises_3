import { Navigate, useNavigate } from "react-router-dom"

const Login = ({ setIsLogged }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLogged(true)
    navigate('/segredo')
  }

  return (
    <div className="login_div">
      <h1>Click here to login:</h1>
      <button onClick={handleLogin}>LogIn</button>
    </div>
  )
}

export default Login