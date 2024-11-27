import Image from "next/image";
import profile from '../assests/profile_pic.png'
import framer from '../assests/framer.png'
import project from '../assests/project1.png'
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuSparkle } from "react-icons/lu";

export default function Home() {
    const projects = [
      {
        title: "Predict Website made in Framer",
        category: "Web Design",
        imageSrc: project, // Replace with actual image path
        link: "#", // Replace with actual project link
      },
      {
        title: "Payble Website made in Framer",
        category: "Web Design",
        imageSrc: project, // Replace with actual image path
        link: "#", // Replace with actual project link
      },
      // Add more projects as needed
    ];
  return (
    <div id="homePage" className="w-full">
      <section className="w-full mb-4">
        <div className="flex w-full justify-between gap-8">
          <Image
            src={profile}
            alt="Picture of the author"
            className="w-[200px] h-[200px]"
            placeholder="blur"
          />  
          <div className="flex flex-col w-full justify-between">
            <div className="flex justify-between items-center">
              <p className="text-sm py-1.5 px-3 bg-green-200 rounded-full text-green-700 flex items-center gap-1"><GoDotFill /> Available for work</p>
              <div className="flex gap-6 text-lg items-center">
                <CiTwitter />
                <CiInstagram />
                <FaGithub />
                <CiLinkedin />
                
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-4xl">Hi there! I'm Arsalan!</h2>
              <p>
                I'm a passionate web designer dedicated to crafting 
                stunning and user-friendly online experiences.
              </p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-2 items-center"> <IoLocationOutline /> London, United Kingdom</p>
              <button className="flex gap-2 items-center">More about Me <FaArrowRightLong /></button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full py-2 mt-6">
          <div className="flex animate-ticker gap-4 whitespace-nowrap">
            {[...Array(8)].map((_, index) => (
              <p key={index} className="flex gap-4 items-center text-base sm:text-[18px] font-medium">
                <LuSparkle /> Web Design
              </p>
            ))}
            {/* Duplicate items to make the ticker seamless */}
            {[...Array(8)].map((_, index) => (
              <p key={index + 8} className="flex gap-4 items-center text-base sm:text-[18px] font-medium">
                <LuSparkle /> Web Design
              </p>
            ))}
          </div>
        </div>


      </section>
      <section className="w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Stack</h2>
          <p className="flex gap-4 items-center">Full Stack <FaArrowRightLong /></p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex p-4 min-h-[80px] items-center w-full border-b rounded-lg hover:shadow-lg cursor-pointer"
            >
              <Image
                src={framer}
                alt={`Picture of the author ${index + 1}`}
                className="w-[44px] h-[44px]"
                placeholder="blur"
              />
              <div className="flex flex-col justify-between h-full ml-3">
                <h3 className="text-[20px] font-semibold">Framer {index + 1}</h3>
                <p className="text-sm">Web Design</p>
              </div>
            </div>
          ))}
        </div>

      </section>
      {/* <section className="w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Stack</h2>
          <p className="flex gap-4 items-center">Full Stack <FaArrowRightLong /></p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-[330px] h-[500px] overflow-hidden">
                <Image
                  src={project}
                  alt={`Picture of the author ${index + 1}`}
                  className="w-full h-full hover:scale-125"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col justify-between h-full ml-3">
                <h3 className="text-[20px] font-semibold">Framer {index + 1}</h3>
                <p className="text-sm">Web Design</p>
              </div>
            </div>
          ))}
        </div>

      </section> */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <a
              href="#"
              className="font-medium hover:underline flex items-center"
            >
              All Projects <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group block rounded-lg overflow-hidden max-w-[332px]"
              >
                {/* Image */}
                <div className="relative h-[332px] max-w-[332px] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-sm ">{project.category}</p>
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
