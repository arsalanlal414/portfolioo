'use client'
import React, { useState } from 'react'
import { IoCall, IoMail, IoPhoneLandscape, IoPhonePortrait } from 'react-icons/io5'
import { SocialIcons } from '../components/SocialIcons'
import qrCode from "../assests/QrCode.png";
import Image from 'next/image';

const Page = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData?.name,
                email: formData?.email,
                message: formData?.message,
            }),
        });
    
        const data = await res.json();
        setLoading(false);
        if (data.success) {
          
        } else {
            console.error('Error sending email:', data.error);
        }
        } catch (error) {
            setLoading(false);
            setSuccess(false);
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

  return (
    <section className="w-full my-12 mb-16 flex flex-col items-center justify-center gap-4">
    {/* Section Heading */}
    <h2 className="text-4xl font-semibold text-center mt-6">Let&apos;s Work Together!</h2>
  
    {/* Contact Information */}
    <div className="flex flex-col items-center justify-center">
      {/* Phone */}
      <div className="flex items-center text-gray-500 gap-2 p-2 px-4 rounded-full cursor-pointer text-sm">
        <IoCall />
        <input
          type="text"
          value="+92 3492034372"
          readOnly
          className="bg-transparent  border-none outline-none cursor-pointer"
          onClick={() => (window.location.href = 'tel:+923492034372')}
        />
      </div>
  
      {/* Email */}
      <div className="flex items-center text-gray-500 gap-2 p-2 px-4  rounded-full cursor-pointer text-sm">
        <IoMail />
        <input
          type="text"
          value="arsalanlal414@gmail.com"
          readOnly
          className="bg-transparent border-none outline-none cursor-pointer"
          onClick={() => (window.location.href = 'mailto:arsalanlal414@gmail.com')}
        />
      </div>
    </div>
  
    <SocialIcons />

    <form className="w-full lg:w-1/2 flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        className="w-full p-3 rounded-full bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        className="w-full p-3 rounded-full bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onChange={handleChange}
      />
      <textarea
        placeholder="Write a message..."
        rows="4"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        type="submit" 
        disabled={loading}
        className="w-full bg-gray-800 text-white p-3 text-lg rounded-full hover:bg-gray-700 transition-all duration-200"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
      <Image
        src={qrCode}
        alt="QR Code"
        className="h-40 w-40"
      />
    </div>
  
    {/* Footer */}
    <div className="text-sm text-gray-500 text-center mt-6">
      <p>© Copyright 2023. All rights Reserved.</p>
      <p>
        Made by <a href="#" className="text-gray-700 font-medium">Muhammad Arsalan</a>
      </p>
      <a href="#" className="text-gray-700 font-medium">Licensing open source</a>
    </div>
  </section>
  
  )
}

export default Page