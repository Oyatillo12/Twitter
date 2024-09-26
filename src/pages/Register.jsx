import React, { useContext, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../context/AuthContext'

function Register() {
  const [isLoading, setLoading] = useState(false)
  const {register, setRegister} = useContext(Context)
  const navigate = useNavigate()

  function handleSubmitRegister(e){
    e.preventDefault()
    setLoading(true)
    const data = {
      login:e.target.name.value.trim(),
      password:e.target.tel.value.trim(),
    }
    setLoading(true)
    toast.success("Successfully registered")
    setTimeout(() => {
      setRegister(data)
      navigate(-1)
    }, 1000)

  }
  return (
    <form onSubmit={handleSubmitRegister} className='w-[670px] mx-auto mt-[30px]' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false} />
      <img className='mb-[43px] mx-auto' src={Logo} alt="logo img" width={40} height={33} />
      <h2 className='font-bold text-[30px] leading-[39px] mb-[35px]'>Create an account</h2>
      <LoginInput extraStyle={"w-full mb-[25px]"} name={"name"} placeholder={"Name"} type={"text"} />
      <LoginInput extraStyle={"w-full mb-[30px]"} name={"tel"} placeholder={"Phone number"} type={"tel"} />
      <Link className='text-[18px] hover:opacity-75 duration-300 leading-6 text-[#1DA1F2] ' to={"/"}>Use email</Link>
      
      <div className='flex flex-col mt-10 mb-[64px]'>
        <strong className='text-[18px] mb-[10px] block leading-6 font-bold'>Date of birth</strong>
        <p className='text-[16px] leading-6 text-black opacity-60'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      </div>
      <Button extraStyle={"w-full mb-10 h-[59px]"} type={"submit"}>
        {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt='loading io' width={22} /> : "Next"}
      </Button>
    </form>
  )
}

export default Register
