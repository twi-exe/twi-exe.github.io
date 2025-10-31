import React from 'react'
import { motion } from 'framer-motion'

export default function Archive(){
  // Placeholder for legacy works or notebooks
  const archives = [
    { id: 1, title: 'Old Project 1', description: 'A relic from the past.', link: '#' },
    { id: 2, title: 'Notebook: Thoughts on X', description: 'Reflections.', link: '#' }
  ]

  return (
    <section id="archive" className="py-12">
      <h2 className="text-2xl font-heading text-rebecca mb-4">Archive</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {archives.map(a => (
          <motion.article key={a.id} className="card">
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-gray-200 text-sm">{a.description}</p>
            <a className="mt-3 inline-block text-dim-lilac" href={a.link}>View</a>
          </motion.article>
        ))}
      </div>
      {/* Future: Dynamic “Lab / Vault” area */}
    </section>
  )
}