import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMeny, setShowMobileMenu]=useState(false)
useEffect(()=>{
if(showMobileMeny){
  document.body.style.overflow='hidden'
}else{
  document.body.style.overflow='auto'
}
return()=>{
  document.body.style.overflow='auto'
}

},[showMobileMeny])




  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 
       md:px-20 lg:px-32'>
      
      <img src="/milo.jpg" alt="" className="w-28 h-auto" />

        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer
            hover:text-black'>HOME</a>
            <a href="#Projects" className='cursor-pointer
            hover:text-black'>BEDDING</a>
            <a href="#About" className='cursor-pointer
            hover:text-black'>ABOUT</a>
            <a href="#Testimonials" className='cursor-pointer
            hover:text-black'>TESTIMONIALS</a>
            <a href="#Contact" className='cursor-pointer
            hover:text-black'>CONTACT</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img onClick={()=> setShowMobileMenu(true)} src= {assets.menu_icon} className='md:hidden w-7 cursor-pointer'  alt="" />
      </div>
      {/* ----------------------mobile-menu--------- */}
      <div className={`md:hidden ${showMobileMeny ? 'fixed w-full': 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0
      overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 ' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
        font-medium '>
          <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>HOME</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>BEDDING</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>ABOUT</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Testimonils" className='px-4 py-2 rounded-full inline-block'>PREMIUM</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>CONTACT</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar


