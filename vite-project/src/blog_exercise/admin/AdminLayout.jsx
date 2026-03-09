import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  
  return (
    <>
      <nav className='navbar_links'>
        <Link to='/admin/edit' className='link'>Edit Post</Link>
        <Link to='/admin/create' className='link'>Create Post</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default AdminLayout