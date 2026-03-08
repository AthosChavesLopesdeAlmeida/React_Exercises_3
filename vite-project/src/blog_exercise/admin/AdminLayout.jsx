import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  
  return (
    <>
      <nav>
        <Link to='/admin/edit'>Edit Post</Link>
        <Link to='/admin/create'>Create Post</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default AdminLayout