import React from 'react';
import { FaCheck, FaPaperPlane } from 'react-icons/fa';


const Form = () => {
  return (
    <>

      <div className='w-full px-4 bg-[#dfe7f0b7] py-12' id='Form'>
        <h1 className='text-center md:text-7xl text-5xl font-bold text-[#212529] underline decoration-wavy underline-offset-8 decoration-[#9926f0]'>
          Get Started
        </h1>
        <p className='text-center mt-12 text-gray-600 text-lg'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum architecto modi.
        </p>

        <div className='w-full py-16 px-4'>
          <div className='max-w-[1100px] mx-auto grid sm:grid-cols-2'>
            <div className='flex flex-col justify-center p-6 md:p-20 bg-gradient-to-r from-[#9926f0] to-[#d122e3]'>
              <h1 className='lg:text-6xl sm:text-4xl text-xl font-bold py-2 text-white'>
                100% Satisfaction Guaranteed
              </h1>
              <p className='tracking-wide mt-5 leading-7 text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima,
                tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
              </p>

              <h1 className='md:text-3xl text-white sm:text-2xl mt-6 font-semibold'>
                What will be the next step?
              </h1>
              <div className='mt-6 text-white px-4 space-y-2'>
                <p>
                  <FaCheck className='inline-block text-lg mr-2' />
                  We'll prepare the proposal.
                </p>
                <p>
                  <FaCheck className='inline-block text-lg mr-2' />
                  we'll discuss it together.
                </p>
                <p>
                  <FaCheck className='inline-block text-lg mr-2' />
                  let's start the discussion.
                </p>
              </div>
            </div>


             {/* Form */}

            <div className='bg-white shadow-2xl p-6 md:p-10'>
              <form className='grid grid-cols-1 gap-4'>
                <h1 className='text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9926f0] to-[#d122e3]'>
                  Start Your Project
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-9 gap-4'>
                  <input
                    type='text'
                    id='input1'
                    name='input1'
                    required
                    placeholder='First Name'
                    className='shadow-xl w-full border rounded border-gray-300 px-4 py-3 text-black focus:outline-blue-700'
                  />
                  <input
                    type='text'
                    id='input2'
                    name='input2'
                    required
                    placeholder='Last Name'
                    className='shadow-xl w-full border rounded border-gray-300 px-4 py-3 text-black focus:outline-blue-700'
                  />
                </div>

                <input
                  type='email'
                  id='input3'
                  name='input2'
                  required
                  placeholder='Email Address'
                  className='shadow-xl mt-2 w-full border rounded border-gray-300 px-4 py-3 text-black focus:outline-blue-700'
                />

                <textarea
                  id='textarea'
                  placeholder='Message'
                  required
                  name='textarea'
                  rows='10'
                  className='shadow-xl p-2 mt-2 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-blue-700'
                ></textarea>

                <div className='flex items-center justify-start'>
                  <button
                    type='submit'
                    className='bg-gradient-to-r mt-2 from-[#9926f0] to-[#d122e3] hover:opacity-90 relative w-full font-semibold flex items-center text-white justify-center py-4 rounded-full'
                  >
                    SUBMIT
                    <FaPaperPlane className='text-xl relative -right-2' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;