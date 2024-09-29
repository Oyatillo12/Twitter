import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BookMarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from '../pages'
import Navbar from '../components/Navbar'
import SidaBar from '../components/SidaBar'

function DashboardRoutes() {
    return (
        <div className='flex'>
            <Navbar />
            <div className='w-[45%]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/bookmarks' element={<BookMarks />} />
                    <Route path='/lists' element={<Lists />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/more' element={<More />} />
                    <Route path='*' element={<h2 className='text-2xl mt-[60px] text-center'>Not found page let's try that again. </h2>} />
                </Routes>
            </div>
            <SidaBar />
        </div>

    )
}

export default DashboardRoutes
