import '../nested.css'
import { Outlet, Link } from 'react-router-dom'
const DashboardLayout = () => {
  
  return (
    <>
      <nav>
        <Link className='link' to="/dashboard/resumo">Resumo</Link>
        <Link className='link' to="/dashboard/perfil">Perfil</Link>
        <Link className='link' to="/dashboard/config">Config</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default DashboardLayout