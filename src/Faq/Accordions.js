import React,{useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';


const Accordions = ({ items }) => {
const [activeIndex, setActiveIndex] = useState(null);

const handleItemClick = (index) => {
  setActiveIndex(index === activeIndex ? null : index);
};
  return (
    <>


    <div className='w-full px-4'>
        <h1 className='text-center md:text-7xl text-5xl font-bold text-[#212529] underline decoration-wavy underline-offset-[15px] decoration-[#9926f0]'>FAQ</h1>
        <p className='text-center mt-10 text-gray-600 text-xl'>frequently asked questions, get knowledge befere hand</p>

    <div className='mt-20 max-w-[1100px] mx-auto'>
      {items.map((item, index) => (
        <div key={index} className="border mb-6">
          <div
            className={`flex justify-between group hover:text-[#d122e3] items-center shadow-xl p-6 cursor-pointer select-none ${
              index === activeIndex ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div onClick={() => handleItemClick(index)}>
              {item.title}
            </div>
            <div onClick={() => handleItemClick(index)}>
              {index === activeIndex ? <FaMinus className='rounded-full text-[#d122e3] outline-1 text-sm outline outline-offset-4 outline-[#d122e3]' /> : <FaPlus className='rounded-full text-[#d122e3] outline-1 text-sm outline outline-offset-4 outline-[#d122e3]' />}
            </div>
          </div>
          {index === activeIndex && (
            <div className="p-6">{item.content}</div>
          )}
        </div>
      ))}
    </div>
    </div>
      
    </>
  )
}

export default Accordions
