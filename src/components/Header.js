import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className='flex items-center h-[4.6875rem] '>
        <GiHamburgerMenu size={20} className='ml-[1.375rem]'/>

     
      <div className='text-[1.3rem] text-black font-[700] text-center w-full'><span>BOUBOULENA CREATIVE</span></div>
    </div>
  )
}


export default Header
