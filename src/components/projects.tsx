import React from 'react'
import ProjectCard from './ProjectCard'

// type Props = {}

const Projects = () => {
  return (
    <section id='projects'>
      <div className='xl:mx-40'>
        <header className='block mx-auto before:bg-header-highlight-on-white mt-10'>Projects</header>
        <div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className='mb-10'>
          <p className='text-center text-2xl font-medium text-primary-light mb-2'>See more projects at</p>
          <div className='flex flex-row gap-5 justify-center items-center'>
            <div className='flex flex-row justify-center items-center px-4 py-2 gap-2 text-xl text-header-text'>
              <i className="fa-brands fa-github text-2xl"></i>
              <p>GitHub</p>
            </div>
            <div className='flex flex-row justify-center items-center px-4 py-2 gap-2 text-xl text-header-text'>
              <i className="fa-brands fa-free-code-camp text-2xl"></i>
              <p>freeCodeCamp</p>
            </div>
            <div className='flex flex-row justify-center items-center px-4 py-2 gap-2 text-xl text-header-text'>
              <i className="fa-brands fa-codepen text-2xl"></i>
              <p>CodePen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects