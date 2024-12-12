import Image from 'next/image'
import React from 'react'
import framer from '../assests/framer.png'

function InfoCard({title, info, place}) {
  return (
    <>
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
    </>
  )
}

export default InfoCard