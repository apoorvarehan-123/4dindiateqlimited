import React from 'react'
import { MdAccessTimeFilled } from 'react-icons/md';

import { HiOutlineMail } from 'react-icons/hi';



export default function TimeTable() {
  return (
    <div className='text-white my-20 flex justify-evenly items-center flex-col md:flex-row'>
        <div className='bg-yellow-600 px-6 py-8 mb-4 md:mb-0 rounded-sm shadow-2xl '>
            <MdAccessTimeFilled className='text-black w-8 h-8 my-1'/>
            <div className='ml-1'>
            <p className='text-sm'>Working Hours</p>
            <p className='text-black text-xl'>Monday-S: 10am to 7pm</p>
            </div>
        </div>

        <div className='bg-yellow-600 px-6 py-8 rounded-sm shadow-2xl'>
            <HiOutlineMail className='text-black w-8 h-8 my-1'/>
            <div  className='ml-1'>
            <p  className='text-sm'>Email</p>
            <p className='text-black text-xl'>indiateqltd@gmail.com</p>
            </div>
        </div>
    </div>
  )
}
