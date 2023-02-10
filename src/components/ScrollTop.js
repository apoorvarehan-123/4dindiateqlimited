import React from 'react'
import { BsArrowUpCircleFill} from "react-icons/bs";
import { useEffect, useState } from 'react';



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.body.scrollBehaviour  ='smooth'
  document.documentElement.scrollTop = 0;
}

export default function ScrollTop() {
    const [scrollBtn, setScrollBtn] =useState(false);
    console.log(scrollBtn);
  
    useEffect(() => {
      
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     setScrollBtn(true);
    } else {
     setScrollBtn(false);
    }
  }
    },[window]);
  return (
    <div>
        <button style={{}} className='fixed right-2 bottom-4 z-40 ' onClick={topFunction}><BsArrowUpCircleFill className='w-8 shadow-xl h-8' fill='white'/>
        </button>
    </div>)}