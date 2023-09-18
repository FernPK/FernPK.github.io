import React from 'react'

// type Props = {}

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-center items-center gap-8 h-14 w-screen text-body-text-on-white fixed bg-white z-10'>
      <a href="#home" className='font-bold text-primary underline'>Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default NavBar