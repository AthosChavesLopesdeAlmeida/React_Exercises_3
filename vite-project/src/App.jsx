import { useContext } from "react"
import Dashboard from "./test_contextAPI/Auth/Dashboard"
import LoginForm from "./test_contextAPI/Auth/LoginForm"
import AuthContext from "./test_contextAPI/Auth/AuthContext"
import { AuthProvider } from "./test_contextAPI/Auth/AuthContext"

function AppContent () {
  const {user} = useContext(AuthContext)
  return user !== null ? <Dashboard/> : <LoginForm/>
}


function App() {

  return (
    <AuthProvider>
      <AppContent/>
    </AuthProvider>
  )
}

export default App
