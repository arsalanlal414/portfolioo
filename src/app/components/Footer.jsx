import Image from "next/image";
import qrCode from "../assests/QrCode.png";
import { SocialIcons } from "./SocialIcons";

export default function Footer() {
    return (
      <footer className="bg-white py-12 rounded-[24px] px-4 lg:w-[900px] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Have a Project Idea?</h2>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
              Let&apos;s Connect →
            </button>
          </div>
  
          <div className="flex flex-col items-center">
            <SocialIcons />
            <div className="mb-4 bg-white shadow-lg rounded-lg p-4">
               <Image
                    src={qrCode}
                    alt="QR Code"
                    className="h-40 w-40"
                    placeholder="blur"
                />  
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>© Copyright 2023. All rights Reserved.</p>
            <p>
              Made by <a href="#" className="text-gray-700 font-medium">Muhammad Arsalan</a> 
            </p>
            <a href="#" className="text-gray-700 font-medium">Licensing open source</a>
          </div>
        </div>
      </footer>
    );
  }
  