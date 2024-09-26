import React, { useContext, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import Loading from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast'

function Login() {
    const { setToken, register } = useContext(Context)
    const [isLoading, setLoading] = useState(false)
    function handleLoginSubmit(e) {
        e.preventDefault();
        const data = {
            login: e.target.name.value.trim(),
            password: e.target.password.value.trim()
        }

        if(register){
            if (data.login == register.login && data.password == register.password) {
                setLoading(true)
                toast.success("Welcome to Twitter " + data.login)
                setTimeout(() => setToken(data), 1000)
            }
            else {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    toast.error("Invalid Login. Please try again.")
                    e.target.reset()
                }, 1000)
            }
        }
        else{
            if (data.login == "oyatillo" && data.password == "123") {
                setLoading(true)
                toast.success("Welcome to Twitter " + data.login)
                setTimeout(() => setToken(data), 1000)
            }
            else {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    toast.error("Invalid Login. Please try again.")
                    e.target.reset()
                }, 1000)
            }
        }
    }
    return (

        <form onSubmit={handleLoginSubmit} className='w-[450px] mx-auto mt-[60px]' autoComplete='off'>
            <Toaster position="top-right" reverseOrder={false} />
            <img className='mb-[36px]' src={Logo} alt="logo img" width={50} height={41} />
            <h2 className='font-black text-[42px] leading-[49px] mb-[36px] pl-2'>Log in to Twitter</h2>
            <LoginInput extraStyle={"w-full mb-[25px]"} name={"name"} placeholder={"Phone number, email address"} type={"text"} />
            <LoginInput extraStyle={"w-full mb-[25px]"} name={"password"} placeholder={"Password"} type={"password"} />
            <Button extraStyle={"w-full mb-10 h-[59px]"} type={"submit"}>
                {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt='loading io' width={22} /> : "Log In"}
            </Button>
            <div className='flex items-center justify-between'>
                <p className='text-[#1DA1F2] text-[18px] leading-6 font-normal'>Forgot password?</p>
                <Link className='text-[#1DA1F2] text-[18px] leading-6 font-normal' to={"/sign-up"}> Sign up to Twitter</Link>
            </div>
        </form>
    )
}

export default Login
