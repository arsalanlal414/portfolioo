'use client'

import { IoCall, IoMail } from 'react-icons/io5'

const ContactDiv = () => {
  return (
    <div className='flex flex-col justify-center'>
        <div className='flex gap-2 justify-center items-center p-2 px-4 hover:bg-gray-100 rounded-full cursor-pointer text-sm'>
            <IoCall /> 
            <input
                type="text"
                value="+92 3492034372"
                readOnly
                className="bg-transparent border-none outline-none cursor-pointer"
                onClick={() => (window.location.href = 'tel:+923492034372')}
            />
        </div>
        <div className='flex gap-2 justify-center items-center p-2 px-4 hover:bg-gray-100 rounded-full cursor-pointer text-sm'>
            <IoMail/>
            <input
                type="text"
                value="arsalanlal414@gmail.com"
                readOnly
                className="bg-transparent border-none outline-none cursor-pointer"
                onClick={() => (window.location.href = 'mailto:arsalanlal414@gmail.com')}
            />
        </div>
    </div>
  )
}

export default ContactDiv