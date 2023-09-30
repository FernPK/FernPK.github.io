import React from 'react'

// type Props = {}

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-center items-center gap-8 sm:h-14 h-12 w-screen text-body-text-on-white fixed bg-white z-20 sm:text-base text-sm'>
      <a href="#home" className='hover:font-bold'>Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default NavBar
