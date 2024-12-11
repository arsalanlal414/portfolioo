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
                <InfoCard 
                    title="Bachelor's Degree in Web Design and Development"
                    info="XYZ University, 2010"
                    index={index}
                />
            ))}
        </div>
        
        
    </section>
  )
}

export default PersonalInfo