import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <div className='h-100vh w-1/6 bg-yellow-300'>
        <Link to="/"><header className='py-5 pl-4 bg-yellow-400 font-bold text-2xl shadow-md box-border'>Code Library</header></Link>
        <Link to="/"><div className='pl-4 py-3 font-medium hover:bg-yellow-500'>Home</div></Link>
        <Link to="/search"><div className='pl-4 py-3 font-medium hover:bg-yellow-500'>Search</div></Link>
        <Link to="/addsnippet"><div className='pl-4 py-3 font-medium hover:bg-yellow-500'>Add Snippet</div></Link>
        <Link to="/allsnippet"><div className='pl-4 py-3 font-medium hover:bg-yellow-500'>All Snippet</div></Link>
      </div >

    </>
  )
}

export default Sidebar