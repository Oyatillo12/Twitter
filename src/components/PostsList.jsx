import React from 'react'
import { CommentIcon, Dots, LikeIcon, ReplyIcon, ShareIcon, StatisticIcon } from '../assets/images/Icons'

function PostsList({item}) {
    return (
        <li className='p-5 border-b-[1px] border-b-[#D8D8D8]'>
            <div className='flex items-start justify-between'>
                <div className='flex items-start space-x-[15px]'>
                    <img className='w-[60px] h-[60px] rounded-full' src={item.avatar} alt="avatar icon" height={60} width={60} />
                    <div>
                        <strong className='mr-[5px] text-[20px] leading-[26px] font-bold' >{item.name}</strong>
                        <span className='text-black opacity-60 text-[18px] leading-6'>{item.gmail}</span>
                        <p className='text-[18px] leading-6 mt-[5px]'>{item.postDesk}</p>
                    </div>
                </div>
                <button><Dots /></button>
            </div>
            {item.postImage ?
                <div className='pl-[80px] mt-[15px]'>
                    <img className='w-[579px]  h-[353px] rounded-[20px]' src={item.postImage} alt="image" width={579} height={353} />
                </div> : ""}

            <div className='flex items-center pl-[80px] space-x-[100px] mt-[22px]'>
                <button className='flex items-center space-x-[10px]'>
                    <CommentIcon />
                    <span className='text-[#536471] text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <ReplyIcon />
                    <span className='text-[#536471] text-[16px] leading-[21px]'>{item.repost ? item.repost : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <LikeIcon />
                    <span className='text-[#536471] text-[16px] leading-[21px]'>{item.likeCount ? item.likeCount : ""}</span>
                </button>
                <button >
                    <ShareIcon />
                </button>
                <button>
                    <StatisticIcon />
                </button>
            </div>

        </li>
    )
}

export default PostsList
