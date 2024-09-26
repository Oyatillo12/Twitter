import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register, Login } from '../pages'

function LoginRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign-up' element={<Register/>}/>
    </Routes>
  )
}

export default LoginRoutes
