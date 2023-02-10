import React from 'react'
import LoginForm from './LoginForm'
import {Link } from 'react-router-dom'


export default function Fotter() {
  return (
    <div className='  flex md:flex-row overflow-hidden flex-col my-10 py-10  justify-evenly  items-center'>
   
        <div className='my-8 md:my-0 w-60'>
        <p className='text-2xl text-[#E9E8E8]'>4D INDIATEQ LIMITED</p>
        <p style={{fontSize:13}} className='text-sm my-1 text-yellow-600'>GST Register since (2017)  7 years</p>
         Floor 1,5, Plot 384, Dongree Building,, Shamrao Vitthal Lane, Grant
Road,Mumbai, MUMBAI, MUMBAI, MAHARASHTRA, 400004
         <p className='my-2 text-sm animate-pulse'>indiateqltd@gmail.com</p>
         <p className='my-2 text-md text-yellow-600'>PH-No:- +919004679268</p>

        </div>

        <div className='my-8 md:my-0'>
            <ul>
            <Link to='/'>
                <li className='my-4 text-sm  underline hover:opacity-30 cursor-pointer'>Home</li>
                </Link>
                <Link to='/product'>
                <li  className='my-4 text-sm  underline hover:opacity-30 cursor-pointer '>Product</li>
                </Link>
                <Link to='/about'>
                <li  className='my-4 text-sm  underline hover:opacity-30 cursor-pointer '>About</li>
                </Link>
                <Link to='/contact'>
                <li  className='my-4 text-sm  underline hover:opacity-30 cursor-pointer '>Contact
                </li>
                </Link>
            </ul>
        </div>
        <LoginForm/>
    </div>
  )
}
