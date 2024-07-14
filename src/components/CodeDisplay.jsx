import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';
import { TiTick } from "react-icons/ti";
import { MdContentCopy } from "react-icons/md";

const CodeDisplay = ({ code }) => {
  //   const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
 
  //   useEffect(() => {
  //     const fetchCode = async () => {
  //       try {
  //         const response = await axios.get('/api/getCode');
  //         setCode(response.data.code);
  //       } catch (error) {
  //         console.error('Error fetching code:', error);
  //       }
  //     };

  //     fetchCode();
  //   }, []);

  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl mb-4">Code Display</h1>
      <div className="relative">
        <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <button className="absolute right-3 top-3  text-white text-lg py-1 px-2 rounded">
            {copied ? <p className='flex justify-center items-center gap-1 '><TiTick size={25} color='white' />Copied </p> : <p className='flex justify-center items-center gap-1' ><MdContentCopy size={20} color='white' />Copy text </p>}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="javascript" style={dark} className="rounded ">
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeDisplay;