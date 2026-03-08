import './blog_exercise/blog.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './blog_exercise/Navbar'

import Home from './blog_exercise/pages/Home'
import Login from './blog_exercise/pages/Login'
import NotFound from './blog_exercise/pages/NotFound'
import PostDetail from './blog_exercise/pages/PostDetail'

import EditPost from './blog_exercise/admin/EditPost'
import CreatePost from './blog_exercise/admin/CreatePost'
import AdminLayout from './blog_exercise/admin/AdminLayout'

import ProtectedRoute from './blog_exercise/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/post/:id' element={<PostDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='create' element={<CreatePost/>}/>
            <Route path='edit/:id' element={<EditPost/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App