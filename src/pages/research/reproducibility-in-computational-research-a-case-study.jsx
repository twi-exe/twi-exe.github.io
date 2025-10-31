import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ReproducibilityCaseStudy(){
  const item = {
    title: 'Reproducibility in Computational Research: A Case Study',
    authors: 'Twisha Patel',
    year: 2023,
    abstract: 'An analysis of reproducibility challenges in computational experiments, with practical guidelines for researchers.',
    link: '#'
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="max-w-4xl mx-auto">
        <Link to="/research" className="text-dim-lilac hover:text-rebecca mb-6 inline-block">← Back to Research</Link>
        <h1 className="text-4xl font-heading text-rebecca mb-4">{item.title}</h1>
        <div className="text-lg text-gray-300 mb-2">{item.authors} · {item.year}</div>
        <div className="card glass mb-6">
          <h2 className="text-2xl font-semibold text-rebecca mb-4">Abstract</h2>
          <p className="text-gray-200 leading-relaxed">{item.abstract}</p>
        </div>
        <div className="flex gap-4">
          {item.link && item.link !== '#' && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-rebecca text-white rounded hover:bg-dim-lilac">View Paper / Repo</a>
          )}
          <Link to="/research" className="px-6 py-3 border border-ash text-gray-200 rounded hover:bg-violet-smoke">More Research</Link>
        </div>
      </motion.div>
    </div>
  )
}
