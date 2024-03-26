import React from 'react'
import image1 from '../assets/campany-1.png'
import image2 from '../assets/campany-2.png'
import image3 from '../assets/campany-3.png'
import image4 from '../assets/campany-4.png'
import image5 from '../assets/campany-5.png'
import image6 from '../assets/campany-6.png'


const Companies = () => {
  return (
    <>

<div className='w-full py-8 px-4'>
  <div className='max-w-[1321px] mx-auto'>
  <h1 className='text-center sm:text-2xl text-xl font-semibold underline decoration-wavy underline-offset-8 decoration-[#9926f0]'>Trusted by campanies like</h1>
    <div className='flex flex-wrap justify-center md:justify-evenly p-4 md:p-14'>
      <img src={image1} className='w-36 h-9 mx-6 my-8'/>
      <img src={image2} className='w-28 h-9 mx-6 my-8' />
      <img src={image3} className='w-32 h-9 mx-6 my-8' />
      <img src={image4} className='w-28 h-9 mx-6 my-8' />
      <img src={image5} className='w-28 h-9 mx-6 my-8' />
      <img src={image6} className='w-20 h-8 mx-6 my-8' />

    </div>
  </div>
</div>

      
    </>
  )
}

export default Companies
