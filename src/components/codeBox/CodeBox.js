"use client"
import React, { useEffect } from 'react'
import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java';
import { MdContentCopy } from "react-icons/md";

export default function CodeBox({code, title}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    async function handleCopy (){
        await navigator.clipboard.writeText(code);
    }
    
  return (
    <div className=' border-[1px] rounded-sm'>
      <div className=' p-2 px-4 border-b-[1px] flex items-center justify-between bg-gray-50'>
        <p className=' text-sm'>{title}</p>
        <div className='flex items-center gap-3'>
            <span>copy</span>
            <span className=' cursor-pointer hover:bg-gray-200 p-2 rounded-md' onClick={handleCopy}  >
                <MdContentCopy  />
            </span> 
        </div>
      </div>
      <div className='p-2'>
        <pre>
            <code className='language-java'>{code}</code>
        </pre>
      </div>
    </div>
  )
}
