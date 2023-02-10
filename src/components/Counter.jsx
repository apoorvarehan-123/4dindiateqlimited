import React from 'react'
import CountUp from 'react-countup';
import { AiFillProject } from 'react-icons/ai';


export default function Counter() {
  return (
    <div className='flex px-6 my-20 justify-evenly md:flex-row flex-col   text-black items-center   '>
       <div className='bg-yellow-600 px-6 py-6 flex flex-col justify-center mb-4 md:mb-0 items-center rounded-md shadow-2xl'>
       <AiFillProject className='w-8 h-8'/>
        <p className='text-4xl text-white my-3'>Happy Clients</p>
        <CountUp start={0} end={300} delay={0}></CountUp>
        </div> 

        <div className='bg-yellow-600 px-6 py-6 flex flex-col justify-center items-center rounded-md shadow=2xl '>
       <AiFillProject className='w-8 h-8'/>
        <p className='text-4xl text-white my-3'>Global Patners</p>
        <CountUp start={0} end={21} delay={0}></CountUp>
        </div> 
    </div>
  )
}
