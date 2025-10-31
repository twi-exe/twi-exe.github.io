import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import blogs from '../data/blog.json'

export default function BlogDetail(){
  const { id } = useParams()
  const item = blogs.find(b => b.id === parseInt(id))

  if (!item) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-heading text-rebecca mb-4">Blog Post Not Found</h1>
        <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="px-6 py-3 bg-rebecca text-white rounded hover:bg-dim-lilac">Back to Blog</Link>
      </div>
    )
  }

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
        <footer className="mt-8 flex gap-4">
          <Link to="/blog" className="px-6 py-3 border border-ash text-gray-200 rounded hover:bg-violet-smoke">
            More Posts
          </Link>
          <button
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="px-6 py-3 border border-ash text-gray-200 rounded hover:bg-violet-smoke"
          >
            Back to Top
          </button>
        </footer>
      </motion.article>
    </div>
  )
}