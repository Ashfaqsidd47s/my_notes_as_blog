import React from 'react'

export const metadata = {
    title: "test blogs",
    description: "These are test blogs i am just trying them",
};
  
export default function TestblogsLayout({ children }) {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className=' w-full p-5  md:w-[70%] overflow-hidden'>
            {children}
        </div>
    </div>
  )
}
