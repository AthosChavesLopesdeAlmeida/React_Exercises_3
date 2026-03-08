import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="link">Home</Link>
        <Link to='/login' className="link">Login</Link>
        <Link to='/admin' className="link">Admin</Link>
      </nav>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Navbar