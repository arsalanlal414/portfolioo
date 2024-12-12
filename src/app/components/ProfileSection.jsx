'use client';
import React from 'react'
import { SocialIcons } from './SocialIcons'
import { GoDotFill } from 'react-icons/go'
import profile from '../assests/profile.png'
// import profile from '../assests/profile_pic.png'
import { IoLocationOutline } from 'react-icons/io5'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link';


const ProfileSection = ({prof}) => {
  
  return (
    <section className="w-full mt-4">
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <Image
          src={profile}
          alt="Picture of the author"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto md:mx-0 rounded-xl"
          placeholder="blur"
        />
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm py-1.5 px-3 bg-green-200 rounded-full text-green-700 flex items-center gap-1">
              <GoDotFill /> Available for work
            </p>
            <SocialIcons />
          </div>

          <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Hi there! I&apos;m Arsalan!
            </h2>
            <p className="mt-2 text-sm md:text-base break-words md:break-normal overflow-hidden text-ellipsis">
              I&apos;m a passionate MERN stack developer specializing in building efficient, scalable, and high-performance web applications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
            <p className="flex gap-2 items-center text-sm md:text-base">
              <IoLocationOutline /> Karachi, Pakistan
            </p>
            <Link href='/about' className={`${prof ? "hidden" : "flex"} gap-2 items-center text-sm md:text-base`}>
              More about Me <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${prof ? "relative" : "hidden"} overflow-hidden w-full py-2 mt-8`}>
        <p>
        I specialize in developing websites and web applications that deliver exceptional performance and seamless user experiences. My journey in web development began with a passion for solving problems through technology. Over the years, I&apos;ve mastered the MERN stack and other modern frameworks to build efficient, scalable, and responsive solutions that meet the needs of users and businesses alike.
        </p>
      </div>

      <div className="relative overflow-hidden w-full py-2 mt-6">
        <div className="flex animate-ticker gap-4 whitespace-nowrap">
          {["Web Develop", "Web Develop", "Web Develop", "Web Develop","Web Develop","Web Develop","Web Develop"].map((text, index) => (
            <p
              key={index}
              className="flex gap-4 items-center text-sm md:text-base font-medium whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_2_1372)">
                  <path
                    d="M5.32597 8.56603C6.30997 8.73003 7.07997 9.50003 7.24397 10.484L7.96997 14.84L8.69597 10.484C8.85997 9.50003 9.62997 8.73003 10.614 8.56603L14.97 7.84003L10.614 7.11403C9.62997 6.95003 8.85997 6.18003 8.69597 5.19603L7.96997 0.840027L7.24397 5.19603C7.07997 6.18003 6.30997 6.95003 5.32597 7.11403L0.969971 7.84003L5.32597 8.56603Z"
                    fill="#424257"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1372">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.969971 0.840027)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfileSection