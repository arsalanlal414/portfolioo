import React from 'react'
import project from '../assests/project1.png'
import Image from 'next/image';

const page = () => {

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
                {projects.map((project, index) => (
                    <a
                    key={index}
                    href={project.link}
                    className="group block border-b rounded-lg hover:shadow-lg overflow-hidden max-w-[332px]"
                    >
                    
                    <div className="relative h-[240px] md:h-[332px] max-w-[332px] overflow-hidden">
                        <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform w-full h-full"
                        />
                    </div>

                    <div className="p-4">
                        <p className="text-sm ">{project.category}</p>
                        <h3 className="text-base sm:text-lg font-semibold">
                        {project.title}
                        </h3>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default page