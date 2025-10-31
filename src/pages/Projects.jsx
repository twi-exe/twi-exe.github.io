import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'

function ProjectCard({p}){
  return (
    <motion.a whileHover={{y:-4}} className="block card" href={p.link || '#'} target="_blank" rel="noopener noreferrer">
      <div className="text-sm text-dim-lilac">{p.tags?.join(' · ')}</div>
      <h3 className="mt-2 text-xl font-semibold text-rebecca">{p.title}</h3>
      <p className="mt-2 text-gray-200 text-sm">{p.description}</p>
    </motion.a>
  )
}

export default function Projects(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-heading text-rebecca">Selected Projects</h1>
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