import React from 'react'

export default function Section({ children }) {
  return (
    <div className=' py-4 overflow-hidden'>
        <div className=' p-5 py-8 shadow-sm shadow-gray-200'>
        {children}
        </div>
    </div>
  )
}
