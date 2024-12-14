'use client';

import Link from "next/link";

const SectionHeader = ({title, navUrl, navText}) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        <Link
        href={navUrl}
        className="font-medium text-sm sm:text-base hover:scale-105 flex items-center transition-transform"
        
        >
            {navText} <span className="ml-2">→</span>
        </Link>
    </div>
  )
}

export default SectionHeader