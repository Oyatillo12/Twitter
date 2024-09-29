import React, { useState } from 'react'
import { ActiveLikeIcon, CommentIcon, Dots, LikeIcon, ReplyIcon, ShareIcon, StatisticIcon } from '../assets/images/Icons'

function PostsList({ item, onClick }) {

    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false);
    const [reported, setReported] = useState(false);

    const [likes, setLikes] = useState(item.likeCount);
    const [comments, setComments] = useState(item.commentCount);
    const [reports, setReports] = useState(item.repost);

    const handleComment = () => {
        setCommented(!commented);
        if (commented) {
            setComments(comments - 1);
        } else {
            setComments(comments + 1);
        }
    };
    const handleReport = () => {
        setReported(!reported);
        reported ? setReports(reports - 1) : setReports(reports + 1);
    };
    const handleLike = () => {
        setLiked(!liked)
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }

    };

    return (
        <li className='p-5 border-b-[1px] border-b-[#D8D8D8] relative'>
            <div className='flex items-start justify-between'>
                <div className='flex items-start space-x-[15px]'>
                    <img className='w-[60px] h-[60px] rounded-full' src={item.avatar} alt="avatar icon" height={60} width={60} />
                    <div>
                        <strong className='mr-[5px] text-[20px] leading-[26px] font-bold' >{item.name}</strong>
                        <span className='text-black opacity-60 text-[18px] leading-6'>{item.gmail}</span>
                        <p className='text-[18px] leading-6 mt-[5px]'>{item.postDesk}</p>
                    </div>
                </div>
                <button className='p-3 absolute top-3 duration-300 right-5 bg-transparent rounded-full hover:bg-[#0f14191a]' type='button' onClick={() => onClick(item.id)}><Dots /></button>
            </div>
            {item.postImage ?
                <div className='pl-[80px] mt-[15px]'>
                    <img className='w-[579px]  h-[353px] rounded-[20px]' src={item.postImage} alt="image" width={579} height={353} />
                </div> : ""}

            <div className='flex items-center pl-[80px] space-x-[80px] mt-[22px]' >
                <button onClick={handleComment} className={` relative text-[#536471] ${commented ? "text-blue-600" : ""}`}>
                    <CommentIcon />
                    <span className='absolute my-auto ml-[15px] inset-y-0 text-[16px] leading-[21px]'>{comments ? comments : ""}</span>
                </button>
                <button onClick={handleReport} className={`relative text-[#536471]  ${reported ? "text-[#0CB245]" : ""} `}>
                    <ReplyIcon />
                    <span className='absolute ml-[15px] text-[16px] top-[-3px] leading-[21px]'>{reports ? reports : ""}</span>
                </button>
                <button onClick={handleLike} className='relative'>
                    {liked ? <ActiveLikeIcon /> : <LikeIcon />}
                    <span className={`text-[#536471] ${liked ? "text-[#EF1C5C]" : ""} absolute my-auto ml-[15px] inset-y-0 text-[16px] leading-[21px]`}>{likes ? likes : ""}</span>
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
