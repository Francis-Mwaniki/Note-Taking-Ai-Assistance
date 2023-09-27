import Image from 'next/image';
import React from 'react';
import about from '@/public/about.png';
import about2 from '@/public/about2.png';
import TypewriterEffect from './TypeWriterEffect';
import Link from 'next/link'
import { Quicksand, DM_Sans, Inter, Poppins} from 'next/font/google'
import { Button } from './ui/button';
import { ArrowBigRight, ArrowBigRightIcon, ArrowRight } from 'lucide-react';
const dm_sans= DM_Sans({ subsets: ['latin'] })
const poppins= Poppins({
  subsets: ['latin'],
  weight: '400'
})
const inter= Inter({ subsets: ['latin'] })
const LandingPage = () => {
  return (
    <div className={poppins.className}>
      {/* Header */}
      <header className=" text-white relative">

        <div className="container mx-auto flex justify-between items-center bg-gray-900  py-6 top-0 fixed inset-x-0">
         
          <nav>
            <ul className="flex space-x-6 sm:justify-start justify-center px-2">
              <li><a href="#home" className="hover:text-blue-300 sm:text-3xl text-lg">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300 sm:text-3xl text-lg">About</a></li>
              <li><a href="#services" className="hover:text-blue-300 sm:text-3xl text-lg">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-300 sm:text-3xl text-lg">Contact</a></li>
            </ul>
          </nav>
        </div>
   
      <div className="h-24"></div>
          <div className={inter.className}>
         <h1 className="text-5xl py-3 px-3 bg-gradient-to-r from-pink-900 via-gray-800 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight">
            Ai Assistant.
          </h1>
      </div>
      </header>
    

      {/* Hero Section */}
      <section className=" sm:py-20 py-7 w-full" id="home">
        <div className="container mx-auto text-center">
        <div className={inter.className}>
           <h1 className="text-5xl bg-gradient-to-r from-rose-900 via-blue-500 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight">
                Let us Automate your work with Ai Assistant.
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
      <Button className="mt-8 px-10 py-5">Get Started
            <ArrowRight className="ml-2" size={24} /></Button>
          </Link>
          
        </div>
      </section>

      {/* About Section */}
      <section className=" py-16" id="about">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-10 sm:flex-row flex-col gap-2">
            <div className="sm:w-1/2 w-full">
              <Image src={about} width={958} height={765} alt="About Us" className="rounded-lg" />
            </div>
            <div className="sm:w-1/2 w-full ">
              <h2 className="text-3xl font-semibold">About Ai Assistance</h2>
              <p className="mt-4 text-gray-600">
                We are a team of web developers working to create the best web solutions for you. We love what we do and we love building things that people love to use.
                .</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10 sm:flex-row-reverse flex-col gap-2">
            <div className="sm:w-1/2 w-full">
              <Image src={about2} width={958} height={765} alt="About Us" className="rounded-lg" />
            </div>
            <div className="sm:w-1/2 w-full  mt-4">
              <h2 className="text-3xl font-semibold">Increase Productivity</h2>
              <p className="mt-4 text-gray-600">
                Productivity is the key to success. We help you increase your productivity by automating your work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16" id="services">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">AutoCompletions</h3>
              <p className="mt-4 text-gray-600">
                Our Ai Autocompletes sentences for you so you can focus on what matters.
                </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Note Taking

              </h3>
              <p className="mt-4 text-gray-600">
                Nice and easy to use editor to take notes and organize your thoughts.
                .</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Download Notes as PDF
              </h3>
              <p className="mt-4 text-gray-600">
                Download your notes as PDF with a single click.
                .</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Share Notes
              </h3>
              <p className="mt-4 text-gray-600">
                Share your notes with your friends and family.
                .</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold">Contact Us</h2>
          <p className="mt-4 text-gray-300">Have questions or ready to get started? Contact us today!</p>
            <Button className="mt-8" variant={'secondary'}>
                Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          &copy; 2023 Ai Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
