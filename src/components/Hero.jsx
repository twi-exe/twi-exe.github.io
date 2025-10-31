import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="pt-24 pb-12">
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="mt-6">
          <a href="#projects" className="inline-block px-6 py-3 rounded-md bg-rebecca text-white hover:bg-dim-lilac">Explore Work</a>
        </motion.div>
      </div>
    </section>
  )
}
