import React from 'react'
import Image from 'next/image'

// type Props = {}

const About = () => {
  return (
    <section id='about'>
      <div className='bg-container-blue flex flex-row justify-center items-start gap-20 relative'>
        <div className='pt-10 w-1/3'>
          <header>About Me</header>
          <p className='text-body-text-on-blue flex flex-col gap-2'>
            <span className='text-lg font-medium block w-fit'>I&apos;m a third-year student in Computer Engineering</span>
            In my free time, I enjoy self-learning in the things I&apos;ve never done before. As a web development learner, a Front-end developer is the first gate builder to know the brand. The user interface can convey the story, uniqueness, or emotion to the users. I have a little experience in designing. Wearing various hats to look through the spectrum of people and learning about human psychology is fun. The development that makes the design into a real-world website while completing the functional tasks makes me feel challenged. </p>
        </div>
        <div className='p-3 bg-image-border-on-blue rounded-full my-7'>
          <Image src='/images/Walking.png' alt='Walking' width={325} height={434} className='rounded-full'></Image>
        </div>
        <Image src='/images/full-time_learner.png' alt='Full-time Learner' width={400} height={100} className='absolute bottom-0 left-40'></Image>
      </div>
    </section>
  )
}

export default About