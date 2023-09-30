import React from 'react'
import Image from 'next/image'

// type Props = {}

const About = () => {
  return (
    <section id='about'>
      <div className='bg-container-blue flex flex-row lg:justify-center justify-between items-start xl:gap-20 lg:gap-12 relative lg:px-12 overflow-hidden'>
        <div className='lg:pt-10 pt-8 xl:w-2/5 w-8/12 xl:max-w-full max-w-xl z-10 mx-auto lg:px-0 px-8'>
          <header>About Me</header>
          <p className='text-body-text-on-white flex flex-col gap-2 lg:text-base text-sm'>
            <span className='text-body-text-on-blue lg:text-lg text-base font-medium block w-fit'>I&apos;m a third-year student in Computer Engineering</span>
            In my free time, I enjoy self-learning in the things I&apos;ve never done before. As a web development learner, a Front-end developer is the first gate builder to know the brand. The user interface can convey the story, uniqueness, or emotion to the users. I have a little experience in designing. Wearing various hats to look through the spectrum of people and learning about human psychology is fun. The development that makes the design into a real-world website while completing the functional tasks makes me feel challenged. </p>
        </div>
        <div className='lg:p-3 bg-image-border-on-blue lg:rounded-full lg:my-7 w-1/3'>
          <Image src='/images/Walking.png' alt='Walking' width={325} height={434} className='lg:rounded-full w-full'></Image>
        </div>
        <Image src='/images/full-time_learner.png' alt='Full-time Learner' width={400} height={100} className='absolute bottom-0 xl:left-40 lg:left-16 left-1/2 lg:w-auto w-1/4 h-auto'></Image>
      </div>
    </section>
  )
}

export default About