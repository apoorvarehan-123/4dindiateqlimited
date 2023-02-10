import React from 'react'
import {Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <div className='bg-yellow-600 px-8 relative rounded-md py-8 w-80'>
      <p className='absolute w-20 h-20 bg-black -left-16 -top-4 rounded-full '></p>
      <p className='absolute w-20 h-20 bg-black -right-16 -bottom-4 rounded-full '></p>
      <p className='text-6xl my-4 bg-black px-3 rounded-md py-2'> Contact Us ?</p>
      <div>
<div className='my-3' >
  <p className='text-sm my-1'>Name:</p>
  <input className='px-2 py-1 bg-transparent border rounded-sm placeholder:text-white placeholder:text-sm text-sm outline-none' placeholder='Name' type="text"/>
</div>

<div className='my-3'>
  <p  className='text-sm my-1'>Phone No:</p>
  <input className='px-2 py-1 bg-transparent border rounded-sm placeholder:text-white placeholder:text-sm text-sm outline-none' placeholder='Name'  placeholder='Phone Number' type="text"/>
</div>


<div className='my-3'>
  <p  className='text-sm my-1'>Your Message:</p>
<textarea className='px-2 py-1 bg-transparent border rounded-sm placeholder:text-white placeholder:text-sm text-sm outline-none' placeholder='Note'  type="text">

</textarea>
</div>
      </div>
      
      <Link
             className='bg-black px-4 py-2 rounded-full text-sm hover:opacity-30 cursor-pointer'
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:indiateqltd@gmail.com";
                e.preventDefault();
            }}
        >
           Send Message
        </Link>
    </div>
  )
}
