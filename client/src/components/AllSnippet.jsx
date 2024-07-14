import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from './Modal';
import { FaInfo, FaEdit, FaWindowClose, FaStar } from "react-icons/fa";

function AllSnippet() {
  const arr = [{
    id: 1,
    title: "Navbar",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, delectus provident perferendis ipsum quaerat molestias at dolor quisquam. Quidem adipisci exercitationem aperiam fugiat iste magni qui, soluta rerum eius molestias voluptatibus ipsam? Natus sequi, totam nulla sed, fuga necessitatibus, tenetur adipisci quia perspiciatis reprehenderit nemo eligendi. Optio animi quidem expedita consequuntur mollitia itaque culpa, eveniet rerum maxime porro architecto, inventore dolorem quas sequi voluptate cumque minima vitae dolor libero deserunt!",
    image: '../src/assets/placeholder.png',
    type: "Javascript",
    feature: true
  }, {
    id: 2,
    title: "Sidebar",
    description: "elit. Sed, delectus provident perferendis ipsum quaerat molestias at dolor quisquam. Quidem adipisci exercitationem aperiam fugiat iste magni qui, soluta rerum eius molestias voluptatibus ipsam? Natus sequi, totam nulla sed, fuga necessitatibus, tenetur adipisci quia perspiciatis reprehenderit nemo eligendi. Optio animi quidem expedita consequuntur mollitia itaque c",
    image: '../src/assets/placeholder.png',
    type: "CSS",
    feature: false
  }, {
    id: 3,
    title: "Hero page",
    description: "Sed, delectus provident perferendis ipsum quaerat molestias at dolor quisquam. Quidem adipisci exercitationem aperiam fugiat iste magni qui, soluta rerum eius molestias voluptatibus ipsam? Natus sequi, totam nulla sed, fuga necessitatibus, tenetur adipisci quia perspiciatis reprehenderit nemo eligendi.",
    image: '../src/assets/placeholder.png',
    type: "HTML",
    feature: false
  }, {
    id: 4,
    title: "Footer",
    description: " ipsam? Natus sequi, totam nulla sed, fuga necessitatibus, tenetur adipisci quia perspiciatis reprehenderit nemo eligendi. Optio animi quidem expedita consequuntur mollitia itaque culpa, eveniet rerum maxime porro architecto, inventore dolorem quas sequi voluptate cumque minima vitae dolor libero deserunt",
    image: '../src/assets/placeholder.png',
    type: "Java",
    feature: true
  }]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [data, setData] = useState(arr)
  const [id,setId] = useState()
  const openModal = (content,id) => {
    setModalContent(content);
    setId(id)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  console.log(data)
  const handleDelete = (id) => {
    const newarray = data
    const modarr = newarray.filter((i) => i.id != id)
    setData(modarr)
  }

  return (
    <div className="flex flex-col w-3/4 m-10 h-screen">
      <h1 className="text-2xl text-black pb-4 ">All Snippet</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="bg-yellow-400 text-black-100 text-md font-medium uppercase tracking-wider">
            <th className="px-4 py-2">Sl. No.</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border text-sm border-gray-200 hover:bg-gray-100">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2 cursor-pointer" onClick={() => openModal('description',item.id)}>{item.description.slice(0, 50)}...</td>
              <td className="px-4 py-2 cursor-pointer"><FaInfo className='hover:scale-125' onClick={() => openModal('image',item.id)}
              /></td>
              <td className="px-4 py-2">{item.type}</td>
              <td className="py-2 flex space-x-6 cursor-pointer">
                <Link to="/editsnippet"><FaEdit className='hover:scale-125' /></Link>
                <FaWindowClose className='hover:scale-125' onClick={() => handleDelete(item.id)} />

                {(item.feature) ? <FaStar className='hover:scale-125 fill-green-500' /> : <FaStar className='hover:scale-125' />}

              </td>
            </tr>

          ))}

        </tbody>
      </table>
      {isModalOpen && <Modal data={data} id={id} content={modalContent} closeModal={closeModal} />}
    </div >
  )
}

export default AllSnippet