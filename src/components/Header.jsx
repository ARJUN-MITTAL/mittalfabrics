// import React from 'react'
// import Navbar from './Navbar'
// import { motion } from "framer-motion"

// const Header = () => {
//   return (
//     <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full 
//     overflow-hidden'style={{backgroundImage: "url('/banner2.jpg')"}} id='Header'>
//       <Navbar/>
//       <motion.div
//       initial={{opacity:0,y:100}}
//       transition={{duration:1.5}}
//       whileInView={{opacity:1,y:0}}
//       viewport={{once:true}}
//       className='container text-center mx-auto py-4 px-6 md:px-20
//         lg:px-32 text-white'>
//         <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
//         max-w-3xl front-semibold pt-20'>Explore the latest collection of bedsheets</h2>
//         <div className='space-x-6 mt-16 '>
//             <a href="#Projects" className='border border-white px-8 py-3
//             rounded'>Collection</a>
//             <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
//         </div>
//       </motion.div>
//       </div>
      
//   )
// }

// export default Header

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const images = [
  "/banner2.jpg",
  "/banner4.jpg",
  "/banner5.jpg",
  "/banner6.jpg",
  "/banner7.jpg",
  "/banner8.jpg",
  "/banner9.jpg",
  "/banner10.jpg",
  "/banner1.jpg",
  "/banner3.jpg" // Add as many as you like
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
        >
          Explore the latest collection of bedsheets
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded"
          >
            Collection
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 px-8 py-3 rounded"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
