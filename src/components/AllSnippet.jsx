import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FaInfo, FaEdit, FaWindowClose, FaStar } from "react-icons/fa";
import axios from "axios";
import { IoEye } from "react-icons/io5";
import { toast } from "react-toastify";

function AllSnippet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const openModal = (title, content) => {
    setModalContent(content);
    setTitle(title);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/snippet/allsnippets`
        );
        console.log(response, "hhh");
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  console.log(data);
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/snippet/allsnippets/${id}`
      );
      console.log(response, "delte");
      if (response) {
        toast.success("Deleted SuccessFully");
        try {
          const response = await axios.get(
            `http://localhost:3000/api/snippet/allsnippets`
          );
          console.log(response, "hhh");
          if (response) {
            setData(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[95%] m-10 h-screen">
      <h1 className="text-2xl text-black pb-4 ">All Snippet</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="bg-yellow-400 text-center text-black-100 text-md font-medium uppercase tracking-wider">
            <th className="px-4 py-2">Sl. No.</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={item._id}
              className="border text-sm border-gray-200 hover:bg-gray-100 text-center"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td
                className="px-4 py-2"
                onClick={() => openModal("Title", item?.title)}
              >
                {item?.title.slice(0, 10)}
              </td>
              <td
                className="px-4 py-2 cursor-pointer"
                onClick={() => openModal("Description", item?.description)}
              >
                {item?.description.slice(0, 20)}...
              </td>
              <td className="px-4 py-2 flex justify-center items-center cursor-pointer">
                <IoEye
                  size={20}
                  color="blue"
                  className=""
                  onClick={() => openModal("image", item?.image)}
                />
              </td>
              <td className="px-4 py-2">{item?.language}</td>
              <td className="py-2  space-x-6 flex justify-center items-center  cursor-pointer">
                <Link to={`/editsnippet/${item?._id}`}>
                  <FaEdit size={20} className="" />
                </Link>
                <FaWindowClose
                  size={20}
                  className=""
                  onClick={() => handleDelete(item?._id)}
                />

                {item?.featured ? (
                  <FaStar
                    size={20}
                    className="hover:scale-125 fill-green-500"
                  />
                ) : (
                  <FaStar className="" size={20} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal
          data={data}
          title={title}
          content={modalContent}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default AllSnippet;
