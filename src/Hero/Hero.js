import React from 'react'
import image from '../assets/hero.png'
import { BsArrowRightCircleFill } from "react-icons/bs";


const Hero = () => {
  return (
    <>

  <div className='relative w-full h-[950px] pt-36 bg-gradient-to-r from-[#9926f0] to-[#d122e3] py-16 px-4' id='#home'>
      <div className='max-w-[1140px] mx-auto grid md:grid-cols-2'>
        
       <div className='flex flex-col justify-center pr-8'>
          
       <h1 className='md:text-6xl text-white text-4xl font-bold py-2'>
        Hey!, I'm Patrick
      </h1>
      <p className='leading-9 md:text-2xl text-xl mt-6 text-white'>
        This is a multi-purpose responsive layout created with Bootstrap v5. (Here you can place your description text)
      </p>

      <button className='flex group justify-center items-center mt-10 text-black bg-white hover:bg-gradient-to-r from-[#9926f0] to-[#d122e3] hover:outline hover:outline-1 hover:outline-white hover:text-white w-[180px] rounded-full font-bold my-6 py-3'>
     <span className="ms-4">Get in Touch</span>
     <BsArrowRightCircleFill className='text-4xl ms-3 fill-[#9926f0] group-hover:fill-white' />
      </button>

    </div>

    <img src={image} className='lg:w-[500px] sm:w-96  md:ms-auto  my-4' />

     </div>



  {/* Wavy bottom shape outside the container */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className='absolute bottom-0 left-0 w-full'
  >
    <path
      fill='#ffffff'
      fill-opacity='1'
      d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
    ></path>
  </svg>

</div>

    

    </>
  )
}

export default Hero
