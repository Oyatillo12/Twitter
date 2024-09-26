import React from 'react'

function Button({extraStyle, type, children}) {
  return (
    <button  type={type} className={` bg-[#1DA1F2] hover:opacity-75 duration-300 rounded-[76px] py-[18px] text-white text-[18px] leading-6 font-bold ${extraStyle}`}>{children}</button>
  )
}

export default Button
