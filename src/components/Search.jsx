import React from 'react'
import { useState } from 'react';
import SnippetCard from './SnippetCard'
import { FaSearch } from 'react-icons/fa';
function Search() {
  const [language, setLanguage] = useState('');

  const lang = ["Javascript", " React.js", "Node.js", "Cpp", 'Java', 'Python', 'Go', 'Typescript']
  return (
    <div className='flex flex-col w-3/4 m-5 h-screen'>
      <div className='flex justify-between'>
        <select className="border border-black rounded-md px-2 py-1" name="language" id="language" value={language}
          onChange={(e) => setLanguage(e.target.value)}>
          <option value="">--Please choose language--</option>
          {lang.map((i, index) => <option key={index}>{i}</option>)}
        </select>
        <div className='flex justify-center items-center gap-2 border border-black pl-2 rounded-md pr-2'>
          <FaSearch className='text-sm' />
          <input className=" focus:outline-none p-2" type="text" placeholder='Search by Name'></input>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 px-4 md:px-6 py-8">
        <SnippetCard />
        <SnippetCard />

      </div>
    </div>
  )
}

export default Search