import Image from 'next/image'
import React from 'react'
import eduImg from '../assests/education.png'
import InfoCard from './InfoCard'
import { PiCertificate, PiGraduationCapLight } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";

const PersonalInfo = ({title}) => {
    let education = [
        {
            title: "Bachelor of Science Computer Science",
            place: "Lasbela University of Agriculture Water and Marine Sciences, Uthal, 2023",
            imgUrl: eduImg,
            icon: <PiGraduationCapLight />
            // info: "hello"
        },
        {
            title: "High School",
            place: "Malir Cantt College, Karachi, 2018",
            imgUrl: eduImg,
            icon: <PiGraduationCapLight />
            // info: "hello"
        },
        {
            title: "MERN/MEAN Stack BootCamp",
            place: "Contour Software, Karachi",
            imgUrl: eduImg,
            icon: <PiCertificate />
            // info: "hello"
        },
    ]

    let experience = [
        {
            title: "Freelance Software Developer",
            place: "Remote, Dec 2022 - Current",
            imgUrl: eduImg,
            icon: <MdWorkOutline />
            // info: "hello"
        },
        {
            title: "Junior Software Engineer",
            place: "Contour Software, Jan 2022 - Mar 2023",
            imgUrl: eduImg,
            icon: <MdWorkOutline />
            // info: "hello"
        },
        {
            title: "Frontend Developer Intern",
            place: "SystemAlgos, Oct 2021 - Jan 2022",
            imgUrl: eduImg,
            icon: <MdWorkOutline />
            // info: "hello"
        },
    ]
  return (
    <section className='w-full mt-8'>
        <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        </div>
        <div className='flex flex-col gap-6'>
            {(title === 'Experience' ? experience: education).map(({title, place, imgUrl, icon},index) => (
                <div className='flex p-2 pb-4 gap-4 border-b rounded-lg border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-500 ease-in-out' key={index+1}>
                    <InfoCard 
                        title={title}
                        place={place}
                        imgUrl={imgUrl}
                        icon={icon}
                    />
                </div>
            ))}
        </div>
        
        
    </section>
  )
}

export default PersonalInfo