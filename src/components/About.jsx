// import React from 'react'
// import { assets } from '../assets/assets'
// import {motion} from 'framer-motion'
// const About = () => {
//     return (
//         <motion.div 
//         initial={{opacity:0,x:200}}
//       transition={{duration:1}}
//       whileInView={{opacity:1,x:0}}
//       viewport={{once:true}}
//         className='flex flex-col items-center justify-center
//      container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden
//       ' id='About'>
//             <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4
//          decoration-1 under font-light'>MITTAL FABRICS</span></h1>
//             {/* <p>Rooted In Tradition, Designed For Today</p> */}
//             <p className='text-gray-500 max-w-80 text-center mb-8'>Our vision is to make homes beautiful in every street,
//                 in every city, of every country in the world.</p>
//             <div className='flex flex-col md:flex-row items-center md:items-start
//          md:gap-20'>
//                 <img src={assets.mflogo} alt="" className='w-full sm:' />
//                 <div className='flex flex-col items-center md:items-start
//              mt-10 text-gray-600'>
//                     <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
//                         <div>
//                             <p className='text-4xl font-medium text-gray-800'>50+</p>
//                             <p>Years Experience</p>
//                         </div>
//                         <div>
//                             <p className='text-4xl font-medium text-gray-800'>100%</p>
//                             <p>Quality Assured</p>
//                         </div>
//                         <div>
//                             <p className='text-4xl font-medium text-gray-800'>50K+</p>
//                             <p>Happy Customers</p>
//                         </div>
//                         <div>
//                             <p className='text-4xl font-medium text-gray-800'>100+</p>
//                             <p>PREMIUM BEDDINGS</p>
//                         </div>

//                     </div>
//                     <p className='my-10 max-w-lg'>For over two decades, Mittal Fabrics has been synonymous with excellence in home textiles. Our journey began with a simple vision: to bring luxury and comfort to every home.

// We source the finest materials from around the world, working with skilled artisans who share our commitment to quality and craftsmanship.

// Today, we're proud to serve thousands of families across the country, helping them create spaces that truly feel like home.

// </p>
//                         <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>

//                 </div>

//             </div>

//         </motion.div>
//     )
// }

// export default About

import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '50+', label: 'Years Experience' },
    { value: '100%', label: 'Quality Assured' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '100+', label: 'Premium Beddings' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='bg-gradient-to-br from-[#f3f4f6] via-white to-[#f3f4f6] py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4
         decoration-1 under font-light'>MITTAL FABRICS</span></h1>
        <p className='text-gray-600 text-lg'>
          Our vision is to make homes beautiful in every street, in every city, of every country in the world.
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-12'>
        {/* Image */}
        <motion.img
          src={assets.mflogo}
          alt='Mittal Fabrics Logo'
          className='w-full max-w-sm object-contain drop-shadow-xl'
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Content */}
        <div className='flex-1 text-gray-700'>
          {/* Stats */}
          <div className='grid grid-cols-2 gap-6 mb-10'>
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition'
              >
                <p className='text-3xl font-bold text-blue-600'>{item.value}</p>
                <p className='text-gray-600 mt-2 text-sm'>{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* About Text */}
          <p className='text-md leading-relaxed mb-10'>
            For over two decades, <span className='font-semibold text-gray-900'>Mittal Fabrics</span> has been
            synonymous with excellence in home textiles. Our journey began with a simple vision:
            to bring luxury and comfort to every home.
            <br /><br />
            We source the finest materials globally, working with skilled artisans dedicated to
            quality and craftsmanship. Today, we proudly serve thousands of families across the
            country, creating spaces that truly feel like home.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow-md transition'
          >
            Learn more
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
