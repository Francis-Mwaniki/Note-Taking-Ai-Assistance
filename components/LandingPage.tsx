"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import about from '@/public/about.png';
import about2 from '@/public/about2.png';
import about3 from '@/public/about3.png';
import cv2 from '@/public/cv2.png';
import TypewriterEffect from './TypeWriterEffect';
import Link from 'next/link'
import { Quicksand, DM_Sans, Inter, Poppins} from 'next/font/google'
import { Button } from './ui/button';
import { ArrowBigRight, ArrowBigRightIcon, ArrowRight } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
const dm_sans= DM_Sans({ subsets: ['latin'] })
const poppins= Poppins({
  subsets: ['latin'],
  weight: '400'
})
const inter= Inter({ subsets: ['latin'] })
const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };
  return (
    <div className={poppins.className}>
      {/* Header */}
      <header className=" text-white relative">

        <div className="container mx-auto flex justify-between items-center bg-gray-900  py-4 top-0 fixed inset-x-0 z-30">
         

<nav className="md:flex md:justify-between">
  <div className="flex items-center justify-between">
    
    
    <div className="md:hidden">
        <button
          id="mobile-menu-button"
          className={`mobile-menu-button ${mobileMenuActive ? 'active' : ''}`}
          onClick={toggleMobileMenu}>
          {/* ... (svg icon) */}
          {mobileMenuActive ? ( <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>):(
          <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
          )}
         
        </button>
      </div>
  </div>
  <ul
    id="desktop-menu"
    className="hidden md:flex space-x-6 justify-evenly mx-auto gap-x-96">
   <li className='flex justify-center flex-row space-x-5 items-center'>
   <li><a href="#home" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:">Home</a></li>
    <li><a href="#about" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:">About</a></li>
    <li><a href="#services" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:">Services</a></li>
    <li><a href="#contact" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:">Contact</a></li>
    <li><a href="/dashboard" className="hover:bg-gray-700 rounded-lg py-2 px-3 hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:opacity-70">Dashboard</a></li>
   </li>
   <a className="=hover:bg-gray-700 rounded-lg py-2 px-3 hover: hover:duration-300 hover:ease-in-out  text-white flex justify-center items-center mx-auto  hover:scale-105 hover:opacity-70 hover:bg-gray-700"  href='/dashboard'>
   Get Started 
    <ArrowRight className="w-4 h-4 float-right" />
    </a>
   
  
  </ul>
 {mobileMenuActive && (
   <ul
   id="mobile-menu"
   className={`mobile-menu gap-y-5 py-5 flex flex-col ${mobileMenuActive ? 'active' : ''}`}>
   <li><a href="#home"  className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:" onClick={toggleMobileMenu}>Home</a></li>
   <li><a href="#about" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:" onClick={toggleMobileMenu}>About</a></li>
   <li><a href="#services" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:" onClick={toggleMobileMenu}>Services</a></li>
   <li><a href="#contact" className="hover:bg-gray-700 rounded-lg py-2 px-4 hover: hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:" onClick={toggleMobileMenu}>Contact</a></li>
   <a className="text-gray-800 text-xl  px-10 py-3  flex justify-self-center items-center mx-auto w-full mt-2 justify-center  hover:duration-300 hover:ease-in-out bg-gray-200 rounded-lg"  href='/dashboard'>
  Get Started
   <ArrowRight className="w-4 h-4 float-right" />
   </a>
   
 </ul>
 )}
</nav>
        </div>
   
      <div className="h-24"></div>
          {/* <div >
         <h1 className="text-5xl flex md:justify-start justify-center md:mx-2 mx-auto py-3 px-3 bg-gradient-to-r from-pink-900 via-gray-800 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight">
            Ai Assistant.
          </h1>
      </div> */}
      </header>
    

      {/* Hero Section */}
      <section className=" sm:py-20 py-7 w-full" id="home">
        <div className="container mx-auto text-center">
        <div >
           <h1 className="sm:text-5xl text-4xl bg-gradient-to-r from-rose-900 via-blue-500 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight"
           
           >
            Your Assistant.
          </h1>
          </div>
         
          <p className="mt-6 text-xl">Unlock the potential of your online presence with Our
            Ai Assistant
          .</p>
          <div className="mt-4"></div>
          <h2 className="text-center text-gray-800 text-xl font-semibold">
          <TypewriterEffect />
          </h2>
          <Link className="text-gray-800 text-xl font-semibold"  href='/dashboard'>
      <Button className="mt-8 px-10 py-6 hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:">Get Started
            <ArrowRight className="w-4 h-4 float-right" /></Button>
          </Link>
          
        </div>
      </section>

     { /* Generate  a cover letter */}
      <section className="py-16" id="generate">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-10 sm:flex-row flex-col-reverse py-4 sm:py-1 gap-2">
            <div className="sm:w-1/2 w-full"  
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <h2 className="text-3xl font-semibold">Generate a cover letter</h2>
              <p className="mt-4 ">
                Generate a cover letter with a single click. Fill in the details and get your cover letter in seconds.
                .</p>
                  <Link className="text-gray-800 text-xl font-semibold"  href='/CoverLetter'>
      <Button className="mt-8 px-10 py-6  hover:duration-300 hover:ease-in-out hover:scale-105 hover:opacity-70 hover:"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      > Generate Now
            <ArrowRight className="w-4 h-4 float-right" /></Button>
          </Link>
            </div>
            <div className="sm:w-1/2 w-full"
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <Image src={about} width={958} height={765} alt="About Us" className="rounded-lg" />
            </div>
          </div>
        </div>
        </section>
      

      {/* About Section */}
      <section className=" py-16" id="about">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-10 sm:flex-row flex-col gap-2">
            <div className="sm:w-1/2 w-full"
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <Image src={about} width={958} height={765} alt="About Us" className="rounded-lg" />
            </div>
            <div className="sm:w-1/2 w-full "
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <h2 className="text-3xl font-semibold">About Ai Assistance</h2>
              <p className="mt-4 ">
                We are a team of web developers working to create the best web solutions for you. We love what we do and we love building things that people love to use.
                .</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10 sm:flex-row-reverse flex-col gap-2">
            <div className="sm:w-1/2 w-full"
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <Image src={about2} width={958} height={765} alt="About Us" className="rounded-lg" />
            </div>
            <div className="sm:w-1/2 w-full  mt-4"
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <h2 className="text-3xl font-semibold">Increase Productivity</h2>
              <p className="mt-4 ">
                Productivity is the key to success. We help you increase your productivity by automating your work.</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10 sm:flex-row flex-col gap-2">
            <div className="sm:w-1/2 w-full"
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <Image src={about3} width={958} height={765} alt="About Us" className="rounded-lg" />
            </div>
            <div className="sm:w-1/2 w-full "
           data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
              <h2 className="text-3xl font-semibold">share with friends Easily</h2>
              <p className="mt-4 ">
                Share your notes with your friends and family with a single click, no need to copy and paste, just share the link and you are done
                .</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16" id="services">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 overflow-hidden">
            <div className="bg-gray-600  cursor-pointer text-white p-6 rounded-lg shadow-md hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:bg-gray-800 " 
            data-aos="zoom-out"
            >
              <h3 className="text-xl font-semibold">AutoCompletions</h3>
              <p className="mt-4 ">
                Our Ai Autocompletes sentences for you so you can focus on what matters.
                <ArrowRight className="w-4 h-4 float-right" />
                </p>
            </div>
            <div className="bg-gray-600  cursor-pointer text-white p-6 rounded-lg shadow-md hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:bg-gray-800 " 
            data-aos="zoom-out"
            >
              <h3 className="text-xl font-semibold">
                Note Taking

              </h3>
              <p className="mt-4 ">
                Nice and easy to use editor to take notes and organize your thoughts.
                <ArrowRight className="w-4 h-4 float-right" />
                </p>
            </div>
            <div className="bg-gray-600  cursor-pointer text-white p-6 rounded-lg shadow-md hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:bg-gray-800 " 
            data-aos="zoom-out"
            >
              <h3 className="text-xl font-semibold">
                Download Notes as PDF
              </h3>
              <p className="mt-4 ">
                Download your notes as PDF with a single click.
                 <ArrowRight className="w-4 h-4 float-right" />
                </p>
            </div>
            <div className="bg-gray-600  cursor-pointer text-white p-6 rounded-lg shadow-md hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:bg-gray-800 " 
            data-aos="zoom-out"
            >
              <h3 className="text-xl font-semibold">
                Share Notes
              </h3>
              <p className="mt-4 ">
                Share your notes with your friends and family.
                <ArrowRight className="w-4 h-4 float-right" />
                </p>
            </div>
            <div className="bg-gray-600  cursor-pointer text-white p-6 rounded-lg shadow-md hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:bg-gray-800 " 
            data-aos="zoom-out"
            >
            <a href="/InternshipR">
              <h3 className="text-xl font-semibold">
               Internship Reports 
              </h3>
              <p className="mt-4 ">
                Ai Assistant helps you write your internship reports.
                
                <ArrowRight className="w-4 h-4 float-right" />
              
                </p>
                </a>
            </div>
            <div className="bg-gray-600  cursor-pointer text-white p-6 rounded-lg shadow-md hover: hover:duration-300 hover:ease-in-out hover:scale-110 hover:bg-gray-800 " 
            data-aos="zoom-out"
            >
            <a href="/CoverLetter">
              <h3 className="text-xl font-semibold">
                Cover Letter
              </h3>
              <p className="mt-4 ">
                Ai Assistant helps you write your cover letters.
                
                <ArrowRight className="w-4 h-4 float-right" />
              
                </p>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 overflow-hidden" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold"
          data-aos="zoom-out-left"
          >Contact Us</h2>
          <p className="mt-4 text-gray-300"
          data-aos="zoom-out-left"
          >Have questions or ready to get started? Contact us today!</p>
            <Button className="mt-8" variant={'secondary'}
            data-aos="zoom-out-left"
            >
                Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8"
  
      >
        <div className="container mx-auto text-center"
        
        >
          &copy; 2023 Ai Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
