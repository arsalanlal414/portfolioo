'use client';

import Image from "next/image";

import project from './assests/project1.png'

import Slider from "react-slick";
import ProfileSection from "./components/ProfileSection";
import Link from "next/link";
import ProjectsCard from "./components/ProjectsCard";
import StacksCards from "./components/StacksCards";
import SectionHeader from "./components/SectionHeader";
import MainSection from "./components/MainSection";

export default function Home() {

  const clients = [
    {
      name: "Emily Carter",
      title: "Project Manager, BrightTech",
      imageSrc: project,
      review:
        "Working with Muhammad Arsalan was an absolute pleasure. His deep expertise in MERN stack development helped us launch a feature-rich web application ahead of schedule. Highly recommend him for any development project!",
    },
    {
      name: "Daniel Peterson",
      title: "CEO, FinTrak Solutions",
      imageSrc: project,
      review:
        "Arsalan transformed our outdated system into a modern, scalable web app. His attention to detail and ability to solve complex problems were invaluable throughout the project.",
    },
    {
      name: "Sophia Martinez",
      title: "Founder, Glow eCommerce",
      imageSrc: project,
      review:
        "Thanks to Arsalan, our eCommerce platform is now lightning-fast and user-friendly. His ability to integrate payment gateways seamlessly was impressive!",
    },
    {
      name: "Chris Johnson",
      title: "CTO, EduSphere",
      imageSrc: project,
      review:
        "Muhammad Arsalan brought our educational platform to life with his exceptional skills. His proactive communication and dedication to quality stood out.",
    },
    {
      name: "Laura Bennett",
      title: "Marketing Lead, CreativePulse",
      imageSrc: project,
      review:
        "Arsalan delivered a stunning marketing dashboard that streamlined our workflow. His use of React and Node.js was nothing short of genius!",
    },
    {
      name: "Ahmed Ali",
      title: "Co-Founder, StartupHub",
      imageSrc: project,
      review:
        "Arsalan's work on our startup's MVP was crucial. His ability to work under tight deadlines without compromising quality was truly commendable.",
    },
    {
      name: "Victoria Hill",
      title: "Operations Manager, GreenWave Logistics",
      imageSrc: project,
      review:
        "Arsalan rebuilt our logistics management system, making it more efficient and reliable. His knowledge of MongoDB optimization saved us hours of downtime.",
    },
    {
      name: "Ethan Brooks",
      title: "Owner, Brooks Fitness",
      imageSrc: project,
      review:
        "Arsalan developed a sleek fitness tracking app for our gym. His UI/UX skills and backend development expertise are unmatched.",
    },
    {
      name: "Linda Williams",
      title: "Director, CharityConnect",
      imageSrc: project,
      review:
        "Our nonprofit's donation platform was beautifully crafted by Arsalan. His understanding of user needs and secure coding practices is exceptional.",
    },
    {
      name: "Rajesh Gupta",
      title: "Technical Lead, CloudSecure",
      imageSrc: project,
      review:
        "Muhammad Arsalan impressed us with his ability to integrate cutting-edge technologies into our cybersecurity dashboard. He’s an asset to any team!",
    },
  ];
  


  const duplicatedSlides = [...clients, ...clients];

  const settings = {
    dots: false,
    infinite: true,
    speed: 0, // No transition delay
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Keep it true
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear", // Smooth scrolling
    pauseOnHover: false, 
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

  
  return (
    <div id="homePage" className="w-full p-4">
      <ProfileSection prof={false}/>
      <MainSection>
        <SectionHeader title="Stack" navUrl="stack" navText="Full Stack"/>
        <StacksCards limit={6}/>
      </MainSection>

      <MainSection>
        <div className="max-w-7xl w-full">
          <SectionHeader title="Projects" navUrl="projects" navText="All Projects"/>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectsCard limit={2}/>
          </div>
        </div>
      </MainSection>

      <MainSection>
        <div className="max-w-7xl w-full">
          <h2 className="text-xl md:text-3xl font-semibold text-center mb-10">What Clients Say</h2>
          
          <div className="custom-slider-container">
            <Slider {...settings} className="slider">
              {duplicatedSlides.map((client, index) => (
                <div key={index} className="p-2 cursor-pointer h-[300px]">
                  <div className="bg-gray-50 rounded-xl shadow-md h-full p-3 text-center">
                    <div className="w-16 h-16 mx-auto mb-2 overflow-hidden rounded-full">
                      <Image
                        src={client?.imageSrc}
                        alt={client?.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-base font-semibold">{client.name}</h3>
                    <p className="text-[12px] text-gray-500 mb-4">{client.title}</p>
                    <p className="text-gray-700 text-[13px]">
                      {client.review.length > 150 ? `${client.review.slice(0, 150)}...` : client.review}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
