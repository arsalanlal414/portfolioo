import Image from 'next/image'
import React from 'react'
import framer from '../assests/framer.png'
import { PiGraduationCapLight } from "react-icons/pi";

function InfoCard({title, info, place, imgUrl, icon}) {
  return (
    <>
        {
          icon ?
            <div className="text-lg p-2 bg-gray-100 h-min rounded-lg">
              {icon}
            </div> : 
            <Image
                src={imgUrl}
                alt={`Picture of the author`}
                className={`${icon === "small" ? "w-[20px] h-[20px]" : "w-[50px] h-[50px]"} mt-2`}
                // placeholder="blur"
            />
        }
        <div className="flex flex-col justify-evenly h-full gap-2">
            <h2 className='text-[18px] font-semibold'>{title}</h2>
            <p className='text-sm'>{place}</p>
            <p className='text-base'>{info}</p>
        </div>
    </>
  )
}

export default InfoCard