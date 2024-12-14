import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

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
  title: 'Home - Portfolio Website',
  description: 'Welcome to the portfolio website of Muhammad Arsalan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased w-[100vw] overflow-x-hidden`}
      >
        <BottomNav /> 
        <main className="w-full flex flex-col items-center">
          <div className="w-full lg:w-[800px]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
