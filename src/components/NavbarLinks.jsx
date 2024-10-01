import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ActiveHomeIcon } from '../assets/images/Icons'
import { Context } from '../context/AuthContext'

function NavbarLinks({item}) {
  
  return (
    <>
    <NavLink to={item.path} className={'font-medium flex items-center gap-5'}>
      { item.icon}
      <strong className='text-[18px] leading-6'>{item.title}</strong>
    </NavLink>
   </>
  )
}

export default NavbarLinks
