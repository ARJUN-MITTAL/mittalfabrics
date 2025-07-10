// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900
//      w-full overflow-hidden'id='Footer'>
//         <div className='container mx-auto flex flex-col md:flex-row
//          justify-between items-start'>
//             <div className='w-full md:w-1/3 mb-8 md:mb-0'>
//                 <img src={assets.mflo} alt="" />
//                 <p className='text-gray-400 mt-4'>Mittal Fabrics is a bedsheet manufacturing company specializing in high-quality, stylish, and durable home textiles. With a strong presence in the textile industry, 
//                     the company is known for its premium fabrics, intricate designs, and affordability. </p>
//             </div>
//             <div className='w-full md:w-1/5 mb-8 md:mb-0'>
//                 <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
//                 <ul className='flex flex-col gap-2 text-gray-400'>
//                     <a href="#Header" className='hover:text-white'>Home</a>
//                     <a href="#About" className='hover:text-white'>About Us</a>
//                     <a href="#Contact" className='hover:text-white'>Contact Us</a>
//                     <a href="#" className='hover:text-white'>Privacy policy</a>
//                 </ul>
//             </div>
//             <div className='w-full md:w-1/3'>
//             <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
//             <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, 
//                 and resources, sent to your inbox weekly.</p>
//                 <div>
//                     <input type="email" placeholder='Enter your email' 
//                     className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700
//                      focus:outline-none w-full md:w-auto' />
//                      <button className='py-2 px-4 rounded bg-blue-500 text-white'>
//                         Subscribe</button>
//                 </div>
//             </div>
//         </div>
//         <div className='border-t border-gray-700 py-4 mt-10 text-center
//          text-gray-500'>
//             Copyright 2025 © MittalFabrics. All Right Reserved.
//         </div>
      
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="pt-12 px-4 md:px-20 lg:px-32 bg-gray-900 text-gray-400 w-full overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo + Description */}
        <div className="w-full md:w-1/3">
          <img src="/milo.jpg" alt="" className="w-28 h-auto" />
          <p className="leading-relaxed text-sm md:text-base">
            Mittal Fabrics is a bedsheet manufacturing company specializing in high-quality,
            stylish, and durable home textiles. Known for premium fabrics, intricate designs,
            and affordability.
          </p>
        </div>

        {/* Navigation */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <a href="#Header" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="mb-4 text-sm md:text-base">
            Get the latest updates, articles, and resources delivered to your inbox weekly.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 p-3 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2025 Mittal Fabrics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
