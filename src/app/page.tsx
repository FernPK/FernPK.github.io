'use client'
import About from '@/components/about'
import Contact from '@/components/contact'
import Home from '@/components/home'
import Projects from '@/components/projects'
import Script from 'next/script'

export default function Main() {
  return (
    <>
      <Script src="/scripts/activeScroll.ts" type='text/typescript' onLoad={() => console.log('Script has loaded')}/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
