import React, {  useState } from "react";
import { GrProductHunt } from 'react-icons/gr';
import {Link } from 'react-router-dom'



export default function Product() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center overflow-hidden w-full  '>
    <p className='text-5xl text-center  text-[#E9E8E8] my-4'>Products...</p>
   
        <div className='flex flex-col md:flex-row my-10 flex-wrap gap-10 px-6 justify-evenly items-center'>
          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.vs7sJ1OZPAEGp6ML1vncGwHaGl&pid=Api&P=0"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Computers</p>
          </div>
          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://rukminim1.flixcart.com/image/416/416/kcf4lu80/ups/f/z/c/bx1100c-in-apc-original-imaftjkvbsdjt7jw.jpeg?q=70"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>UPS</p>
          </div>


          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://rukminim1.flixcart.com/image/612/612/ktbu6q80/keyboard/tablet-keyboard/d/p/r/k380-logitech-original-imag6zxuuhfpuz5b.jpeg?q=70"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>KEY board</p>
          </div>


          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://rukminim1.flixcart.com/image/612/612/kzblocw0/laptop-stand/d/w/4/200-4-in-1-laptop-stand-book-stand-tab-stand-mobile-stand-original-imagbct5nhsvxata.jpeg?q=70"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Laptops</p>
          </div>


          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://rukminim1.flixcart.com/image/612/612/kpbipow0/mouse/w/p/h/b100-logitech-original-imag3h2mje4vsjf9.jpeg?q=70"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Mouse</p>
          </div>

          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://m.media-amazon.com/images/I/31vkmB-vYJL._SY445_SX342_QL70_FMwebp_.jpg"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Tablets</p>
          </div>

          
          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://m.media-amazon.com/images/I/41sAt4BZydL._SX300_SY300_QL70_FMwebp_.jpg"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Pen drives</p>
          </div>


          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://m.media-amazon.com/images/I/31XnYpheJbL._SY300_SX300_QL70_FMwebp_.jpg"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Solid State Drives</p>
          </div>

          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://rukminim1.flixcart.com/image/612/612/k6gsk280/laptop-skin-decal/b/x/y/3d-wallpaper-sticker-decals-vinyl-for-laptop-skin-printart-17-original-imafzxf8g45ahgvd.jpeg?q=70"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Skin </p>
          </div>

          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://rukminim1.flixcart.com/image/612/612/ktszgy80/backpack/e/2/d/arc-backpack-unisex-with-rain-cover-w-041-backpack-wrogn-original-imag72kymcgh7kc9.jpeg?q=70"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Laptop Bags </p>
          </div>


          <div className='w-80 flex flex-col items-center justify-center'>
            <img className='w-80 object-contain rounded-md' src="https://tse3.mm.bing.net/th?id=OIP.IwbPgV-aaZSUyO59jc7Q_QHaE5&pid=Api&P=0"/>
            <p className='mt-4 text-[#E9E8E8] text-xl'>Mother Boards</p>
          </div>
        </div>
        
</div>
  )
}
