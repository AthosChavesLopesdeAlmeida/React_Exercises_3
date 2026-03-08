import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('token', 'setToken')
    navigate('/admin')
  }

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User:</label>
        <input type="text" id='user'/>

        <label htmlFor="password">Password:</label>
        <input type="password" id='password'/>

        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login