import React, { useState } from 'react'
import { CalendarIcon, CloseIcon, CommentIcon, Dots, GiftIcon, LikeIcon, ModeIcon, ReplyIcon, SaveImgIcon, ShareIcon, SimailIcon, StatsIcon } from '../assets/images/Icons'
import AvatarImg from '../assets/images/avatar.png'
import Button from '../components/Button'
import Kebab from '../assets/images/kebab.png'
import PostsList from '../components/PostsList'
import LoadingImg from '../assets/images/loading.png'

function Home() {
  const user = JSON.parse(localStorage.getItem("token"))
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: AvatarImg,
      name: 'Designsta',
      gmail: '@inner · 25m',
      postDesk: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      likeCount: 8,
      commentCount: 10,
      repost: 1,
      postImage: null,
    },
    {
      id: 2,
      avatar: AvatarImg,
      name: 'cloutexhibition',
      gmail: '@RajLahoti · 22m',
      postDesk: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      likeCount: 9,
      commentCount: 5,
      repost: 0,
      postImage: null,
    },
    {
      id: 3,
      avatar: AvatarImg,
      name: 'CreativePhoto',
      gmail: '@cloutexhibition · 1h',
      postDesk: "Обетда..... Кечиринглар",
      likeCount: 8,
      commentCount: 10,
      repost: 1,
      postImage: Kebab,
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [postValue, setValue] = useState('')
  const [postImg, setPostImg] = useState(null)

  function handleSubmitPost(e) {
    e.preventDefault();
    const data = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      avatar: AvatarImg,
      name: user.login,
      gmail: `@${user.login} · 25m`,
      postDesk: postValue,
      likeCount: 0,
      commentCount: 0,
      repost: 0,
      postImage: postImg,
    }
    setIsLoading(true)
    setTimeout(() => {
      setPosts([data, ...posts])
      setIsLoading(false)
      setPostImg(null)
      e.target.reset()
    }, 1000)
  }

  return (
    <div className='overflow-y-auto h-[100vh] border-r-[#D8D8D8] border-r-[1px] overflow-x-hidden'>
      <div className='flex items-center justify-between p-5 border-b-[1px] border-b-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-8'>Home</h2>
        <button>
          <ModeIcon />
        </button>
      </div>
      <form onSubmit={handleSubmitPost} className='p-5 border-b-[1px] border-b-[#D8D8D8] relative' autoComplete='off'>
        <div>
          <div className='flex items-center space-x-[15px] mb-5'>
            <img className='rounded-full' src={AvatarImg} alt="Avatar Icon" height={60} width={60} />
            <input onChange={(e) => setValue(e.target.value)} className='w-[88%] outline-none font-semibold text-[22px] leading-[29px]' type="text" required name='postValue' placeholder='What’s happening' />
          </div>
          {postImg ? <div className='pl-[80px] relative'>
            <button type='button' onClick={() => setPostImg(null)} className='absolute duration-300 hover:opacity-75 top-1 right-[156px] bg-white p-2 rounded-full '><CloseIcon/></button>
            <img className='rounded-[20px] w-[479px] h-[253px] object-cover' src={postImg} alt="Post img" width={479} height={253} />
          </div> : ""}
        </div>
        <div className='flex items-center space-x-5 pl-20 mb-[26px] mt-8'>
          <label>
            <SaveImgIcon />
            <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
          </label>
          <label>
            <GiftIcon />
            {/* <input className='hidden' type="file" /> */}
          </label>
          <label>
            <StatsIcon />
            {/* <input className='hidden' type="file" /> */}
          </label>
          <label>
            <SimailIcon />
            {/* <input className='hidden' type="file" /> */}
          </label>
          <label>
            <CalendarIcon />
            {/* <input className='hidden' type="file" /> */}
          </label>
        </div>
        <Button type={"submit"} extraStyle={`w-[108px] absolute bottom-[5px] right-5 ${postValue ? "" : "hover:opacity-50 opacity-50 cursor-not-allowed"}`} >{isLoading ? <img className='mx-auto scale-[3]' src={LoadingImg} alt={"loading"} width={22} /> : "Tweet"} </Button>
      </form>
      <ul>
        {posts.map(item => <PostsList key={item.id} item={item} />)}
      </ul>
    </div>
  )
}

export default Home
