'use client';

import Image from "next/image";

import project from './assests/project1.png'

import Slider from "react-slick";
import ProfileSection from "./components/ProfileSection";
import Link from "next/link";
import ProjectsCard from "./components/ProjectsCard";
import StacksCards from "./components/StacksCards";
import SectionHeader from "./components/SectionHeader";

export default function Home() {

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
        <SectionHeader title="Stack" navUrl="stack" navText="Full Stack"/>
        <StacksCards limit={6}/>
      </section>

      <section className="w-full mt-8">
        <div className="max-w-7xl mx-auto px-1 sm:px-4">
          <SectionHeader title="Projects" navUrl="projects" navText="All Projects"/>

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
                      src={client?.imageSrc}
                      alt={client?.name}
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
