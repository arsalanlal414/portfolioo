'use client';

import Image from "next/image";
import profile from './assests/profile_pic.png'
import framer from './assests/framer.png'
import project from './assests/project1.png'
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import { TbWorld } from "react-icons/tb";
import { SocialIcons } from "./components/SocialIcons";

export default function Home() {
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
    ];

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
            slidesToShow: 2.05, 
          },
        },
        {
          breakpoint: 768,
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
    
  return (
    <div id="homePage" className="w-full p-4">
    
    <section className="w-full mt-4">
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <Image
          src={profile}
          alt="Picture of the author"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto md:mx-0"
          placeholder="blur"
        />
        <div className="flex flex-col w-full justify-between">
          {/* Availability and Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm py-1.5 px-3 bg-green-200 rounded-full text-green-700 flex items-center gap-1">
              <GoDotFill /> Available for work
            </p>
            <SocialIcons />
          </div>

          {/* Intro Section */}
          <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Hi there! I&apos;m Arsalan!
            </h2>
            <p className="mt-2 text-sm md:text-base break-words md:break-normal overflow-hidden text-ellipsis">
              I&apos;m a passionate web designer dedicated to crafting stunning and user-friendly online experiences.
            </p>
          </div>

          {/* Location and Button */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
            <p className="flex gap-2 items-center text-sm md:text-base">
              <IoLocationOutline /> London, United Kingdom
            </p>
            <button className="flex gap-2 items-center text-sm md:text-base">
              More about Me <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      {/* Ticker Section */}
      <div className="relative overflow-hidden w-full py-2 mt-6">
        <div className="flex animate-ticker gap-4 whitespace-nowrap">
          {[...Array(8)].map((_, index) => (
            <p
              key={index}
              className="flex gap-4 items-center text-sm sm:text-base md:text-lg font-medium whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_2_1372)">
                  <path
                    d="M5.32597 8.56603C6.30997 8.73003 7.07997 9.50003 7.24397 10.484L7.96997 14.84L8.69597 10.484C8.85997 9.50003 9.62997 8.73003 10.614 8.56603L14.97 7.84003L10.614 7.11403C9.62997 6.95003 8.85997 6.18003 8.69597 5.19603L7.96997 0.840027L7.24397 5.19603C7.07997 6.18003 6.30997 6.95003 5.32597 7.11403L0.969971 7.84003L5.32597 8.56603Z"
                    fill="#424257"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1372">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.969971 0.840027)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Web Design
            </p>
          ))}
        </div>
      </div>
    </section>


      <section className="w-full mt-8">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Stack</h2>
          <a
            href="#"
            className="font-medium text-sm sm:text-base hover:scale-105 flex items-center transition-transform"
          >
            Full Stack <span className="ml-2">→</span>
          </a>
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

     


      <section className="w-full mt-8">
        <div className="max-w-7xl mx-auto px-1 sm:px-4">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
            <a
              href="#"
              className="font-medium text-sm sm:text-base hover:scale-105 flex items-center transition-transform"
            >
              All Projects <span className="ml-2">→</span>
            </a>
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
