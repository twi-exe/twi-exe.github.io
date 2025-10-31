import React from 'react'

export default function Navbar(){
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-abyss/60 backdrop-blur-md border-b border-ash">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rebecca flex items-center justify-center text-white font-bold">T</div>
          <div className="text-sm font-semibold">Twisha Patel</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-200">
          <button onClick={()=>scrollTo('hero')} className="hover:text-dim-lilac">Home</button>
          <button onClick={()=>scrollTo('about')} className="hover:text-dim-lilac">About</button>
          <button onClick={()=>scrollTo('projects')} className="hover:text-dim-lilac">Projects</button>
          <button onClick={()=>scrollTo('research')} className="hover:text-dim-lilac">Research</button>
          <button onClick={()=>scrollTo('blog')} className="hover:text-dim-lilac">Blog</button>
          <button onClick={()=>scrollTo('contact')} className="hover:text-dim-lilac">Contact</button>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm px-3 py-1 border border-ash rounded hover:bg-rebecca/10">Toggle</button>
        </div>
      </div>
    </header>
  )
}
