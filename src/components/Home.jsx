import { Link } from 'react-router-dom'
import "../styles/Home.css"
import SnippetCard from "./SnippetCard"
import { FaSearch } from "react-icons/fa";
function Home() {
  const arr = new Array(9).fill(null);

  return (
    <div className="flex ">

      <div className="flex flex-col">
        <p className='py-3 pl-4  font-bold text-2xl shadow-md box-border flex justify-between pr-10'>All Snippets

          <div className='flex justify-center items-center gap-2 rounded-md border border-black pl-2 pr-2'>
            <FaSearch className='text-sm' />
            <input className="p-2 text-sm focus:outline-none" type="text" placeholder="Search all"></input>
          </div>


        </p>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-6 py-8">

          {arr.map((i, index) => <>
            <Link to="/snippet" key={index}><SnippetCard /></Link ></>)}
        </div>
      </div>

    </div >
  )
}

export default Home
