import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import blogs from '../data/blog.json'

function BlogPreview({b}){
  const slugMap = {
    1: 'reflections-on-code-and-clarity',
    2: 'building-in-the-amethyst-hours'
  }
  const to = b.slug ? `/blog/${b.slug}` : (slugMap[b.id] ? `/blog/${slugMap[b.id]}` : `/blog/${b.id}`)

  return (
    <motion.article className="card glass" whileHover={{y:-2}}>
      <div className="text-sm text-dim-lilac">{b.date}</div>
      <h3 className="mt-2 text-lg font-bold text-rebecca">{b.title}</h3>
      <div className="mt-2 text-gray-200 text-sm prose prose-invert max-w-none">
        <ReactMarkdown>{b.excerpt}</ReactMarkdown>
      </div>
      <div className="mt-3">
        <Link to={to} className="text-dim-lilac hover:text-rebecca">Read more →</Link>
      </div>
    </motion.article>
  )
}

export default function Blog(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-rebecca">Writing & Notes</h1>
        <p className="mt-2 text-gray-300">Reflections on code, research, and the creative process.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {blogs.map(b => (
          <BlogPreview key={b.id} b={b} />
        ))}
      </div>
    </div>
  )
}