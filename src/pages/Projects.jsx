import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'

function ProjectCard({p}){
  // Map certain project ids to pre-generated static slugs
  // Prefer explicit slug field on the project object. Fall back to an explicit map then id.
  const slugMap = {
    1: 'distributed-system-simulator',
    2: 'reproducible-research-framework',
    3: 'violet-dusk-theme'
  }

  const to = p.slug ? `/projects/${p.slug}` : (slugMap[p.id] ? `/projects/${slugMap[p.id]}` : `/projects/${p.id}`)

  return (
    <motion.div whileHover={{y:-4}} className="card glass">
      <div className="text-sm text-dim-lilac">{p.tags?.join(' · ')}</div>
      <h3 className="mt-2 text-xl font-bold text-rebecca">{p.title}</h3>
      <p className="mt-2 text-gray-200 text-sm">{p.description}</p>
      <Link to={to} className="mt-3 inline-block text-dim-lilac hover:text-rebecca">View Details →</Link>
    </motion.div>
  )
}

export default function Projects(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-rebecca">Selected Projects</h1>
        <p className="mt-2 text-gray-300">A collection of work spanning engineering, research, and experimentation.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}

// Helper to map ids to slugs (kept small and explicit)
export const projectSlug = (id)=>{
  switch(id){
    case 1: return '/projects/distributed-system-simulator'
    case 2: return '/projects/reproducible-research-framework'
    case 3: return '/projects/violet-dusk-theme'
    default: return `/projects/${id}`
  }
}