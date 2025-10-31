import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'

function ProjectCard({p}){
  return (
    <motion.a whileHover={{y:-4}} className="block card" href={p.link || '#'}>
      <div className="text-sm text-dim-lilac">{p.tags?.join(' · ')}</div>
      <h3 className="mt-2 text-xl font-semibold text-rebecca">{p.title}</h3>
      <p className="mt-2 text-gray-200 text-sm">{p.description}</p>
    </motion.a>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading text-rebecca">Selected Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}
