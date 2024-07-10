import React, { useRef, useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import axios from 'axios';


const EditSnippet = () => {
  const [code, setCode] = useState('');
  const [selectImg, setSelectImg] = useState('../src/assets/placeholder.png');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const fileInputRef = useRef(null);
  const lang = ["Javascript", " React.js", "Node.js", "Cpp", 'Java', 'Python', 'Go', 'Typescript']

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      code,
      selectImg,
      language,
    };
    console.log(formData);
    // try {

    //   await axios.post('/api/saveCode', { code });
    //   alert('Code saved successfully!');
    // } catch (error) {
    //   console.error('Error saving code:', error);
    //   alert('Failed to save code.');
    // }
  };

  const handleDelete = () => {
    setSelectImg("../src/assets/placeholder.png")
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }

  return (

    <div className="p-8 w-3/4 ">
      <h1 className="text-2xl text-black mb-4 font-semibold">Edit Snippet</h1>
      <form >
        <div className='flex flex-col pb-2 '>
          <label className='font-semibold'>Title: </label>
          <input className="border rounded-md border-black px-2 py-1 text-sm h-11" type="text" placeholder='Enter Title of Snippet' value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='flex flex-col pb-2 '>
          <label className='font-semibold'>Description: </label>
          <input className="border rounded-md border-black px-2 py-1 h-40 text-sm " type="text" placeholder='Enter Description' value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='flex flex-col pb-2 '>
          <p className='font-semibold'>Edit Code:</p>
          <div className="border rounded-md border-black px-2 py-1">
            <CodeMirror
              value={code}
              height="400px"
              extensions={[javascript()]}
              onChange={(value) => setCode(value)}
            />
          </div>
        </div>
        <div className='flex justify-between pb-2 '>
          <div className='flex flex-col pb-2 '>
            <label className='font-semibold'>Choose an image:</label>
            <input
              ref={fileInputRef}
              className="border rounded-md border-black px-2 py-1 text-sm"
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                const x = file ? URL.createObjectURL(file) : undefined
                setSelectImg(x)
              }} />
            {selectImg && <div className=' relative'>
              <img
                src={selectImg}
                width="312px"
                height="200px"
                alt='snippet image'
                className='object-contain max-h-[200px] border border-black rounded-md mt-3' />
              <p className='absolute z-10 top-4 right-1 cursor-pointer ' onClick={handleDelete}>❌</p>
            </div>
            }
          </div>
          <div className='flex flex-col pb-2 '>
            <label className='font-semibold'>Choose a language:</label>
            <select className="border rounded-md border-black px-2 py-1 text-sm" name="language" id="language" value={language}
              onChange={(e) => setLanguage(e.target.value)}>
              <option value="">--Please choose language--</option>
              {lang.map((i, index) => <option key={index}>{i}</option>)}
            </select>
          </div>
        </div>
        <div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSave}>
            Submit
          </button>
        </div>
      </form >
    </div >
  );
};

export default EditSnippet;
