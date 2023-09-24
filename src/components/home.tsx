import React from 'react'
import Image from 'next/image'

// type Props = {}

const Home = () => {
  return (
    <section id='home'>
      <div className='flex flex-col justify-center items-center h-screen bg-white xl:mx-40 gap-20'>
        <div className='flex flex-row justify-center items-center xl:gap-16'>
          <div className='bg-image-border-on-white rounded-full p-3'>
            <Image src='/images/Profile.jpg' alt="Pornnapat's Profile" width={240} height={240} className='rounded-full'></Image>
          </div>
          <div className='flex flex-col w-7/12'>
            <h1 className='text-6xl font-medium text-header-text'><span className='font-bold'>Front-end</span> Developer</h1>
            <p className='text-xl text-body-text-on-white px-1 py-3'>Hi, I&apos;m Pornnapat Ketplung, an undergraduate who is interested in web development and loves learning new things </p>
            <div className='flex flex-row gap-4'>
              <a className='border border-white bg-primary text-white hover:bg-primary-hover button'>
                <i className="fa-solid fa-circle-arrow-down text-2xl"></i>Download Resume</a>
              <a className='border border-primary bg-white text-primary hover:bg-white-hover button' href='https://github.com/FernPK' target='_blank'>
                <i className="fa-brands fa-github text-2xl"></i>Visit my GitHub</a>
            </div>
          </div>
        </div>
        <Image src='/images/Flower_footer.png' alt='Flower for decoration' height={36} width={120}></Image>
      </div>
    </section>
  )
}

export default Home