import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BookMarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from '../pages'
import Navbar from '../components/Navbar'
import SidaBar from '../components/SidaBar'

function DashboardRoutes() {
    return (
        <div className='flex'>
            <Navbar />
            <div className='w-[50%]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/bookmarks' element={<BookMarks />} />
                    <Route path='/lists' element={<Lists />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/more' element={<More />} />
                </Routes>
            </div>
            <SidaBar />
        </div>

    )
}

export default DashboardRoutes
