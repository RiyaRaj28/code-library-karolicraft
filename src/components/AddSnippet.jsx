import React, { useRef, useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


const AddSnippet = () => {
  const navigate = useNavigate()
  const [code, setCode] = useState('');
  const [selectImg, setSelectImg] = useState("");
  const [title, setTitle] = useState('');
  const [imagePreview,setImagePreview] = useState("")
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [featured,setFeatured] = useState(false)
  const fileInputRef = useRef(null);
  const lang = ["Javascript", " React.js", "Node.js", "C++", 'Java', 'Python', 'Go', 'Typescript']
 console.log(featured)
  const handleSave = async (e) => {
    e.preventDefault();
    
if(!code){
  toast.error("Code is Required");
  return;
}

    const formData = new FormData();
    formData.append('featured', featured);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('code', code);
    formData.append('image', selectImg); 
    formData.append('language', language);
  
    try {
   const response =  await axios.post('http://localhost:3000/api/snippet/addsnippet', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.data.success === true){
        toast.success('Code saved successfully!');
        setCode("")
        setDescription("")
        setLanguage("")
        setFeatured(false)
        setTitle("")
        setSelectImg(null)
        navigate("/allsnippet")
      }

    } catch (error) {
      console.error('Error saving code:', error);
      toast.error(error.response.data.message);
    }
  };
  

  const handleDelete = () => {
    setSelectImg("../src/assets/placeholder.png")
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }

  return (

    <div className="p-8 w-[95%] min-h-full max-h-full overflow-auto ">
      <h1 className="text-2xl text-black mb-4 font-semibold">Add Snippet</h1>
      <form onSubmit={handleSave} >
        <div className='flex flex-col pb-2 '>
          <label className='font-semibold'>Title: </label>
          <input className="border rounded-md border-black px-2 py-1 text-sm h-11" type="text" placeholder='Enter Title of Snippet' value={title}
            onChange={(e) => setTitle(e.target.value)}  required/>
        </div>
        <div className='flex flex-col pb-2 '>
          <label className='font-semibold'>Description: </label>
          <textarea className="border rounded-md border-black px-2 py-1 h-40 text-sm " type="text" placeholder='Enter Description' value={description}
            onChange={(e) => setDescription(e.target.value)} required ></textarea>
        </div>
        <div className='flex flex-col pb-2 '>
          <p className='font-semibold'>Add Code:</p>
          <div className="border rounded-md border-black px-2 py-1">
            <CodeMirror
              value={code}
              required
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
              required
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                const x = file ? URL.createObjectURL(file) : undefined
                setImagePreview(x)
                setSelectImg(file)
              }} />
            {selectImg && <div className=' relative'>
              <img
                src={imagePreview}
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
            <select required className="border rounded-md border-black px-2 py-1 text-sm" name="language" id="language" value={language}
              onChange={(e) => setLanguage(e.target.value)}>
              <option value="">--Please choose language--</option>
              {lang.map((i, index) => <option key={index}>{i}</option>)}
            </select>
            <label className='font-semibold mt-4'>Featured:</label>
            <input type="checkbox" className='w-8 h-8' value={featured} onChange={(e)=>setFeatured(e.target.checked)}   />
          </div>
        </div>
        <div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            type='submit'
           >
            Submit
          </button>
        </div>
      </form >
    </div >
  );
};

export default AddSnippet;
