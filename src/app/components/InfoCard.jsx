import Image from 'next/image'
import React from 'react'
import framer from '../assests/framer.png'

function InfoCard({title, info, place, index}) {
  return (
    <div className='flex p-2 pb-4 gap-4 border-b rounded-lg border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-500 ease-in-out' key={index}>
        <Image
            src={framer}
            alt={`Picture of the author`}
            className={`w-[50px] h-[50px]`}
            placeholder="blur"
        />
        <div className="flex flex-col justify-evenly h-full gap-2">
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-sm'>{place}</p>
            <p className='text-base'>{info}</p>
        </div>
    </div>
  )
}

export default InfoCard