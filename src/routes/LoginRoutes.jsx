import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../pages'
import Twitter from '../assets/images/logo.svg'


const Login = lazy(() => new Promise(resolve =>{
  return setTimeout(() => resolve(import('../pages/Login')), 1000)
}))

function LoginRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Suspense fallback={ <img className='absolute inset-0 m-auto' src={Twitter} alt='loading' width={100} height={100}/>}> <Login/> </Suspense>}/>
      <Route path='/sign-up' element={<Register/>}/>
    </Routes>
  )
}

export default LoginRoutes
