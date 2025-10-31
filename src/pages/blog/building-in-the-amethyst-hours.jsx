import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import blogs from '../../data/blog.json'

export default function BuildingInTheAmethystHours(){
  const item = blogs.find(b => b.id === 2)

  if(!item) return null

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.article initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="max-w-4xl mx-auto">
        <Link to="/blog" className="text-dim-lilac hover:text-rebecca mb-6 inline-block">← Back to Blog</Link>
        <header className="mb-8">
          <h1 className="text-4xl font-heading text-rebecca mb-4">{item.title}</h1>
          <div className="text-lg text-gray-300">{item.date}</div>
        </header>
        <div className="card glass">
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </div>
        </div>
      </motion.article>
    </div>
  )
}
