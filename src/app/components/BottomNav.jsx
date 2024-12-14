'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { LuLayers, LuMail } from "react-icons/lu";
import { BsGrid } from "react-icons/bs";
import Link from "next/link";

const BottomNav = () => {
  const pathname = usePathname();
  const data = [
    { href: '/', icon: <GrHomeRounded />, label: 'Home' },
    { href: '/about', icon: <AiOutlineUser />, label: 'About' },
    { href: '/stack', icon: <LuLayers />, label: 'Stack' },
    { href: '/projects', icon: <BsGrid />, label: 'Projects' },
    { href: '/contact', icon: <LuMail />, label: 'Contact' },
  ]

  return (
    <nav className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 py-3 px-3 bg-gray-50 bg-opacity-90 shadow-lg flex items-center justify-center gap-2 text-xl rounded-full z-10 md:gap-3">
      {data.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className={`group relative flex items-center justify-center hover:text-gray-900 text-gray-600 transition-all duration-300 rounded-full p-3 ${pathname === href ? "bg-gray-200" : "bg-white"}`}
        >
          {icon}
          <span className="absolute bottom-12 text-base bg-white text-gray-700 rounded-full px-4 py-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
