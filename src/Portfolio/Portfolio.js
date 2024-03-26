import React from 'react'
import image1 from '../assets/portfolio-1.jpg'
import image2 from '../assets/portfolio-2.jpg'
import image3 from '../assets/portfolio-3.jpg'
import image4 from '../assets/portfolio-4.jpg'
import image5 from '../assets/portfolio-5.jpg'
import image6 from '../assets/portfolio-6.jpg'
import image7 from '../assets/portfolio-7.jpg'
import image8 from '../assets/portfolio-8.jpg'
import image9 from '../assets/portfolio-9.jpg'


const Portfolio = () => {
  return (
    <>

<div className='w-full py-28 px-4' id='portfolio'>
        <h1 className='text-center md:text-7xl text-5xl font-bold text-[#212529] underline decoration-wavy underline-offset-8 decoration-[#9926f0]'>Latest Work</h1>
        <p className='text-center mt-12 text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.</p>
   <div className='mt-16 text-center space-x-2'>
        <button className='px-4 py-2 border rounded-md border-[#9926f0] text-[#9926f0] hover:bg-[#9926f0] hover:text-white'>All</button>
        <button className='px-4 py-2 border rounded-md border-[#9926f0] text-[#9926f0] hover:bg-[#9926f0] hover:text-white'>Websites</button>
        <button className='px-4 py-2 border rounded-md border-[#9926f0] text-[#9926f0] hover:bg-[#9926f0] hover:text-white'>Design</button>
        <button className='px-4 py-2 border rounded-md border-[#9926f0] text-[#9926f0] hover:bg-[#9926f0] hover:text-white'>Mockup</button>
        </div>
       
<div className='w-full py-10'>

<div className="grid sm:grid-cols-3 gap-6 max-w-[1100px] mx-auto">

    {/* Row 1 */}
    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image1} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 1</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>

    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image2} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 2</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>

    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image3} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 3</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>


  {/* Row 2 */}
  <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image4} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 4</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>


    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image5} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 5</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>

    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image6} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 6</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>


  {/* Row 3 */}
  <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image7} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 7</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>


    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image8} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 8</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>


    <div className="relative group">
      <div className="relative w-full h-48 lg:h-72 border-t-8 border-[#ae2debb7] overflow-hidden">
        <img src={image9} className="w-full h-full  object-cover transition-transform ease-in-out duration-700 delay-150 group-hover:scale-125 group-hover:-translate-y-1"/>
        <div className="absolute inset-0 bg-[#6f42c1] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h1 className="text-white text-2xl w-48 text-center font-semibold">PROJECT NAME GOES HERE 9</h1>
          <p className="text-white text-base mt-3">category project</p>
        </div>
      </div>
    </div>

</div>
</div>
</div>
    </>
  )
}

export default Portfolio
