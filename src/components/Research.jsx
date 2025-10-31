import React from 'react'
import { motion } from 'framer-motion'
import research from '../data/research.json'

function ResearchCard({r}){
  return (
    <motion.article whileHover={{scale:1.01}} className="card">
      <h4 className="text-rebecca font-semibold">{r.title}</h4>
      <div className="text-sm text-gray-300 mt-2">{r.authors} · {r.year}</div>
      <p className="mt-3 text-gray-200 text-sm">{r.abstract}</p>
      <div className="mt-3 text-sm">
        <a className="text-dim-lilac" href={r.link || '#'}>Paper / Repo</a>
      </div>
    </motion.article>
  )
}

export default function Research(){
  return (
    <section id="research" className="py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-rebecca">Research</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {research.map(r => <ResearchCard key={r.id} r={r} />)}
      </div>
    </section>
  )
}
