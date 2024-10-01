import { createContext, useEffect, useState } from "react";
import BoburImg from '../assets/images/bobur-img.png'
import BoburAvatar from '../assets/images/bobur-avatar.svg'



export const Context = createContext()

export const AuthContext = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    
    const [register, setRegister] = useState(null)


    const [userPosts, setUserPosts] = useState([
        {
            id: 1,
            avatar: BoburAvatar,
            name: "Bobur",
            gmail: `@bobur_mavlonov · Apr 1`,
            postDesk: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
            likeCount: 8,
            commentCount: 10,
            repost: 1,
            postImage: null,
        },
        {
            id: 2,
            avatar: BoburAvatar,
            name: "Bobur",
            gmail: `@bobur_mavlonov · Apr 1`,
            postDesk: "Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas.",
            likeCount: 9,
            commentCount: 5,
            repost: 0,
            postImage: null,
        },
        {
            id: 3,
            avatar: BoburAvatar,
            name: "Bobur",
            gmail: `@bobur_mavlonov · Apr 1`,
            postDesk: "A bo'pti maskamasman",
            likeCount: 8,
            commentCount: 10,
            repost: 1,
            postImage: BoburImg,
        },
    ])


    useEffect(() => {
        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
        }
    }, [token]);

    localStorage.setItem('token', JSON.stringify(token))
    
    

    return (
        <Context.Provider value={{ userPosts, setUserPosts, token, setToken, register, setRegister }}>{children}</Context.Provider>
    )
}