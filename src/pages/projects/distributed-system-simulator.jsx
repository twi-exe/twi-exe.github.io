import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function DistributedSystemSimulator(){
  const item = {
    title: 'Distributed System Simulator',
    description: 'A tool for simulating distributed algorithms in a controlled environment.',
    tags: ['Python','Networking','Research'],
    link: 'https://github.com/twisha/distributed-sim',
    images: []
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-dim-lilac hover:text-rebecca mb-6 inline-block">← Back to Projects</Link>
        <h1 className="text-4xl font-heading text-rebecca mb-4">{item.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-violet-smoke text-gray-200 rounded text-sm">{tag}</span>
          ))}
        </div>
        <div className="card glass mb-6">
          <p className="text-gray-200 leading-relaxed text-lg">{item.description}</p>
        </div>
        <div className="flex gap-4">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-rebecca text-white rounded hover:bg-dim-lilac">View Project</a>
          <Link to="/projects" className="px-6 py-3 border border-ash text-gray-200 rounded hover:bg-violet-smoke">More Projects</Link>
        </div>
      </motion.div>
    </div>
  )
}
