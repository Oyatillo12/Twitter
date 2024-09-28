import React from 'react'
import { SearchIcon } from '../assets/images/Icons'

function SearchSideBar() {
  return (
    <div className='w-full bg-[#EFF3F4] rounded-[31px] px-5 py-[15px] flex items-center space-x-4'>
        <div><SearchIcon/></div>
        <input autoComplete='off' className='text-[18px] outline-none bg-transparent leading-6' type="text" name='search' placeholder='Search Twitter' />
    </div>
  )
}

export default SearchSideBar
