import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Layout() {
  return (
    <div className='flex h-screen min-w-screen max-h-full max-w-full'>
      <div className='min-w-[20%] h-full'> <Sidebar /></div>
      <div className='min-w-[80%] h-full'><Outlet /></div>

       <ToastContainer />
    </div>

  )
}

export default Layout