import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-abyss/60 backdrop-blur-md border-b border-ash">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rebecca flex items-center justify-center text-white font-bold">T</div>
          <div className="text-sm font-semibold">Twisha Patel</div>
        </NavLink>
        <nav className="hidden md:flex gap-6 text-sm text-gray-200">
          <NavLink to="/" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"}>Projects</NavLink>
          <NavLink to="/research" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"}>Research</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm px-3 py-1 border border-ash rounded hover:bg-rebecca/10">Toggle</button>
        </div>
      </div>
    </header>
  )
}
