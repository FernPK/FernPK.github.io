import NavBar from '../components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "PornnapatK | Portfolio ",
  description: "'Pornnapat Ketplung's portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/beddddba67.js" crossOrigin="anonymous" />
        {/* <Script src='scripts/activeScroll.tsx'></Script> */}
      </head>  
      <body className={inter.className}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
