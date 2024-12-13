import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsCard = ({limit}) => {

  const projects = [
    {
        id: 0,
        title: "Fyrre Magazine",
        description: "Ultimate destination for premium coffee, tea, chocolate, and bakery delights worldwide.",
        image: "/images/projects/capture.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/arsalanlal414/Fyrre-Magazine",
        previewUrl: "https://fyrre-magazine-five.vercel.app/",
      },
    {
      id: 1,
      title: "Java Times Cafe",
      description: "Ultimate destination for premium coffee, tea, chocolate, and bakery delights worldwide.",
      image: "/images/projects/javatimescaffe.png",
      tag: ["All", "Web"],
      gitUrl: "https://javatimescaffe.com/en",
      previewUrl: "https://javatimescaffe.com/en",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description: "Admin Dashboard build with React and TypeScript. Helps the Admins to navigate all the stats.",
      image: "/images/projects/adminDashboard.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/arsalanlal414/admin-dashboard",
      previewUrl: "https://stats-dashboard.surge.sh/",
    },
    {
      id: 3,
      title: "WIW Bank",
      description: "Revolutionizing payments with the next generation of secure and efficient transaction methods.",
      image: "/images/projects/wiw-bank.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/arsalanlal414/WIW-Bank",
      previewUrl: "https://wiw-bank.surge.sh",
    },
    {
      id: 4,
      title: "Nexcent Landing Page",
      description: "Nexcent Landing Page build with React. I have created a responsive User Interface to help the user navigate easily",
      image: "/images/projects/nexcent_landing_page.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/arsalanlal414/Nexcent_LandingPage",
      previewUrl: "http://nexcentt.surge.sh/",
    },
    {
      id: 5,
      title: "Chat App",
      description: "Desktop version of chat app created with react and firebase. also integrated the user authentication.",
      image: "/images/projects/smooty-chatapp.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/arsalanlal414/Firebase-Chat-App",
      previewUrl: "http://smootychatapp.surge.sh/",
    },
    {
      id: 6,
      title: "Receipe Master",
      description: "A React-based app integrating Food API for effortless discovery of diverse, global recipes.",
      image: "/images/projects/recipeApp.png",
      tag: ["All", "Mobile", "Web"],
      gitUrl: "https://github.com/arsalanlal414/recipe_master",
      previewUrl: "http://recipemasters.surge.sh",
    },
    
  ];
  return (
    <>
        {projects.slice(0, limit ? limit : projects.length%2 !== 0 ? projects.length - 1 : projects.length).map((project) => (
            <Link
            key={project.id}
            href={project.previewUrl}
            target="_blank"
            className="group p-2 block border-b rounded-lg hover:shadow-lg overflow-hidden max-w-[332px]"
            >
            <div className="relative h-[240px] w-full md:h-[240px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="fill"
                  className="group-hover:scale-105 transition-transform w-full rounded-lg"
                />
            </div>

            <div className="py-4">
                <h3 className="text-base sm:text-lg font-semibold">
                {project.title}
                </h3>
                <p className="text-sm ">{project.description}</p>
            </div>
            </Link>
        ))}
    </>
  )
  
}

export default ProjectsCard