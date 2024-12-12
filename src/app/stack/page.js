import React from 'react'
import InfoCard from '../components/InfoCard'

const Page = () => {
  return (
    <div className="w-full p-4">
      <section className='w-full mt-8'>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl md:text-4xl font-semibold">My Tech Box</h2>
        </div>
        <div className='flex flex-col gap-6'>
        {Array.from({ length: 8 }).map((_, index) => (
           <div className='flex p-2 pb-4 gap-4 border-b rounded-lg border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-500 ease-in-out' key={index}>
            <InfoCard 
              title="Bachelor&apos;s Degree in Web Design and Development"
              place="XYZ University, 2010"
              info="Framer serves as my go-to tool for creating interactive prototypes. I use it to bring 
                designs to life, allowing stakeholders to experience the user flow and interactions 
                before development begins. It&apos;s invaluable for refining the user experience."

            />
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Page