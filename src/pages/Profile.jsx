import React from 'react'
import { BackIcon, DataIcon } from '../assets/images/Icons'
import { Outlet, useNavigate } from 'react-router-dom'
import AvatarImg from '../assets/images/avatar.png'
import ProfileLinks from '../components/ProfileLinks'

function Profile() {
  const navigate = useNavigate()
  const profile = JSON.parse(localStorage.getItem('token'))

  const profileLinksList = [
    {
      id:1,
      title:'Tweets',
      path:'/profile/'
    },
    {
      id:2,
      title:'Tweets & replies',
      path:'/profile/replies'
    },
    {
      id:3,
      title:'Media',
      path:'/profile/media'
    },
    {
      id:4,
      title:'Likes',
      path:'/profile/likes'
    },
  ]

  return (
    <>
      <div className='pl-[31px] flex items-center space-x-10 pt-[22px] pb-[15px]'>
        <button onClick={() => navigate(-1)}><BackIcon /></button>
        <div className='flex flex-col'>
          <strong className='text-[20px] mb-[2px] leading-[26px] font-bold'>{profile.login}</strong>
          <span className='text-[16px] leading-[21px] text-black opacity-60'>1,070 Tweets</span>
        </div>
      </div>
      <div className='relative pb-[75px]'>
        <div className='w-full h-[200px] bg-slate-200 '></div>
        <img className='absolute border-[5px] rounded-full border-white left-[25px] bottom-0' src={AvatarImg} alt="avatar img" width={130} height={130} />
        <button className='absolute right-[25px] rounded-[50px] duration-300 hover:bg-[#0f14191a] bottom-[15px] border-[#00000066] border-[1px] w-[120px] py-[10px] text-[18px] leading-6'>Edit profile</button>
      </div>
      <div className='px-[25px] mt-[10px]'>
        <strong className='block text-[24px] leading-8'>{profile.login}</strong>
        <span className='text-[16px] leading-[21px] opacity-60'>@{profile.login}</span>
        <div className='mt-[15px] flex items-center gap-[5px]'>
          <DataIcon/>
          <p className='text-[18px] leading-6 opacity-60'>Joined September 2024</p>
        </div>
        <div className='flex items-center space-x-[30px] mt-[15px]'>
          <button className='flex items-center space-x-2 text-[18px] leading-8'>
            <strong className=''>67</strong>
            <span className='opacity-60'>Following</span>
          </button>
          <button className='flex items-center space-x-2 text-[18px] leading-8'>
            <strong className=''>47</strong>
            <span className='opacity-60'>Followers</span>
          </button>
        </div>
      </div>
      <div className='flex mt-[15px] w-full items-center justify-between border-b-[1px] border-b-[#C4C4C4]'>
          {profileLinksList.map(item => <ProfileLinks key={item.id} item={item}/>)}
      </div>
      <Outlet/>
    </>
  )
}

export default Profile
