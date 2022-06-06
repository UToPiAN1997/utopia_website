import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen'>
        <div className='w-screen mx-auto flex flex-col justify-center h-full'>
            <h1 className='text-3xl sm:text-4xl font-extrabold'>From A Thought To An Idea Build Your Digital Word</h1>
            <p className='font-normal text-sm sm:text-xl mt-2'>From Idea to brand, from brand to a product, from product to success</p>
        <div className='mt-4'>
            <button className='text-white font-bold group hover:border-gray-500s bg-primary border-2 px-6 py-3 flex items-center gap-4'>Contact
            <span className='group-hover:translate-x-2 group-hover:duration-200'>
            <HiArrowNarrowRight/>
            </span>
            </button>
        </div>

        </div>
    </div>
    
  )
}

export default Hero