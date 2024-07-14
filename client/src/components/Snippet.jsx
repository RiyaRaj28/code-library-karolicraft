import React from 'react'
import CodeDisplay from './CodeDisplay'

function Snippet() {
  return (
    <div className='flex flex-col h-50vh w-3/4 m-5'>
      <div className='py-3 pl-4  font-bold text-2xl shadow-md box-border' >Heading</div>
      <div className='grid grid-cols-2 gap-5'>
        <div className='border'>
          <img
            alt="Snippet Image"
            className="w-full  aspect-square object-cover"
            height="200"
            src="../src/assets/placeholder.png"
            width="200"
          /></div>
        <div className='border row-span-2'><CodeDisplay /></div>
        <div className='border px-5'>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic saepe dolor, tempore fugit recusandae, nihil fuga consequuntur perferendis unde ducimus reprehenderit, sequi cupiditate sunt voluptatem at officiis provident? Doloribus vero numquam fugit velit qui libero enim quia esse. Aliquid, exercitationem. Impedit, nobis doloremque! Eaque praesentium vero neque libero consequuntur! Nesciunt. </div>
      </div>
    </div >

  )
}

export default Snippet