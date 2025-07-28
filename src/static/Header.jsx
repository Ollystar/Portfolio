import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header =()=> {
  const [toggle, setToggle] = useState(false);

const handleToggle =() => {
  setToggle(!toggle)
};
  
  return (
    <div className='bg-black text-white px-[50px] py-[20px] items-center flex justify-between'>
    <div>
      <h1 className='text-3xl'>Olaide</h1>
    </div>
    <div>
      <ul className='flex gap-2 max-md:hidden'>
        <li>Home</li>
        <li>About</li>
       <li>Services</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
    <section className='hidden max-md:block'>
      {toggle ? (
        <RxCross1
        onClick={handleToggle}
        className='size-[38px] text-2xl'
        />
      )  :  (
        <RxHamburgerMenu
        onClick={handleToggle}
        className='size-[38px} text-2xl'
        />
      )}

    </section>
    </div>
    
  )
}

export default Header
