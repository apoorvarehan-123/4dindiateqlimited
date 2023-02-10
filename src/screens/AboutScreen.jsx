import React from 'react'
import About from '../components/About'
import Fotter from '../components/Fotter'
import Header from '../components/Header'

export default function AboutScreen() {
  return (
    <div>

        <Header/>
        <div className='relative '>
            <div className='absolute text-[#E9E8E8] rounded-md shadow-2xl top-10 left-14  md:top-14 md:left-20 bg-black px-6 py-4'>
                <p className='text-2xl'>About Us</p>
                <p className='text-sm'>About/Home</p>
            </div>
        <img className='w-full  object-cover' src="https://tse3.mm.bing.net/th?id=OIP.cIsBALFMSOZyjhVr2b5ONwHaDv&pid=Api&P=0"/>
        </div>
        <About/>
      <Fotter/>
    </div>
  )
}
