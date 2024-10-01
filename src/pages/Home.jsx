import React, { useContext,  useState } from 'react'
import { CalendarIcon, CloseIcon, CommentIcon, Dots, GiftIcon, LikeIcon, ModeIcon, ReplyIcon, SaveImgIcon, ShareIcon, SimailIcon, StatsIcon } from '../assets/images/Icons'
import AvatarImg from '../assets/images/avatar.png'
import Button from '../components/Button'
import Kebab from '../assets/images/kebab.png'
import PostsList from '../components/PostsList'
import LoadingImg from '../assets/images/loading.png'
import { Context } from '../context/AuthContext'

function Home() {
  const {profile, setUserPosts, userPosts} = useContext(Context)
  const user = JSON.parse(localStorage.getItem('token'))

  
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || [
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

  localStorage.setItem('posts', JSON.stringify(posts))
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleteImg, setIsDeleteimg] = useState(false)

  const [postValue, setValue] = useState('')
  const [postImg, setPostImg] = useState(null)

  const [postinf, setPost] = useState(null)

  const [postOpenMore, setPostMoreOpen] = useState(false)

  function handleSubmitPost(e) {
    e.preventDefault();
    const data = {
      id: posts.length ? posts[posts.length - 1].id++ : 1,
      avatar: user?.avatar ? user.avatar : AvatarImg,
      name: user.login,
      gmail: user?.email ? `@${user.email} · 25m` : `${user.login} · 25m`,
      postDesk: postValue,
      likeCount: 0,
      commentCount: 0,
      repost: 0,
      postImage: postImg,
    }
    setIsLoading(true)
    setTimeout(() => {
      setPosts([data, ...posts])
      setUserPosts([data, ...userPosts])
      setIsLoading(false)
      setPostImg(null)
      e.target.reset()
    }, 1000)
  }

  function handleMore(id) {
    const findedPosts = posts.find(post => post.id == id)
    setPost(findedPosts)
    setPostMoreOpen(true)
  }

  function hadnleDelete() {
    const index = posts.findIndex(post => post.id == postinf.id)

    setIsDeleteimg(true)
    setTimeout(() => {
      posts.splice(index, 1)
      setPost(null)
      setPostMoreOpen(false)
      setIsDeleteimg(false)
      setPosts([...posts])
    }, 1000)

  }

  const [mode, setMode] = useState(false)

  function hadnleMode(){
    document.documentElement.classList.toggle("dark")
    setMode(!mode)
  }

  return (
    <div className='overflow-y-auto h-[100vh] overflow-x-hidden'>
      <div className='flex items-center justify-between p-5 border-b-[1px] border-b-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-8'>Home</h2>
        <button onClick={hadnleMode}>
          <ModeIcon />
        </button>
      </div>
      <form onSubmit={handleSubmitPost} className='p-5 border-b-[1px] border-b-[#D8D8D8] relative' autoComplete='off'>
        <div>
          <div className='flex items-center space-x-[15px] mb-5'>
            <img className='rounded-full w-[60px] h-[60px] object-cover' src={user?.avatar ? user?.avatar : AvatarImg} alt="Avatar Icon" height={60} width={60} />
            <input onChange={(e) => setValue(e.target.value)} className='w-[88%] outline-none font-semibold text-[22px] leading-[29px]' type="text" required name='postValue' placeholder='What’s happening' />
          </div>
          {postImg ? <div className='pl-[80px] relative'>
            <button type='button' onClick={() => setPostImg(null)} className='absolute duration-300 hover:opacity-75 top-2 right-[100px] bg-white p-2 rounded-full '><CloseIcon /></button>
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
        {posts.map(item => <PostsList onClick={handleMore} key={item.id} item={item} />)}
      </ul>
      {postOpenMore && <div onClick={(e) => e.target.id == 'wrapper' ? setPostMoreOpen(false) : ''} id='wrapper' className='fixed inset-0 flex items-center justify-center backdrop-blur z-10'>
        <div className='w-[320px] rounded-lg shadow-2xl bg-white p-6 flex flex-col  absolute'>
          <strong className='text-xl mb-3'>Delete post?</strong>
          <p className='mb-4 text-[16px]'>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results. </p>

          <button onClick={hadnleDelete} className='py-2 mb-3 rounded-[50px] bg-red-500 text-white text-[18px] duration-300 hover:opacity-75' type='button'>{ isDeleteImg ? <img className='mx-auto scale-[1.7]' src={LoadingImg} alt={"loading"} width={27}/> : "Delete"}</button>
          <button onClick={() => setPostMoreOpen(false)} className='py-2 rounded-[50px] border-[1px] border-[#cfd9de] bg-transparent text-[18px] duration-300 hover:bg-[#0f14191a]' type='button'>Cancel</button>
        </div>
      </div>}
    </div>
  )
}

export default Home
