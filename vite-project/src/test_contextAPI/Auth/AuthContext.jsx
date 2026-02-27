import { useState, createContext } from "react";

const AuthContext = createContext()

function AuthProvider ({ children }) {
  
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const login = (email, password) => {
    if (email === 'giggity@teste.com' && password === '1234') {
      setUser({name: 'Glenn Quagmire', email})
      setError(null)
    } else {
      setError('Wrong email or password')
      alert('Wrong email or password')
    }
  }

  const value = {
    user, 
    error,
    login
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }