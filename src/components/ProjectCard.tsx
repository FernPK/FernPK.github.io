import React from 'react'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='flex justify-start items-start mx-auto border border-image-border-on-white p-4 rounded-2xl project-card sm:mb-10 mb-6 max-w-screen-xl lg:w-5/6 w-11/12'>
      <div className='sm:w-3/5 w-full self-stretch'>
        <Image src="https://cdn.discordapp.com/attachments/1156240822644260926/1157463178813382718/react_project_1.png?ex=6518b316&is=65176196&hm=5896099b4851df7b4761aeac329ec30a93c468b6ed0465f93837ec6971b3e64a&" alt='Random Quote Machine' height={500} width={800} className='h-full rounded-2xl object-cover'></Image>
      </div>
      <div className='px-6 lg:w-2/5 sm:w-3/5 w-full sm:pt-0 pt-4 mx-auto self-center'>
        <div className='xl:px-4 px-0 flex flex-col justify-start items-center gap-4 2xl:mb-10 xl:mb-6 mb-2'>
          <div className='xl:text-2xl text-xl font-semibold text-header-text text-center'>
            <h3>🖐️ Five React Project</h3>
          </div>
          <div className='xl:text-base text-sm text-body-text-on-white text-center'>
            <p>These projects are part of the FCC Front End Development Libraries course which includes a Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator, and 25 + 5 Clock.</p>
          </div>
          <div className='flex flex-row gap-4'>
            <div className="xl:text-base text-sm text-primary px-2 py-1 rounded-lg border border-primary-light">React</div>
            <div className="txl:text-base text-sm text-primary px-2 py-1 rounded-lg border border-primary-light">CSS</div>
          </div>
        </div>
        <div className='flex flex-row text-header-text justify-center items-start xl:text-xl text-lg lg:font-semibold font-medium'>
          <a className='flex flex-row justify-center items-center px-4 py-2 gap-2' href='https://www.freecodecamp.org/certification/fernfofy/front-end-development-libraries' target='_blank'> 
            <i className="fa-brands fa-codepen"></i>
            <p className='hover:underline'>CodePen</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard