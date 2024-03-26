import React, { useState } from 'react';
import { AiOutlineClose} from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/logo.png'
import { FaPhoneSquareAlt } from "react-icons/fa";




const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

  const triggerNavItem = (target) => {
    // Implement your logic here for handling navigation item clicks
    console.log(`Navigating to ${target}`);
  };

  const triggerMobileNavItem = (target) => {
    // Close the mobile menu after clicking an item
    setMobileMenu(false);
  
    // Scroll to the target section
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
         
     <div className="relative">
        {/* Navbar */}
        <div className="w-full z-50 shadow-2xl lg:py-0 py-5 top-0 absolute sm:ps-0 ps-6 sm:pe-0 pe-6 bg-gradient-to-r from-[#9926f0] to-[#d122e3]">
          <div className="container mx-auto flex items-center justify-between lg:justify-around">
            <div>
              <a href="/">
                 <img src={logo} href='#' />

              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

              <li className='p-6 group relative'>
             <a href='#home' className='text-white font-semibold'>
                 Home
             </a>
         </li>
       
         <li className='p-6 group relative'>
             <a href='#services' className='text-[#ffffffb2] font-semibold group-hover:text-white'>
                 Services
             </a>
         </li>

         <li className='p-6 group relative'>
             <a href='#testimonials' className='text-[#ffffffb2] font-semibold group-hover:text-white'>
                 Testimonial
             </a>
         </li>

         <li className='p-6 group relative'>
             <a href='#Faq' className='text-[#ffffffb2] font-semibold group-hover:text-white'>
                 Faq
             </a>
         </li>

         <li className='p-6 group relative'>
             <a href='#portfolio' className='text-[#ffffffb2] font-semibold group-hover:text-white'>
                 Portfolio
             </a>
         </li>

         
         <li className='p-6 group relative'>
             <a href='#Form' className='text-[#ffffffb2] font-semibold group-hover:text-white'>
                 Contact
             </a>
         </li>

         <button className='flex group justify-center items-center text-black bg-white hover:bg-gradient-to-r from-[#9926f0] to-[#d122e3] hover:outline hover:outline-1 hover:outline-white hover:text-white w-[190px] rounded-full font-bold my-5 h-12'>
  <span className="ms-4">+1 728365413</span>
  <FaPhoneSquareAlt className='text-4xl ms-3 fill-[#9926f0] group-hover:fill-white' />
</button>



            </ul>
          </div>

              <div className="block lg:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu  className="text-3xl text-white" />
                ) : (
                  <IoMdMenu  className="text-3xl text-white" />
                )}
              </button>
            </div>
      </div>
      </div>
      </div>
   

      {/* Mobile Menu */}
       {mobileMenu && (
  <div className="lg:hidden fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
    <div className="absolute right-0 min-h-screen w-3/5 py-4 px-8 shadow md:w-1/3 bg-gradient-to-r from-[#9926f0] to-[#d122e3] z-50">
      <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
        <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
      </button>
      <ul className="mt-8 flex flex-col space-y-4">

        <MobileNavItem onClick={() => triggerMobileNavItem('#home')}> HOME</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#services')}> SERVICES</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#testimonials')}> TESTIMONIAL</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#Faq')}> FAQ</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#portfolio')}> PORTFOLIO</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#Form')}> CONTACT</MobileNavItem>

      </ul>


    </div>
  </div>
)}


    </>
  );
};


const NavItem = ({ children, onClick }) => {
  return (
    <li className="group pl-6">
      <span onClick={onClick} className="cursor-pointer pt-0.5 font-semibold uppercase text-black">
        {children}
      </span>
      
    </li>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
          </li>
  );
};

export default Navbar;