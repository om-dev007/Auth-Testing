import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Home/>}  />
      <Route path='/api/auth/login'  element={<Login/>} />
      <Route path='/api/auth/register' element={<SignUp/>} />
    </Routes>
  )
}

export default App
