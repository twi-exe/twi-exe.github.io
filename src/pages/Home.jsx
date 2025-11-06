import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <section className="pt-4 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold leading-tight font-heading text-rebecca"
          >
            Twisha Patel
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}} className="mt-4 text-xl text-gray-300">
            engineer · researcher · writer — a digital study in violet dusk.
          </motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="mt-6 flex gap-4 justify-center">
            <Link to="/projects" className="inline-block px-6 py-3 rounded-md bg-rebecca text-white hover:bg-dim-lilac transition-colors">Explore Work</Link>
            <Link to="/about" className="inline-block px-6 py-3 rounded-md border border-rebecca text-rebecca hover:bg-rebecca hover:text-white transition-colors">About Me</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
