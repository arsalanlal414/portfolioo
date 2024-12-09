import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Footer from "./components/Footer";

// Local Fonts
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

// Google Font: Inter
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
        <main className="w-full flex flex-col items-center">
          <div className="w-full lg:w-[800px]">
            {children}
          </div>
        </main>
        <div className="w-full flex flex-col items-center">
         <Footer />
        </div>
      </body>
    </html>
  );
}
