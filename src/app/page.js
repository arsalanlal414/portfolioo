'use client';

import Image from "next/image";
import html5 from './assests/html5.png'
import css3 from './assests/css3.png'
import javascript from './assests/javascript.webp'
import react from './assests/react.png'
import nodejs from './assests/nodejs.png'
import express from './assests/express.png'
import project from './assests/project1.png'

import Slider from "react-slick";
import ProfileSection from "./components/ProfileSection";
import Link from "next/link";
import ProjectsCard from "./components/ProjectsCard";

export default function Home() {
  // const projects = [
  //   {
  //     title: "Predict Website made in Framer",
  //     category: "Web Design",
  //     imageSrc: project, 
  //     link: "#",
  //   },
  //   {
  //     title: "Payble Website made in Framer",
  //     category: "Web Design",
  //     imageSrc: project, 
  //     link: "#", 
  //   },
  // ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3.05, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.05, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.03, 
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1.03, 
        },
      },
    ],
  };

  const clients = [
    {
      name: "Sarah Thompson",
      title: "Marketing Director",
      imageSrc: project,
      review:
        "Working with Natalie was a game-changer for our online presence. Her creativity and attention to detail transformed our website into a visual masterpiece.",
    },
    {
      name: "John Richards",
      title: "CEO Summit Solutions",
      imageSrc: project,
      review:
        "Natalie ability to blend aesthetics with functionality is unparalleled. She not only understood our brand but elevated it through her design.",
    },
    {
      name: "Michelle Rodriguez",
      title: "Founder Sparkle Boutique",
      imageSrc: project,
      review:
        "Natalie designs exceeded our expectations. Her strategic approach to user experience significantly improved our sites performance.",
    },
  ];

  const stacks = [
    {
      id: 1,
      imgUrl: html5,
      title: "HTML5",
      content: "Structure and Content",
    },
    {
      id: 2,
      imgUrl: css3, 
      title: "CSS3",
      content: "Visual Styling",
    },
    {
      id: 3,
      imgUrl: javascript, // Replace with the actual image URL
      title: "JavaScript",
      content: "Dynamic and Interactive",
    },
    {
      id: 4,
      imgUrl: react, // Replace with the actual image URL
      title: "React.js",
      content: "Reuseable Components",
    },
    {
      id: 5,
      imgUrl: nodejs, // Replace with the actual image URL
      title: "Node.js",
      content: "Backend API's",
    },
    {
      id: 6,
      imgUrl: express, // Replace with the actual image URL
      title: "Express.js",
      content: "Rest Api's",
    },
    // {
    //   id: 7,
    //   imgUrl: "/images/mongodb.svg", // Replace with the actual image URL
    //   title: "MongoDB",
    //   content: "NoSQL database for scalable applications",
    // },
    // {
    //   id: 8,
    //   imgUrl: "/images/nextjs.svg", // Replace with the actual image URL
    //   title: "Next.js",
    //   content: "Server-side rendering and static site generation",
    // },
    // {
    //   id: 9,
    //   imgUrl: "/images/prisma.svg", // Replace with the actual image URL
    //   title: "Prisma",
    //   content: "Efficient database ORM",
    // },
    // {
    //   id: 10,
    //   imgUrl: "/images/git.svg", // Replace with the actual image URL
    //   title: "Git",
    //   content: "Version control for collaborative development",
    // },
  ];
  
    
  return (
    <div id="homePage" className="w-full p-4">
      <ProfileSection prof={false}/>
      <section className="w-full mt-8">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Stack</h2>
          <Link
            href="/stack"
            className="font-medium text-sm sm:text-base hover:scale-105 flex items-center transition-transform"
            
          >
            Full Stack <span className="ml-2">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stacks.map(({title, content, id, imgUrl}) => (
            <div
              key={id}
              className="flex p-4 min-h-[60px] w-full border-b rounded-lg hover:shadow-lg cursor-pointer"
            >
              <Image
                src={imgUrl}
                alt={`stack image`}
                className="w-[44px] h-[44px]"
              />
              <div className="flex flex-col justify-evenly h-full ml-3">
                <h3 className="text-[16px] font-semibold">{title}</h3>
                <p className="text-[12px]">{content}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="w-full mt-8">
        <div className="max-w-7xl mx-auto px-1 sm:px-4">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
            <Link
              href="/projects"
              className="font-medium text-sm sm:text-base hover:scale-105 flex items-center transition-transform"
            >
              All Projects <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectsCard limit={2}/>
          </div>
        </div>
      </section>

      <section className="w-full mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold text-center mb-10">What Clients Say</h2>
          <Slider {...settings} className="slider">
            {clients.map((client, index) => (
              <div key={index} className="p-2 cursor-pointer">
                <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={client.imageSrc}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{client.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{client.title}</p>
                  <p className="text-gray-700 text-sm">{`"${client.review}"`}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
