import React from 'react'
import Mushtariy from '../assets/images/mushtariy.svg'
import Shuhratbek from '../assets/images/shuhratbek.svg'

function RecommendUsers() {
    const users = [ 
        {
            id:1,
            avatar:Mushtariy,
            name: 'Mushtariy',
            gmail:'@Mushtar565266'
        },
        {
            id:2,
            avatar:Shuhratbek,
            name: 'Shuhratbek',
            gmail:'@mrshukhrat'
        },
    ]
  return (
    <div className='mt-5 w-full rounded-[10px] bg-[#F7F9F9] px-[15px] py-5 mb-5'>
      <h3 className='font-bold text-[24px] leading-8 mb-[25px]'>You might like</h3>
        <ul className='space-y-[25px]'>
            {users.map(item => (
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='object-cover w-[50px] h-[50px] rounded-[50%]' height={50} width={50} src={item.avatar} alt={item.name}/>
                        <div>
                            <strong className='font-semibold leading-6 text-[16px]'>{item.name}</strong>
                            <span className='font-semibold text-black block opacity-60 leading-4 text-[16px]'>{item.gmail}</span>
                        </div>
                    </div>
                    <button type='button' className='px-2 py-[10px] rounded-[50px] text-white bg-black text-[18px] font-bold duration-300 hover:opacity-75'>Follow</button>
                </li>
            ))}
        </ul>
        <p className='mt-[30px] mb-[5px] text-[#1DA1F2] text-[18px]'>Show more</p>
   </div>
  )
}

export default RecommendUsers
