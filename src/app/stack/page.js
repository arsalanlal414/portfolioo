import React from 'react'
import InfoCard from '../components/InfoCard'
import html5 from '../assests/html5.png'
import css3 from '../assests/css3.png'
import javascript from '../assests/javascript.webp'
import react from '../assests/react.png'
import nodejs from '../assests/nodejs.png'
import express from '../assests/express.png'
import Image from 'next/image'

const Page = () => {
  const stacks = [
          {
            id: 1,
            imgUrl: html5,
            title: "HTML5",
            content: "Structure and Content",
            info: "HTML5 is the backbone of my web development projects, enabling me to create well-structured and semantically rich content for websites and applications. It's essential for ensuring accessibility and compatibility across modern browsers."
          },
          {
            id: 2,
            imgUrl: css3, 
            title: "CSS3",
            content: "Visual Styling",
            info: "CSS3 empowers me to design visually appealing and responsive interfaces. From layouts to animations, it helps me craft engaging and adaptable designs that provide seamless user experiences."
          },
          {
            id: 3,
            imgUrl: javascript, // Replace with the actual image URL
            title: "JavaScript",
            content: "Dynamic and Interactive",
            info: "JavaScript adds interactivity and functionality to my web applications. From dynamic content updates to advanced DOM manipulation, it's the key to making websites more engaging and user-friendly."
          },
          {
            id: 4,
            imgUrl: react, // Replace with the actual image URL
            title: "React.js",
            content: "Reuseable Components",
            info: "React.js is my preferred library for building efficient and scalable user interfaces. Its component-based architecture allows me to create reusable elements that simplify development and enhance maintainability."
          },
          {
            id: 5,
            imgUrl: nodejs, // Replace with the actual image URL
            title: "Node.js",
            content: "Backend API's",
            info: "Node.js provides the runtime for building fast and scalable backend solutions. I leverage its asynchronous capabilities to develop robust APIs and handle server-side operations efficiently."
          },
          {
            id: 6,
            imgUrl: express, // Replace with the actual image URL
            title: "Express.js",
            content: "Rest Api's",
            info: "Express.js simplifies backend development by providing a lightweight framework for creating RESTful APIs. It's my go-to choice for building flexible and maintainable server-side applications."
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
    <div className="w-full p-4">
      <section className='w-full mt-8'>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl md:text-4xl font-semibold">My Tech Box</h2>
        </div>
        <div className='flex flex-col gap-6'>
        {stacks.map(({id, title, imgUrl, content, info }) => (
           <div className='flex p-2 pb-4 gap-4 border-b rounded-lg border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-500 ease-in-out' key={id}>
            <InfoCard 
              title={title}
              place={content}
              imgUrl={imgUrl}
              info={info}

            />
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Page