import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import {Link } from 'react-router-dom'


export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='flex relative  justify-evenly items-center px-4 py-4  shadow-2xl '>
      <div className='logo flex flex-row items-center justify-center '>
        <img className='w-14 object-contain h-14 animate-pulse' src="https://i.postimg.cc/15Fc21MR/Whats-App-Image-2023-02-07-at-14-32-36.jpg"/>
      
        <p  className='p-0 m-0 text-sm mt-2'>INDIATEQ LIMITED</p>
      </div>
      <div className='logo hidden md:flex  justify-between items-center'>
        <ul className='flex justify-between items-center '>
          <Link to='/'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>About</li>
          </Link>
          <Link to='/product'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>Product</li>
          </Link>
          <Link to='/emanagement'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>E Waste Management</li>
          </Link>
          <Link to='/contact'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>Contact</li>
          </Link>
        </ul>
      </div>

      <div className='logo flex items-center justify-between '>
           <button className='bg-yellow-600 text-black px-5 rounded-sm hover:opacity-20 py-2 text-sm mr-3 cursor-pointer shadow-2xl'>Login</button>
           <button className='text-sm border px-3 py-2 rounded-full w-20  cursor-pointer  border-yellow-600 hover:bg-yellow-900'>Sign Up</button>
           <RxHamburgerMenu onClick={() => setClicked(!clicked)} className=' md:hidden ml-6'/>

      </div>
      {
        clicked && (
          <div className='absolute bg-black top-20 px-4 py-10 z-50 rounded-md shadow-3xl right-0'>
          <ul className='flex flex-col justify-between items-center '>
          <Link to='/'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>About</li>
          </Link>
          <Link to='/product'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>Product</li>
          </Link>
          <Link to='/emanagement'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>E Waste Management</li>
          </Link>
          <Link to='/contact'>
          <li className='mr-4 text-sm underline p-2 cursor-pointer hover:opacity-20'>Contact</li>
          </Link>
        </ul>
        </div>
        )
      }

    </div>
  )
}
