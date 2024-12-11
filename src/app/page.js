'use client';

import Image from "next/image";
import framer from './assests/framer.png'
import project from './assests/project1.png'

import Slider from "react-slick";
import ProfileSection from "./components/ProfileSection";

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
    
  return (
    <div id="homePage" className="w-full p-4">
      <ProfileSection prof={false}/>
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
