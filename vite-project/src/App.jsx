import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Login from './test_react_router/protected_route/pages/Login'
import Segredo from './test_react_router/protected_route/pages/Segredo'
import ProtectedRoute from './test_react_router/protected_route/components/ProtectedRoute'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <Routes>
      <Route path='/login' element={<Login setIsLogged={setIsLogged} isLogged={isLogged}/>}/>
      <Route element={<ProtectedRoute isLogged={isLogged}/>}>
        <Route path='/segredo' element={<Segredo/>}/>
      </Route>
    </Routes>
  )
}

export default App