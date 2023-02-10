import React from 'react'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
import {Link } from 'react-router-dom'


export default function ContactScreen() {
  return (
    <div>
      <Header />
      
      <div className='relative  '>
        <div className='absolute text-[#E9E8E8] rounded-md shadow-2xl top-10 left-14  md:top-14 md:left-20 bg-black px-6 py-4'>
          <p className='text-2xl'>Contact</p>
          <p className='text-sm'>Contact/Home</p>
        </div>
        <img className='w-full  object-cover' src="https://i.postimg.cc/vTgvM5jT/e8728ac1-7783-4454-a2f7-237e2cd2c076-CR0-0-1464-600-PT0-SX1464-V1.jpg" />
      </div>
      <div className=' flex justify-evenly items-center flex-col md:flex-row'>
      <div className='px-8  relative rounded-md py-8 w-80'>
      
        <p className='text-6xl my-4 bg-black px-3 rounded-md py-2'> Contact Us ?</p>
        <div className=''>
          <div className='my-3' >
            <p className='text-sm my-1'>Name:</p>
            <input className='px-2 py-1 bg-transparent border rounded-sm placeholder:text-white placeholder:text-sm text-sm outline-none' placeholder='Name' type="text" />
          </div>

          <div className='my-3'>
            <p className='text-sm my-1'>Phone No:</p>
            <input className='px-2 py-1 bg-transparent border rounded-sm placeholder:text-white placeholder:text-sm text-sm outline-none'  placeholder='Phone Number' type="text" />
          </div>


          <div className='my-3'>
            <p className='text-sm my-1'>Your Message:</p>
            <textarea className='px-2 py-1 bg-transparent border rounded-sm placeholder:text-white placeholder:text-sm text-sm outline-none' placeholder='Message' type="text">

            </textarea>
          </div>
        </div>
        <Link to='/'>
        <a className='bg-black px-4 py-2 rounded-full text-sm hover:opacity-30 cursor-pointer border text-[#E9E8E8] cursor-pointer hover:bg-[#CD5888] hover:text-black'>Send message</a>
        </Link>
      </div>
      <div className='md:w-80 w-72 md:h-80 rounded-xl overflow-hidden'>
      
      </div>
      </div>
      <Fotter />
    </div>
  )
}
