import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import image1 from '../assets/client-1.jpg'
import image2 from '../assets/client-2.jpg'
import image3 from '../assets/client-3.jpg'
import image4 from '../assets/client-4.jpg'




const Testimonials = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: image1, title: 'Patrick Muriungi', about: 'CEO & Founder', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.' },
    { image: image2, title: 'Joy Marete', about: 'Finance Manager', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.' },
    { image: image3, title: 'ClaireBelle Zawadi', about: 'Global Brand Manager', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.' },
    { image: image4, title: 'Uhuru Kenyatta', about: 'C.E.O & Founder', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Automatic slideshow every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);



  return (
    <>


<div className="relative bg-cover bg-center h-[1200px] bg-no-repeat pt-64 bg-fixed overflow-x-hidden bg-gradient-to-r from-[#9926f0] to-[#d122e3]" id='testimonials'>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className='absolute top-0 left-0 w-full transform -rotate-180'
  >
    <path
      fill='#ffffff'
      fill-opacity='1'
      d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
    ></path>
  </svg>

   <h1 className="sm:text-6xl font-bold text-3xl overflow-hidden text-center text-white">TESTIMONIALS</h1>
        <h1 className="mt-6 tracking-widest text-lg text-center text-white">what our clients are saying</h1>
  <div className="max-w-screen mx-auto h-[500px] flex items-center justify-center relative mt-5">
  

    {slides.map((slide, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="absolute inset-0 text-white text-center"
      >
      
        <img src={slide.image} alt={slide.title} className='lg:w-52 sm:w-44 border-4 border-[#d122e3] w-24 mx-auto mt-6 rounded-full' />
        <p className='mt-10 tracking-wider rounded-md leading-loose bg-[#f8f9fac7] text-[#212529] p-10 sm:w-11/12 mx-auto'>{slide.text}</p>
        <h1 className="text-3xl mt-6 text-white font-medium mx-auto">{slide.title}</h1>
        <h1 className="mt-6 text-white mx-auto">{slide.about}</h1>

      </motion.div>
    ))}
    <button className="prev absolute text-white text-2xl top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
      &#10094;
    </button>
    <button className="next absolute top-1/2 text-white text-2xl right-4 transform -translate-y-1/2" onClick={nextSlide}>
      &#10095;
    </button>
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

export default Testimonials
