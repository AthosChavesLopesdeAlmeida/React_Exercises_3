import { Routes, Route } from 'react-router-dom'
import Home from './test_react_router/basic_nav/pages/Home'
import About from './test_react_router/basic_nav/pages/About'
import Contact from './test_react_router/basic_nav/pages/Contact'
import Basic_nav from './test_react_router/basic_nav/main/Basic_nav'

function App() {
  return (
    <>
    <Basic_nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App