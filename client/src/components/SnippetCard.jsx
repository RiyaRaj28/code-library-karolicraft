import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";

function SnippetCard() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg hover:scale-105 ease-in duration-150 overflow-hidden border-none" >
        <img
          alt="Snippet Image"
          className="w-full aspect-square object-cover"
          height="300"
          src="../src/assets/placeholder.png"
          width="300"
        />
        <div className="p-4 bg-yellow-400 flex justify-between items-center ">
          <h3 className="text-lg font-medium text-black">Title</h3>
          <IoLogoJavascript className='text-xl' />
        </div>
      </div>
    </div>
  )
}

export default SnippetCard