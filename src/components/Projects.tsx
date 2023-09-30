import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'

// type Props = {}

const Projects = () => {
  return (
    <section id='projects'>
      <div className='xl:mx-40'>
        <header className='block mx-auto before:bg-header-highlight-on-white mt-10'>Projects</header>
        <div>
          <ProjectCard />
          <ProjectCard2 />
          <ProjectCard />
        </div>
        <div className='lg:mb-10 mb-8'>
          <p className='text-center lg:text-2xl text-xl font-medium text-primary-light lg:mb-2 sm:mb-1 mb-2'>See more projects at</p>
          <div className='flex sm:flex-row flex-col sm:gap-5 gab-2 justify-center items-center'>
            <a className='flex flex-row justify-center items-center px-4 py-2 gap-2 lg:text-xl text-lg text-header-text' href='https://github.com/FernPK' target='_blank'>
              <i className="fa-brands fa-github lg:text-2xl text-xl"></i>
              <p>GitHub</p>
            </a>
            <a className='flex flex-row justify-center items-center px-4 py-2 gap-2 lg:text-xl text-lg text-header-text' href='https://www.freecodecamp.org/fernfofy' target='_blank'>
              <i className="fa-brands fa-free-code-camp lg:text-2xl text-xll"></i>
              <p>freeCodeCamp</p>
            </a>
            <a className='flex flex-row justify-center items-center px-4 py-2 gap-2 lg:text-xl text-lg text-header-text' href='https://codepen.io/fernpk' target='_blank'>
              <i className="fa-brands fa-codepen lg:text-2xl text-xl"></i>
              <p>CodePen</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
