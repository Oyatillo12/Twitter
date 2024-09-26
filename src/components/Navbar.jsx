import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'
import { BookmarksIcon, Dots, ExploreIcon, HomeIcon, ListsIcon, MassagesIcon, MoreICon, NotificationsIcon, ProfileFillIcon } from '../assets/images/Icons'
import Button from './Button'
import Avatar from '../assets/images/avatar.png'
import Modal from './Modal'

function Navbar() {
  const user = JSON.parse(localStorage.getItem("token"))
  const navbarList = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon />,
      path: '/'
    },
    {
      id: 2,
      title: "Explore",
      icon: <ExploreIcon />,
      path: '/explore'
    },
    {
      id: 3,
      title: "Notifications",
      icon: <NotificationsIcon />,
      path: '/notifications'
    },
    {
      id: 4,
      title: "Messages",
      icon: <MassagesIcon />,
      path: '/messages'
    },
    {
      id: 5,
      title: "Bookmarks",
      icon: <BookmarksIcon />,
      path: '/bookmarks'
    },
    {
      id: 6,
      title: "Lists",
      icon: <ListsIcon />,
      path: '/lists'
    },
    {
      id: 7,
      title: "Profile",
      icon: <ProfileFillIcon />,
      path: '/profile'
    },
    {
      id: 8,
      title: "More",
      icon: <MoreICon />,
      path: '/more'
    },
  ]

  const [openModal, setOpenModal] = useState(false);

  function handleLogout() {
    setOpenModal(true)
  }
  function handleClearUser(){
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
      <div className='w-[25%] relative border-r-[#D8D8D8] border-r-[1px] h-[100vh] overflow-x-hidden overflow-y-auto pt-[31px] pr-[15px] pl-[120px]'>
        <Link to={'/'}>
          <img className='mb-[49px] ' src={Logo} alt="site logo" width={40} height={33} />
        </Link>

        <div className='space-y-[20px]'>
          {
            navbarList.map(item => <NavbarLinks key={item.id} item={item} />)
          }
        </div>
        <Button extraStyle={"w-[230px] py-[15px] mt-[30px] "} type={"button"}>Tweet</Button>
        <div className='flex items-center absolute bottom-7 '>
          <img src={Avatar} alt="icon" width={50} height={50} />
          <div className='ml-[10px] mr-[40px]'>
            <strong className='font-semibold text-[16px] leading-[21px]'>{user.login}</strong>
            <p className='text-[16px] opacity-60'>@bobur_mavlonov</p>
          </div>
          <button onClick={handleLogout}><Dots/></button>
        </div>
          <Modal extraStyle={"absolute left-[220px] bottom-[50px]"} openModal={openModal} setOpenModal={setOpenModal}> 
            <p className='text-[18px] leading-6'>Logout ?</p>
            <div className='flex justify-between mt-[10px]'>
              <button className='bg-red-500 text-white rounded-lg hover:opacity-70 duration-300 py-3 px-5 text-[18px]' onClick={() => setOpenModal(false)}>No</button>
              <button onClick={handleClearUser} className='bg-[#1D9BF0] text-white rounded-lg hover:opacity-70 duration-300 py-3 px-5 text-[18px]'>Yes</button>
            </div>  
          </Modal>
      </div>


    </>
  )
}

export default Navbar
