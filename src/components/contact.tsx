import React from 'react'

// type Props = {}

const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-container-blue pt-10 pb-8'>
        <div className='flex flex-row justify-center items-start w-full'>
          <div className='text-5xl font-semibold text-white w-1/2 text-right pr-6 border-r border-white flex flex-row justify-end'>
            <div className='w-96 leading-tight'>I&apos;m looking for a co-operative internship.</div>
            </div>
          <div className='w-1/2 pl-6 text-body-text-on-blue'>
            <header className='mb-4'>Contact Me</header>
            <button className='p-2 text-xl mb-3'>
              <i className="fa-regular fa-envelope text-2xl w-7"></i>
              <a href="mailto:pornnapat5563@gmail.com">pornnapat5563@gmail.com</a>
              </button>
            <button className='p-2 text-xl'>
              <i className="fa-brands fa-linkedin text-2xl w-7"></i>
              <a href="https://www.linkedin.com/in/pornnapat-ketplung-919272190/" target='_blank'>Pornnapat Ketplung</a>
              </button>
          </div>
        </div>
        <div className='text-center mt-14 text-body-text-on-blue'>Copyright © 2023. All rights are reserved </div>
      </div>
    </section>
  )
}

export default Contact