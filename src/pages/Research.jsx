import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import research from '../data/research.json'

function ResearchCard({r}){
  const slugMap = {
    1: 'on-the-efficiency-of-consensus-algorithms-in-dynamic-networks',
    2: 'reproducibility-in-computational-research-a-case-study'
  }
  const to = r.slug ? `/research/${r.slug}` : (slugMap[r.id] ? `/research/${slugMap[r.id]}` : `/research/${r.id}`)

  return (
    <motion.div whileHover={{scale:1.01}} className="card">
      <h4 className="text-rebecca font-semibold text-lg">{r.title}</h4>
      <div className="text-sm text-gray-300 mt-2">{r.authors} · {r.year}</div>
      <p className="mt-3 text-gray-200 text-sm">{r.abstract}</p>
      <div className="mt-3 text-sm">
        <Link to={to} className="text-dim-lilac hover:text-rebecca">Read More →</Link>
      </div>
    </motion.div>
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