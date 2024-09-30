import React, { useContext, useEffect, useState } from 'react'
import { BackIcon, CloseIcon, DataIcon } from '../assets/images/Icons'
import { Outlet, useNavigate } from 'react-router-dom'
import AvatarImg from '../assets/images/avatar.png'
import ProfileLinks from '../components/ProfileLinks'
import EmptyImg from '../assets/images/empty.jpg'
import { Context } from '../context/AuthContext'

function Profile() {
  const navigate = useNavigate()
const {profile, setProfile} = useContext(Context)
const user = JSON.parse(localStorage.getItem('token'))

  
  const [profileImg, setProfileImg] = useState(EmptyImg)
  const [avatar, setAvatar] = useState(AvatarImg)

  const [userData, setUserDate] = useState(profile?.login)

  const [editModal, setEditModal] = useState(false)

  function handleEditSubmit(e) {
    e.preventDefault()
    const data = {
      login: userData,
      password: user.password,
      avatar: avatar,
      profileImg: profileImg
    }
    setProfile(data)
    setEditModal(false)
    setProfileImg(profileImg)
    setAvatar(avatar)
  }

  const profileLinksList = [
    {
      id: 1,
      title: 'Tweets',
      path: '/profile/'
    },
    {
      id: 2,
      title: 'Tweets & replies',
      path: '/profile/replies'
    },
    {
      id: 3,
      title: 'Media',
      path: '/profile/media'
    },
    {
      id: 4,
      title: 'Likes',
      path: '/profile/likes'
    },
  ]

  return (
    <div className='w-full overflow-y-auto h-[100vh]'>
      <div className='w-full pl-[31px] flex items-center space-x-10 pt-[22px] pb-[15px]'>
        <button onClick={() => navigate(-1)}><BackIcon /></button>
        <div className='flex flex-col'>
          <strong className='text-[20px] mb-[2px] leading-[26px] font-bold'>{profile?.login ? profile?.login : user.login}</strong>
          <span className='text-[16px] leading-[21px] text-black opacity-60'>1,070 Tweets</span>
        </div>
      </div>
      <div className='relative pb-[75px]'>
        <img className='w-full h-[200px] object-cover' src={profile?.profileImg ? profile.profileImg : EmptyImg} alt='profile img' width={'100%'} height={200} />
        <img className='absolute bg-white w-[130px] h-[130px] border-[5px] rounded-full border-white left-[25px] bottom-0 object-cover' src={profile?.avatar ? profile.avatar : AvatarImg} alt="avatar img" width={130} height={130} />
        <button onClick={() => setEditModal(true)} className='absolute right-[25px] rounded-[50px] duration-300 hover:bg-[#0f14191a] bottom-[15px] border-[#00000066] border-[1px] w-[120px] py-[10px] text-[18px] leading-6'>Edit profile</button>
      </div>
      <div className='px-[25px] mt-[10px]'>
        <strong className='block text-[24px] leading-8'>{profile?.login ? profile?.login : user.login}</strong>
        <span className='text-[16px] leading-[21px] opacity-60'>@{profile?.login ? profile?.login : user.login}</span>
        <div className='mt-[15px] flex items-center gap-[5px]'>
          <DataIcon />
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
        {profileLinksList.map(item => <ProfileLinks key={item.id} item={item} />)}
      </div>
      <Outlet />
      {editModal && <div onClick={(e) => e.target.id == 'wrapper' ? setEditModal(false) : ""} id='wrapper' className="fixed inset-0 backdrop-blur flex items-center z-10 justify-center">
        <form onSubmit={handleEditSubmit} className='p-4 bg-white shadow-lg rounded-lg w-[600px]'>
          <div className='flex items-center justify-between mb-[10px]'>
            <div className='flex items-center space-x-6'>
              <button className='scale-[1.7]' onClick={() => setEditModal(false)} type='button'> <CloseIcon /></button>
              <h2 className='text-[24px] leading-8 font-bold'>Edit profile</h2>
            </div>
            <button className='bg-black text-white rounded-[50px] py-[10px] w-[120px] text-[18px] leading-6 hover:opacity-60 duration-300' type='submit'>save</button>
          </div>
          <div className='relative pb-[60px] mt-[20px]'>
            <label>
              <img className='h-[150px] w-full object-cover' src={profileImg} alt="profileImg" width={'100%'} height={150} />
              <input onChange={(e) => setProfileImg(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
            </label>
            <label className='absolute left-4 bottom-0 hover:opacity-60 duration-300 z-10'>
              <img className='w-[100px] h-[100px] rounded-full object-cover border-[3px] border-white' src={avatar} alt="avatar img" width={100} height={100} />
              <input onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
            </label>
          </div>
          <label className=' w-full mb-[15px] '>
            <span className={`text-lg block mb-2`}>Name</span>
            <input required onChange={(e) => setUserDate(e.target.value)} defaultValue={userData} className='outline-none rounded-md focus:border-blue-500 w-full text-lg border-[1px] px-5 py-2 border-[#C4C4C4]' type="text" />
          </label>
        </form>
      </div>}
    </div>
  )
}

export default Profile
