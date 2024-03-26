import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaPaperPlane,FaCode,FaCloudUploadAlt } from "react-icons/fa";
import image1 from '../assets/service-1.png'
import image2 from '../assets/service-2.png'
import image3 from '../assets/service-3.png'





const Servicess = () => {
  return (
    <>

    <div className='w-full mt-10 px-4' id='services'>
    <h1 className='text-center md:text-7xl text-5xl font-bold text-[#212529] underline decoration-wavy underline-offset-8 decoration-[#9926f0]'>Our Services</h1>
      <div className='w-full pt-36 py-16 px-4'>
      <div className='max-w-[1140px] mx-auto grid sm:grid-cols-2'>
      <div className='flex flex-col justify-center pr-8 sm:border-e border-gray-300'>
          
      <p className='text-center text-[#212529] sm:text-3xl font-bold text-2xl mt-6'>
      Our Services Range From Initial Design To Deployment Anywhere Anytime
      </p>
    </div>
     <p className='mt-6 text-gray-600 sm:ms-8 pr-8'>Lorem ipsum dolor sit amet consectetur architecto magni, dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. Tempore ducimus molestiae in dolore enim.</p>
     </div>


     {/* No 1 Marketing */}

      <div className='max-w-[1140px] mx-auto w-full mt-20 grid md:grid-cols-2'>
       <div className='flex flex-col justify-center'>
       <FaPaperPlane className='text-5xl fill-[#9926f0]' />
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#9926f0] to-[#d122e3] font-bold py-2 font-serif'>Marketing</h1>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem, doloremque autem quibusdam blanditiis harum alias hic accusantium maxime atque ratione magni repellat?</p>
          <button className='flex group justify-center items-center mt-8 text-black bg-white hover:bg-gradient-to-r from-[#9926f0] to-[#d122e3] outline outline-1 outline-[#9926f0] hover:text-white w-[180px] rounded-full font-bold my-4 py-2'>
            <span className="ms-4">Learn more</span>
            <BsArrowRightCircleFill className='text-4xl ms-3 fill-[#9926f0] group-hover:fill-white' />
            </button>
            </div>
            <img src={image1} className='lg:w-[500px] sm:96 md:ms-auto my-4' />
            </div>




    {/* No 2 Web development */}

     <div className='max-w-[1140px] mx-auto mt-10 w-full grid md:grid-cols-2'>
     <img src={image2} className='lg:w-[500px] sm:96 md:me-auto my-4' />
        <div className='flex flex-col justify-center'>
        <FaCode  className='text-5xl fill-[#9926f0]' />
           <h1 className='sm:text-3xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#9926f0] to-[#d122e3] font-bold py-2 font-serif'>Web Development</h1>  
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem, doloremque autem quibusdam blanditiis harum alias hic accusantium maxime atque ratione magni repellat?</p>
           <button className='flex group justify-center items-center mt-8 text-black bg-white hover:bg-gradient-to-r from-[#9926f0] to-[#d122e3] outline outline-1 outline-[#9926f0] hover:text-white w-[180px] rounded-full font-bold my-6 py-2'>
            <span className="ms-4">Learn more</span>
            <BsArrowRightCircleFill className='text-4xl ms-3 fill-[#9926f0] group-hover:fill-white' />
            </button>
                </div>
            </div>




     {/* No 3 Cloud Hosting */}

      <div className='max-w-[1140px] mx-auto w-full mt-10 grid md:grid-cols-2'>
       <div className='flex flex-col justify-center'>
       <FaCloudUploadAlt  className='text-5xl fill-[#9926f0]' />
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#9926f0] to-[#d122e3] font-bold py-2 font-serif'>Cloud Hosting</h1>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem, doloremque autem quibusdam blanditiis harum alias hic accusantium maxime atque ratione magni repellat?</p>
          <button className='flex group justify-center items-center mt-8 text-black bg-white hover:bg-gradient-to-r from-[#9926f0] to-[#d122e3] outline outline-1 outline-[#9926f0] hover:text-white w-[180px] rounded-full font-bold my-6 py-2'>
            <span className="ms-4">Learn more</span>
            <BsArrowRightCircleFill className='text-4xl ms-3 fill-[#9926f0] group-hover:fill-white' />
            </button>
            </div>
            <img src={image3} className='lg:w-[500px] sm:96 md:ms-auto my-4' />
            </div>

      </div>

     </div>
    </>
  )
}

export default Servicess
