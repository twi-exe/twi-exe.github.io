import React from 'react'
import { motion } from 'framer-motion'

export default function Archive(){
  // Placeholder for legacy works or notebooks
  const archives = [
    { id: 1, title: 'Old Project 1', description: 'A relic from the past.', link: '#' },
    { id: 2, title: 'Notebook: Thoughts on X', description: 'Reflections.', link: '#' }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-heading text-rebecca">Archive</h1>
        <p className="mt-2 text-gray-300">Legacy works, experiments, and forgotten ideas.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {archives.map(a => (
          <motion.article key={a.id} className="card" whileHover={{y:-2}}>
            <h3 className="text-lg font-semibold text-rebecca">{a.title}</h3>
            <p className="mt-2 text-gray-200 text-sm">{a.description}</p>
            <a className="mt-3 inline-block text-dim-lilac hover:text-rebecca" href={a.link} target="_blank" rel="noopener noreferrer">View</a>
          </motion.article>
        ))}
      </div>
      {/* Future: Dynamic "Lab / Vault" area */}
    </div>
  )
}