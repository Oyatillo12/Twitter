import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [register, setRegister] = useState(null)
    const [activeSidebar, setActiveSidebar] = useState(localStorage.getItem('path') || '/')

    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem('token');
        return savedProfile ? JSON.parse(savedProfile) : token;
    });

    useEffect(() => {
        if (profile) {
            localStorage.setItem('token', JSON.stringify(profile));
        }
    }, [profile]);

    localStorage.setItem('path', activeSidebar)

    return (
        <Context.Provider value={{activeSidebar, profile, setProfile,setActiveSidebar,token, setToken, register, setRegister}}>{children}</Context.Provider>
    )
}