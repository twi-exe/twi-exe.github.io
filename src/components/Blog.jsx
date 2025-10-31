import React from 'react'
import { motion } from 'framer-motion'
import blogs from '../data/blog.json'

export default function Blog(){
  return (
    <section id="blog" className="py-12">
      <h2 className="text-2xl font-heading text-rebecca mb-4">Writing & Notes</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {blogs.map(b => (
          <motion.article key={b.id} className="card">
            <div className="text-sm text-dim-lilac">{b.date}</div>
            <h3 className="mt-2 text-lg font-semibold">{b.title}</h3>
            <p className="mt-2 text-gray-200 text-sm">{b.excerpt}</p>
            <div className="mt-3">
              <a className="text-dim-lilac" href={b.link || '#'}>Read more</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
