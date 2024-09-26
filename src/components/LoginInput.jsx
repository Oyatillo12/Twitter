import React from 'react'

function LoginInput({type, placeholder,name, extraStyle}) {
  return (
    <input className={`py-[23px] text-[18px] leading-6 pl-[20px] pr-3 outline-none border-[1px] border-[#00000033] rounded-[6px] ${extraStyle}`} type={type} placeholder={placeholder} name={name} required/>
  )
}

export default LoginInput
