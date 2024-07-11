import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Layout() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
       <ToastContainer />
    </div>

  )
}

export default Layout