import '../protected.css'
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ isLogged }) => {
  if (!isLogged) return <Navigate to='/login'/>
  
  return <Outlet/>
}

export default ProtectedRoute