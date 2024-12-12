import Image from 'next/image'
import React from 'react'
import framer from '../assests/framer.png'
import InfoCard from './InfoCard'

const PersonalInfo = ({title}) => {
  return (
    <section className='w-full mt-8'>
        <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        </div>
        <div className='flex flex-col gap-6'>
            {Array.from({ length: 3 }).map((_, index) => (
                <div className='flex p-2 pb-4 gap-4 border-b rounded-lg border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-500 ease-in-out' key={index}>
                    <InfoCard 
                        title="Bachelor&apos;s Degree in Web Design and Development"
                        info="XYZ University, 2010"
                    />
                </div>
            ))}
        </div>
        
        
    </section>
  )
}

export default PersonalInfo