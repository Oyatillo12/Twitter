import React from 'react'
import { Link } from 'react-router-dom'

function ProfileLinks({item}) {
  return (
    <Link to={item.path} className={'py-[12px] font-normal w-[25%] text-center text-[18px] leading-6 hover:bg-[#0f14191a] duration-300'}>
      {item.title}
    </Link>
  )
}

export default ProfileLinks
