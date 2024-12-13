import React from 'react'
import { IoCall, IoMail, IoPhoneLandscape, IoPhonePortrait } from 'react-icons/io5'
import { SocialIcons } from '../components/SocialIcons'
import qrCode from "../assests/QrCode.png";
import Image from 'next/image';

const page = () => {
  return (
    <section className="w-full my-12 mb-16 flex flex-col items-center justify-between gap-6">
        <h2 className='text-4xl font-semibold mt-10'>Let&apos;s work <br />Together!</h2>
        <div className='flex flex-col'>
            <p className='flex gap-2 justify-center items-center p-2 px-4 hover:bg-gray-100 rounded-full cursor-pointer text-sm'><IoCall /> +92 3492034372</p>
            <p className='flex gap-2 justify-center items-center p-2 px-4 hover:bg-gray-100 rounded-full cursor-pointer text-sm'><IoMail/> arsalanlal414@gmail.com</p>
        </div>
        <SocialIcons />
        <form className="w-full lg:w-1/2">
            <div className="mb-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-full bg-gray-50  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            </div>
            <div className="mb-4">
            <input
                type="email"
                placeholder="Email"
                className="w-full p-3  px-5 rounded-full bg-gray-50  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            </div>
            <div className="mb-6">
            <textarea
                placeholder="Write a message..."
                rows="4"
                className="w-full p-3  px-5 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
            </div>
            <button
            type="submit"
            className="w-full bg-gray-800 text-white p-3 text-lg rounded-full hover:bg-gray-700 transition-all duration-200"
            >
            Send Message
            </button>
        </form>
        <div className="mb-4 bg-white shadow-lg rounded-lg p-4">
            <Image
                src={qrCode}
                alt="QR Code"
                className="h-40 w-40"
                // placeholder="blur"
            />  
        </div>
        <div className="text-sm text-gray-500 items-center flex flex-col">
            <p>© Copyright 2023. All rights Reserved.</p>
            <p>
              Made by <a href="#" className="text-gray-700 font-medium">Muhammad Arsalan</a> 
            </p>
            <a href="#" className="text-gray-700 font-medium">Licensing open source</a>
          </div>
    </section>
  )
}

export default page