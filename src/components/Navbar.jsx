import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-abyss/60 backdrop-blur-md border-b border-ash">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className="w-10 h-10 rounded-full bg-rebecca flex items-center justify-center text-white font-bold">T</div>
          <div className="text-sm font-semibold">Twisha Patel</div>
        </NavLink>
        <nav className={`md:flex gap-6 text-sm text-gray-200 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-abyss/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border-b-0 border-ash md:border-none p-4 md:p-0`}>
          <NavLink to="/" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/research" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"} onClick={() => setIsMenuOpen(false)}>Research</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-dim-lilac" : "hover:text-dim-lilac"} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden text-sm px-3 py-1 border border-ash rounded hover:bg-rebecca/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}
