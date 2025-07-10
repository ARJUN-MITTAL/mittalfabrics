// import React, { useEffect, useState } from 'react'
// import { assets, projectsData } from '../assets/assets'
// import {motion} from 'framer-motion'
// const Projects = () => {
//     const[currentIndex, setCurrentIndex]=useState(0);
//     const[cardsToShow, setCardsToShow]=useState(1);

//     useEffect(()=>{
//         const updateCardsToShow=()=>{
//             if(window.innerWidth>=1024){
//                 setCardsToShow(projectsData.length)
//             }else{
//                 setCardsToShow(1)
//             }
//         };
//             updateCardsToShow();

//             window.addEventListener('resize',updateCardsToShow);
//             return ()=> window.removeEventListener('resize',updateCardsToShow);

        
//     },[])

//     const nextProject=()=>{
//         setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)
//     }
//     const prevProject=()=>{
//         setCurrentIndex((prevIndex)=>prevIndex===0?projectsData.length-1: prevIndex-1)
//     }
//   return (
//     <motion.div
//     initial={{opacity:0,x:-200}}
//       transition={{duration:1}}
//       whileInView={{opacity:1,x:0}}
//       viewport={{once:true}}
//     className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 
//       my-20 w-full overflow-hidden' id='Projects'>
//       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>LATEST COLLECTION
//          <span className='underline underline-offset-4 decoration-1 under font-light'>TRENDING</span></h1>
//       <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Becoming the ultimate choice for soft furnishing solutions across the globe.</p>
//       {/* slider buttons */}
//       <div className='flex justify-end items-center mb-8'> 
//         <button onClick={prevProject}
//          className='p-3 bg-gray-200 rounded mr-2 'aria-label='Previous Projects'>
//             <img src={assets.left_arrow} alt="Previous" />
//         </button>
//         <button onClick={nextProject}
//         className='p-3 bg-gray-200 rounded mr-2 'aria-label='Next Projects'>
//             <img src={assets.right_arrow} alt="Next" />
//         </button>
//       </div>
//       {/* project slider container */}
//       <div className='overflow-hidden'>
//         <div className='flex gap-8 transition-transform duration-500
//          ease-in-out' style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
//             {projectsData.map((project,index)=>(
//                 <div key={index} className='relative flex-shrink-0
//                  w-full sm:w-1/4'>
//                     <img src={project.image}alt={project.title} className='w-full h-auto
//                      mb-14'/>
//                     <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
//                         <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
//                         <h2 className='text-xl font-semibold text-gray-800'>
//                             {project.title}</h2>
//                             <p className='text-gray-500 text-sm'>
//                                 {project.price} <span className='px-1'>|</span> {project.location}
//                             </p>

//                         </div>

//                     </div>
//                 </div>
//             ))}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Projects


import React from 'react';
import { motion } from 'framer-motion';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const half = Math.ceil(projectsData.length / 2);
  const row1 = projectsData.slice(0, half);
  const row2 = projectsData.slice(half);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-4 pt-20 px-4 md:px-16 lg:px-24 my-20 w-full'
      id='Projects'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        LATEST COLLECTION{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>
          TRENDING
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Becoming the ultimate choice for soft furnishing solutions across the globe.
      </p>

      {/* Scrollable rows */}
      <div className='overflow-x-auto scrollbar-hide space-y-12'>
        {[row1, row2].map((row, rowIndex) => (
          <div key={rowIndex} className='flex gap-6 w-max px-2'>
            {row.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='flex-shrink-0 w-[24vw] max-w-[300px] group'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-64 object-cover mb-4 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl'
                  style={{ borderRadius: 0 }}
                />
                <div className='bg-white px-4 py-3 shadow-md transition duration-300 group-hover:shadow-lg'>
                  <h2 className='text-lg font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
