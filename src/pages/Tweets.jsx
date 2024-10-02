import React, { useContext, useState } from 'react'
import { Context } from '../context/AuthContext'
import PostsList from '../components/PostsList'
import LoadingImg from '../assets/images/loading.png'
import { PinIcon } from '../assets/images/Icons'


function Tweets() {
  const { userPosts, setUserPosts,setPosts,posts } = useContext(Context)
  const [postOpenMore, setPostMoreOpen] = useState(false)
  const [postinf, setPost] = useState(null)
  const [isDeleteImg, setIsDeleteimg] = useState(false)



  function handleMore(id) {
    const findedPosts = userPosts.find(post => post.id == id)
    setPost(findedPosts)
    setPostMoreOpen(true)
  }

  function hadnleDelete() {
    setIsDeleteimg(true)
    setTimeout(() => {
      setPostMoreOpen(false)
      setIsDeleteimg(false)
      setUserPosts(userPosts.filter(post => post.id!= postinf.id))
      setPosts(posts.filter(post => post.id!= postinf.id))
    }, 1000)

  }
  return (
    <>
    <div className='mt-[15px] mb-[5px] pl-[66px] flex items-center space-x-[15px]'>
      <PinIcon/>
      <p className='font-semibold text-[16px] leading-[21px] text-[#536471]'>Pinned Tweet</p>
    </div>
      <ul>
        {userPosts.map(item => <PostsList onClick={handleMore} key={item.id} item={item} />)}
      </ul>

      {postOpenMore && <div onClick={(e) => e.target.id == 'wrapper' ? setPostMoreOpen(false) : ''} id='wrapper' className='fixed inset-0 flex items-center justify-center backdrop-blur z-10'>
        <div className='w-[320px] rounded-lg shadow-2xl bg-white p-6 flex flex-col  absolute'>
          <strong className='text-xl mb-3'>Delete post?</strong>
          <p className='mb-4 text-[16px]'>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results. </p>

          <button onClick={hadnleDelete} className='py-2 mb-3 rounded-[50px] bg-red-500 text-white text-[18px] duration-300 hover:opacity-75' type='button'>{isDeleteImg ? <img className='mx-auto scale-[1.7]' src={LoadingImg} alt={"loading"} width={27} /> : "Delete"}</button>
          <button onClick={() => setPostMoreOpen(false)} className='py-2 rounded-[50px] border-[1px] border-[#cfd9de] bg-transparent text-[18px] duration-300 hover:bg-[#0f14191a]' type='button'>Cancel</button>
        </div>
      </div>}
    </>
  )
}

export default Tweets
