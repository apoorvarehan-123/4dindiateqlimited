import React from 'react'


export default function Hero() {
  return (
    <div className='relative'>
      <div className='absolute -left-7  -top-2 bg-black text-[#E9E8E8] text-2xl px-8 md:text-6xl py-4 md:py-6 md:px-10 rounded-full'>
      <p className=' text-[#E9E8E8] animate-pulse text-xl  md:text-3xl'>Welcome to 4D INDIATEQ LIMITED</p>
      <p className='text-sm text-yellow-600'>GST Register since (2017)  7 years</p>
      </div>
      
      <img className='w-full h-80 object-cover' src="http://photos.wikimapia.org/p/00/03/59/46/98_big.jpg"/>
    </div>
  )
}
