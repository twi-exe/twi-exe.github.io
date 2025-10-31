import React from 'react'
import { motion } from 'framer-motion'
import research from '../data/research.json'

function ResearchCard({r}){
  return (
    <motion.article whileHover={{scale:1.01}} className="card">
      <h3 className="text-rebecca font-semibold text-lg">{r.title}</h3>
      <div className="text-sm text-gray-300 mt-2">{r.authors} · {r.year}</div>
      <p className="mt-3 text-gray-200 text-sm">{r.abstract}</p>
      <div className="mt-3 text-sm">
        <a className="text-dim-lilac hover:text-rebecca" href={r.link || '#'} target="_blank" rel="noopener noreferrer">Paper / Repo</a>
      </div>
    </motion.article>
  )
}

export default function Research(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-heading text-rebecca">Research</h1>
        <p className="mt-2 text-gray-300">Publications and ongoing work in distributed systems and computational research.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {research.map(r => <ResearchCard key={r.id} r={r} />)}
      </div>
    </div>
  )
}