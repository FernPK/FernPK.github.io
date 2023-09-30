import React from 'react'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='flex justify-start items-start mx-auto border border-image-border-on-white p-4 rounded-2xl project-card mb-10 max-w-screen-xl 2xl:w-5/6'>
      <div className='w-3/5'>
        <Image src="https://cdn.discordapp.com/attachments/1156240822644260926/1157463178813382718/react_project_1.png?ex=6518b316&is=65176196&hm=5896099b4851df7b4761aeac329ec30a93c468b6ed0465f93837ec6971b3e64a&" alt='Random Quote Machine' height={500} width={800} className='w-full rounded-2xl'></Image>
      </div>
      <div className='px-6 py-10 w-2/5 mx-auto'>
        <div className='px-4 flex flex-col justify-start items-center gap-4 mb-10'>
          <div className='text-2xl font-semibold text-header-text'>
            <h3>🖐️ Five React Project</h3>
          </div>
          <div className='text-base text-body-text-on-white text-center'>
            <p>These projects are part of the FCC Front End Development Libraries course which includes a Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator, and 25 + 5 Clock.</p>
          </div>
          <div className='flex flex-row gap-4'>
            <div className="text-base text-primary px-2 py-1 rounded-lg border border-primary-light">React</div>
            <div className="text-base text-primary px-2 py-1 rounded-lg border border-primary-light">CSS</div>
          </div>
        </div>
        <div className='flex flex-row text-header-text justify-center items-start text-xl font-semibold'>
          <div className='flex flex-row justify-center items-center px-4 py-2 gap-2'>
            <i className="fa-brands fa-codepen"></i>
            <p>CodePen</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard