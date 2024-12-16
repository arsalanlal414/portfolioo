import React from 'react'
import project from '../assests/project1.png'
import Image from 'next/image';
import ProjectsCard from '../components/ProjectsCard';

const Page = () => {

    const projects = [
        {
            title: "Predict Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#",
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
        {
            title: "Payble Website made in Framer",
            category: "Web Design",
            imageSrc: project, 
            link: "#", 
        },
    ];

      
  return (
    <section className="w-full mt-8">
        <div className="max-w-7xl mx-auto px-1 sm:px-4">
            <div className="flex flex-wrap justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-4xl font-semibold">My Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                <ProjectsCard/>
            </div>
        </div>
    </section>
  )
}

export default Page