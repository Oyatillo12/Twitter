import React, { useContext } from 'react';
import { Context } from '../context/AuthContext'
import SearchSideBar from './SearchSideBar'
import SideTrends from './SideTrends'
import RecommendUsers from './RecommendUsers'
import ImagesBlog from '../assets/images/posts.png'
import { useLocation } from 'react-router-dom';

function SidaBar() {
  const {pathname} = useLocation()

 
  
 

  return (
    <div className='pl-7 w-[30%] pr-[60px] pt-5 overflow-y-auto h-[100vh] pb-[50px] border-l-[#D8D8D8] border-l-[1px]'>
      {pathname == '/' &&
        <div>
          <SearchSideBar />
          <SideTrends />
          <RecommendUsers />

          <div className='gap-[10px] flex flex-wrap items-center'>
            <button className='text-[#536471] text-[16px] leading-[21px] hover:underline'>Terms of Service</button>
            <button className='text-[#536471] text-[16px] leading-[21px] hover:underline'>Privacy Policy</button>
            <button className='text-[#536471] text-[16px] leading-[21px] hover:underline'>Cookie Policy</button>
            <button className='text-[#536471] text-[16px] leading-[21px] hover:underline'>Imprint</button>
            <button className='text-[#536471] text-[16px] leading-[21px] hover:underline'>Ads Info</button>
            <button className='text-[#536471] text-[16px] leading-[21px] hover:underline'>More ···</button>
            <p className='text-[#536471] text-[16px] leading-[21px] '>© 2021 Twitter, Inc.+</p>
          </div>

        </div>

      }

      {pathname.includes('/profile') && <div>
        
        <SearchSideBar />
        <img  src={ImagesBlog} alt='blog'  className='w-[100%] rounded-lg h-[178px] mt-[11px] object-cover' width={'100%'} height={178} />
          <RecommendUsers />
          <SideTrends />
      </div>}
    </div>
  )
}

export default SidaBar
