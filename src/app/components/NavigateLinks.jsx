import Link from 'next/link'
import React from 'react'

const NavigateLinks = ({ navUrl, navText }) => {
  return (
    <Link
        href={navUrl}
        className="font-medium text-sm sm:text-sm flex items-center group text-gray-700 transition-all duration-300 hover:bg-gray-400 hover:text-gray-50 py-[3px] px-4 rounded-full"
    >
        {navText} 
        <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">→</span>
    </Link>
  )
}

export default NavigateLinks