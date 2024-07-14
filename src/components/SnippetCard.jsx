import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';


function SnippetCard({item}) {

const navigate = useNavigate()

const redirect = ()=>{
  navigate('/snippet', { state: { item } });
}

  return (
    <div>
     <div onClick={()=>redirect()} className="bg-white rounded-lg shadow-lg hover:scale-105 ease-in duration-150 overflow-hidden border-none" >
        <img
          alt="Snippet Image"
          className="aspect-square object-cover"
          height="200"
          src={item.image}
          width="200"
        />
        <div className="p-4 bg-yellow-400 flex justify-between items-center ">
          <h3 className="text-lg font-medium text-black">{item.title}</h3>
         { item.language === "Javascript" && <IoLogoJavascript className='text-xl' />}
        </div>
      </div>
   
    </div>
 
  )
}

export default SnippetCard