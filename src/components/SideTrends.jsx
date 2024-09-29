import React from 'react'
import { Dots, MoreICon, SettingsIcon } from '../assets/images/Icons'

function SideTrends() {
    const trendsList = [
        {
            id:1,
            trending:"Trending in Germany",
            title: 'Revolution',
            tweets:'50.4K Tweets'
        },
        {
            id:2,
            trending:"Trending in Germany",
            title: 'Revolution',
            tweets:'50.4K Tweets'
        },
        {
            id:3,
            trending:"Trending in Germany",
            title: 'Revolution',
            tweets:'50.4K Tweets'
        },
    ]
  return (
    <div className='mt-5 w-full rounded-[10px] bg-[#F7F9F9] px-[15px] py-5'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-[24px] leading-8 font-bold'>Trends for you</h3>
        <SettingsIcon/>
      </div>
      <ul className='space-y-[15px]'>
        {trendsList.map(item => (
            <li className='relative' key={item.id}>
                <p className='text-[#393B41] leading-[21px] mb-[2px] text-[16px]'>{item.trending}</p>
                <strong className='text-[20px] leading-[26px] font-semibold mb-[3px]'>{item.title}</strong>
                <span className='text-[#393B41] leading-[21px] text-[16px] block'>{item.tweets}</span>
                <button className='absolute top-[17px] right-0'><Dots/></button>
            </li>
        ))}
      </ul>
      <p className='mt-[30px] mb-[10px] text-[#1DA1F2] text-[18px]'>Show more</p>
    </div>
  )
}

export default SideTrends
