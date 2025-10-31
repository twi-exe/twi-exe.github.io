import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <Research />
      <Blog />
      <Contact />
    </div>
  )
}
