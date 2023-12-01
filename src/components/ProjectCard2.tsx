import React from 'react'
import Image from 'next/image'

const ProjectCard2 = () => {
  return (
    <div className='flex justify-start items-start mx-auto border border-image-border-on-white p-4 rounded-2xl project-card sm:mb-10 mb-6 max-w-screen-xl lg:w-5/6 w-11/12'>
      <div className='sm:w-3/5 w-full self-stretch'>
        <Image src="https://cdn.discordapp.com/attachments/1156240822644260926/1157735186176422008/BunnyJeans.png?ex=6519b06a&is=65185eea&hm=9ce033edfeae850597c9af7236b274a74ba6ea15b30775aae39be91cf10f2722&" alt='BunnyJeans' height={500} width={800} className='h-full rounded-2xl object-cover'></Image>
      </div>
      <div className='px-6 lg:w-2/5 sm:w-3/5 w-full sm:pt-0 pt-4 mx-auto self-center'>
        <div className='xl:px-4 px-0 flex flex-col justify-start items-center gap-4 2xl:mb-10 xl:mb-6 mb-2'>
          <div className='xl:text-2xl text-xl font-semibold text-header-text text-center'>
            <h3>🐰 BunnyJeans</h3>
          </div>
          <div className='xl:text-base text-sm text-body-text-on-white text-center'>
            <p>BunnyJeans is the doll shop website. Customers can search, filter type of doll, add to wishlist, and add to cart. The website is responsive to all devices.</p>
          </div>
          <div className='flex flex-row gap-4'>
            <div className="xl:text-base text-sm text-primary px-2 py-1 rounded-lg border border-primary-light">React</div>
            <div className="xl:text-base text-sm text-primary px-2 py-1 rounded-lg border border-primary-light">CSS</div>
          </div>
        </div>
        <div className='flex flex-row text-header-text justify-center items-start xl:text-xl text-lg lg:font-semibold font-medium'>
          <a className='flex flex-row justify-center items-center px-4 py-2 gap-2' href='https://github.com/FernPK/BunnyJeans' target='_blank'> 
            <i className="fa-brands fa-github"></i>
            <p className='hover:underline'>GitHub</p>
          </a>
          <a className='flex flex-row justify-center items-center px-4 py-2 gap-2' href='https://bunnyjeans.vercel.app' target='_blank'> 
            <i className="fa-regular fa-paper-plane"></i>
            <p className='hover:underline'>Live demo</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard2