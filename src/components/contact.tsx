import React from 'react'

// type Props = {}

const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-container-blue pt-10 pb-8'>
        <div className='flex sm:flex-row flex-col justify-center sm:items-start items-center w-full'>
          <div className='lg:text-5xl sm:text-4xl text-2xl font-semibold text-white sm:w-1/2 w-5/6 sm:text-right text-center sm:pr-6 sm:pb-0 pb-4 sm:border-r sm:border-b-0 border-r-0 border-b border-white flex flex-row justify-end'>
            <div className='lg:w-96 sm:w-64 w-7/12 leading-tight sm:mx-0 mx-auto'>I&apos;m looking for a co-operative internship.</div>
            </div>
          <div className='sm:w-1/2 w-full sm:pl-6 text-body-text-on-blue sm:text-left sm:pt-0 pt-3'>
            <header className='lg:mb-4 sm:mb-2 sm:mx-0 mx-auto mb-1'>Contact Me</header>
            <a className='p-2 lg:text-xl md:text-lg text-base lg:mb-3 flex flex-row justify-center items-center w-fit gap-2 sm:mx-0 mx-auto' href='mailto:pornnapat5563@gmail.com' target='_blank'>
              <i className="fa-regular fa-envelope lg:text-2xl md:text-xl text-lg w-7 text-center"></i>pornnapat5563@gmail.com</a>
            <a className='p-2 lg:text-xl md:text-lg text-base flex flex-row justify-center items-center w-fit gap-2 sm:mx-0 mx-auto' href='https://www.linkedin.com/in/pornnapat-ketplung-919272190/' target='_blank'>
              <i className="fa-brands fa-linkedin lg:text-2xl md:text-xl text-lg w-7 text-center"></i>Pornnapat Ketplung</a>
          </div>
        </div>
        <div className='text-center mt-14 text-body-text-on-blue lg:text-base text-sm'>Copyright © 2023. All rights are reserved </div>
      </div>
    </section>
  )
}

export default Contact