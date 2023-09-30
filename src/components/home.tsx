import React from 'react'
import Image from 'next/image'

// type Props = {}

const Home = () => {
  return (
    <section id='home'>
      <div className='flex flex-col justify-center items-center h-screen bg-white xl:mx-28 lg:mx-16 md:mx-8 gap-20'>
        <div className='flex md:flex-row flex-col justify-center items-center xl:gap-16 lg:gap-8 gap-6'>
          <div className='bg-image-border-on-white rounded-full p-3'>
            <Image src='/images/Profile.jpg' alt="Pornnapat's Profile" width={240} height={240} className='rounded-full xl:w-60 lg:w-56 md:w-48 w-40'></Image>
          </div>
          <div className='flex flex-col md:w-7/12 w-5/6 md:text-left text-center'>
            <h1 className='xl:text-6xl lg:text-5xl text-4xl font-medium text-header-text'><span className='font-bold'>Front-end</span> Developer</h1>
            <p className='xl:text-xl lg:text-lg text-base text-body-text-on-white px-1 py-3'>Hi, I&apos;m Pornnapat Ketplung, an undergraduate who is interested in web development and loves learning new things </p>
            <div className='flex flex-row gap-4 md:mt-0 mt-1 md:justify-start justify-center'>
              <a className='border border-white bg-primary text-white hover:bg-primary-hover button xl:text-xl lg:text-lg text-base lg:py-2 lg:px-4'>
                <i className="fa-solid fa-circle-arrow-down lg:text-2xl text-xl"></i>Download Resume</a>
              <a className='border border-primary bg-white text-primary hover:bg-white-hover button xl:text-xl lg:text-lg text-base' href='https://github.com/FernPK' target='_blank'>
                <i className="fa-brands fa-github lg:text-2xl text-xl"></i>Visit my GitHub</a>
            </div>
          </div>
        </div>
        <Image src='/images/Flower_footer.png' alt='Flower for decoration' height={36} width={120}></Image>
      </div>
    </section>
  )
}

export default Home