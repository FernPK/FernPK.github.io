import React from 'react'
import Image from 'next/image'

const ProjectCard3 = () => {
  return (
    <div className='flex justify-start items-start mx-auto border border-image-border-on-white p-4 rounded-2xl project-card sm:mb-10 mb-6 max-w-screen-xl lg:w-5/6 w-11/12'>
      <div className='sm:w-3/5 w-full self-stretch'>
        <Image src="https://cdn.discordapp.com/attachments/1156240822644260926/1157686525123887134/Safe_box_system.png?ex=65198318&is=65183198&hm=99d46dc22fdca9dc570a2d01a28fe0d23a92b4cc4d758a9007b7ac3d14d22e54&" alt='Safe box system' height={500} width={800} className='h-full rounded-2xl object-cover'></Image>
      </div>
      <div className='px-6 lg:w-2/5 sm:w-3/5 w-full sm:pt-0 pt-4 mx-auto self-center'>
        <div className='xl:px-4 px-0 flex flex-col justify-start items-center gap-4 2xl:mb-10 xl:mb-6 mb-2'>
          <div className='xl:text-2xl text-xl font-semibold text-header-text text-center'>
            <h3>🗄️ Safe box system</h3>
          </div>
          <div className='xl:text-base text-sm text-body-text-on-white text-center'>
            <p>a FARM stack project (FastAPI, React, and MongoDB) connected with LOLIN D32 PRO. This web application can control the safe box system and display the data from the sensors.</p>
          </div>
          <div className='flex flex-row gap-4'>
            <div className="xl:text-base text-sm text-primary px-2 py-1 rounded-lg border border-primary-light">React</div>
            <div className="xl:text-base text-sm text-primary px-2 py-1 rounded-lg border border-primary-light">CSS</div>
          </div>
        </div>
        <div className='flex flex-row text-header-text justify-center items-start xl:text-xl text-lg lg:font-semibold font-medium'>
          <a className='flex flex-row justify-center items-center px-4 py-2 gap-2' href='https://github.com/exceed-group4/frontend_project' target='_blank'> 
            <i className="fa-brands fa-github"></i>
            <p className='hover:underline'>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard3