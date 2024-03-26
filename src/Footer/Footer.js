import React from 'react'
import {FaInstagram,FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter,AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelopeOpen,FaMapLocationDot  } from "react-icons/fa6";



const Footer = () => {
  return (
    <>

     <div className='py-14 bg-[#151414] '>
     
     {/* Mobile number And Icons */}
     <div class="md:flex lg:flex mx-auto max-w-[1100px]">
     <div class="md:w-1/2 lg:w-1/3">
        <div class="flex items-center">
            <div class="mr-4">
            <FiPhoneCall className='text-[#9926f0] md:text-6xl text-4xl' />       
            </div>
            <div>
                <a href="#" class="text-xl text-white font-semibold hover:text-[#9926f0]">+1 728365413</a>
                <p class="text-gray-500">Mon-Fri 9am-6pm</p>
            </div>
        </div>
    </div>


    <div class="md:w-1/2 lg:w-1/3">
        <div class="flex items-center">
            <div class="mr-4">
            <FaRegEnvelopeOpen className='text-[#9926f0] md:text-6xl text-4xl' />
                
            </div>
            <div>
                <a href="#" class="text-xl text-white font-semibold hover:text-[#9926f0]">info@company.com</a>
                <p class="text-gray-500">Online support</p>
            </div>
        </div>
    </div>



    <div class="md:w-1/2 lg:w-1/3">
        <div class="flex items-center">
            <div class="mr-4">
            <FaMapLocationDot className='text-[#9926f0] md:text-6xl text-4xl' />
                
            </div>
            <div>
                <a href="#" class="text-xl text-white font-semibold hover:text-[#9926f0]">New York, USA</a>
                <p class="text-gray-500">NY 10012, US</p>
            </div>
        </div>
    </div>
</div>



        {/* Contact with us on Social media Icons */}
     <div className='md:flex items-center py-6 mt-7 bg-[#212529c5] md:justify-around text-center'>
        <div className='text-white'>connect with us on social media</div>
             <div className='flex justify-center text-white space-x-5'>
                   <a href='#'>
                   <FaFacebook className='hover:text-[#9926f0] sm:text-3xl text-2xl' />
                   </a>
                   <a href='#'>
                   <AiOutlineTwitter className='hover:text-[#9926f0] sm:text-3xl text-2xl' />
                   </a>
                   <a href='#'>
                   <AiFillGithub className='hover:text-[#9926f0] sm:text-3xl text-2xl' />
                   </a>
                   <a href='#'>
                   <AiFillLinkedin className='hover:text-[#9926f0] sm:text-3xl text-2xl' />
                   </a>
                   <a href='#'>
                   <FaInstagram className='hover:text-[#9926f0] sm:text-3xl text-2xl' />
                   </a>
                 </div>
            </div>

     {/* Company Name Products And useFull links etc */}

        <div className='max-w-[1240px] mx-auto mt-7 px-4 grid lg:grid-cols-3 gap-x-12 text-gray-300'>
         <div className='mt-11'>
                <h1 className='w-full text-2xl font-semibold text-[#FFFFFF]'>Campany Name</h1>
                <p className='py-6 text-justify leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex obcaecati blanditiis reprehenderit ab mollitia voluptatem consectetur?</p>
              </div>
            <div className='lg:col-span-2 grid md:grid-cols-3 ms-16 justify-around mt-9'>
                 <div>
               <h6 className='text-[#FFFFFF] text-xl font-semibold'>Products</h6>
               <ul>
               <a href='#'>
                <li className='py-2 font-semibold mt-6 hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
               </ul>
            </div>
            <div>

                <h6 className='text-[#FFFFFF] text-xl font-semibold'>Useful Links</h6>
                <ul>
                <a href='#'>
                <li className='py-2 font-semibold mt-6 hover:text-[#9926f0]'>Your Account</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Become an Affiliate</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>create an account</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Help</li>
                </a>
               </ul>
                </div>


            <div>
                <h6 className='text-[#FFFFFF] text-xl font-semibold'>Contact Us</h6>
                <ul>
                <a href='#'>
                <li className='py-2 font-semibold mt-6 hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
                <a href='#'>
                <li className='py-2 font-semibold hover:text-[#9926f0]'>Lorem ipsum</li>
                </a>
               </ul>
                </div>

                    </div>
                    </div>

                    </div>

         {/* Footer  */}
        <footer class="text-gray-600 bg-black py-10"> 
        <div class="container mx-auto text-center md:flex-row items-center justify-between">
          <p class="text-base leading-10">© Copyright 2021 <span className='text-white'>Company</span> | Created by <span className='text-white'>Muriungi</span> <br></br> Distributed by <span className='text-white'>ThemeWagon</span></p>
       </div>
       </footer>

    </>
  )
}

export default Footer
