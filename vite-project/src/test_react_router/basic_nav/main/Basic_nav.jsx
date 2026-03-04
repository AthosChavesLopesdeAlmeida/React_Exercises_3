import '../index.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Link } from 'react-router-dom'

const Basic_nav = () => {
  
  return (
    <div className='navbar'>
      <Link to='/' className='link'>Home</Link>
      <Link to='/about' className='link'>About</Link>
      <Link to='/contact' className='link'>Contact</Link>
    </div>
  )
}

export default Basic_nav