// import React from 'react'
// import {motion} from 'framer-motion'
// import { assets, testimonialsData } from '../assets/assets'
// const Testimonials = () => {
//   return (
//     <motion.div 
//     initial={{opacity:0,x:100}}
//       transition={{duration:1}}
//       whileInView={{opacity:1,x:0}}
//       viewport={{once:true}}
//     className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
//      id='Testimonials'>
//       <h1 className='text-2xl sm:text-4xl font-bold mb-2 
//        text-center'>Customer <span className='underline underline-offset-4
//         decoration-1 under font-light'>Testimonials</span></h1>
//       <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Reviews from our valuable customers</p>
//       <div className='flex flex-wrap justify-center gap-8'>
//         {testimonialsData.map((testimonial,index)=>(
//             <div key={index} className='max-w-[340px] border shadow-lg
//              rounded px-8 py-12 text-center'>
//                 <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
//                 <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
//                 <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
//                 <div className='flex justify-center gap-1 text-red-500 mb-4'>
//                     {Array.from({length: testimonial.rating}, (item,index)=>(
//                         <img key={index} src={assets.star_icon} alt="" />
//                     ))}
//                 </div>
//                 <p className='text-gray-600'>{testimonial.text}</p>

//             </div>
//         ))}

//       </div>
//     </motion.div>
//   )
// }

// export default Testimonials

import React from 'react';
import { motion } from 'framer-motion';
import { assets, testimonialsData } from '../assets/assets';

// Card animation variants
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-16 px-6 lg:px-32 w-full bg-gray-50 rounded-xl"
      id="Testimonials"
    >
      {/* Section Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center text-gray-900 font-sans">
        Customer{' '}
        <span className="underline underline-offset-8 decoration-2 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto text-base sm:text-lg font-sans">
        What our customers are saying about us
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="max-w-sm w-full bg-white border border-gray-200 shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition duration-300"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Avatar or Initials */}
            {testimonial.image ? (
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-200 object-cover shadow-sm"
                src={testimonial.image}
                alt={testimonial.alt || testimonial.name}
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 text-xl font-semibold text-gray-600 shadow-sm">
                {testimonial.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </div>
            )}

            {/* Name and Title */}
            <h2 className="text-xl font-semibold text-gray-800 font-sans">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 text-sm mb-3">{testimonial.title}</p>

            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.img
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-5 h-5"
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
