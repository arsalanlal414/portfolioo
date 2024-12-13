import React from 'react'
import html5 from '../assests/html5.png'
import css3 from '../assests/css3.png'
import javascript from '../assests/javascript.webp'
import react from '../assests/react.png'
import nodejs from '../assests/nodejs.png'
import express from '../assests/express.png'
import Image from 'next/image'

const StacksCards = ({limit}) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stacks.slice(0, limit && limit).map(({title, content, id, imgUrl}) => (
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
  )
}

export default StacksCards