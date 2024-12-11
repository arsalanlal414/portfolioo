import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { LuLayers, LuMail } from "react-icons/lu";
import { BsGrid } from "react-icons/bs";
import Link from "next/link";
import FooterWrapper from "./components/FooterWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Portfolio Website",
  description: "Created by Muhammad Arsalan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased w-[100vw] overflow-x-hidden`}
      >
        {/* Bottom Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 py-4 px-8 bg-gray-100 shadow-lg md:flex items-center justify-center gap-6 text-2xl rounded-full hidden z-10">
          <Link href="/" className="text-gray-900 hover:text-gray-600 transition-all duration-200">
            <GrHomeRounded />
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-all duration-200">
            <AiOutlineUser />
          </Link>
          <Link href="/stack" className="text-gray-900 hover:text-gray-600 transition-all duration-200">
            <LuLayers />
          </Link>
          <Link href="/projects" className="text-gray-900 hover:text-gray-600 transition-all duration-200">
            <BsGrid />
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-all duration-200">
            <LuMail />
          </Link>
        </div>

        {/* Main Content */}
        <main className="w-full flex flex-col items-center">
          <div className="w-full lg:w-[800px]">{children}</div>
        </main>

        {/* Footer */}
        <div className="w-full flex flex-col items-center">
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
