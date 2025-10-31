import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto card glass">
        <motion.h2 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} className="text-2xl font-heading text-rebecca">About</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="mt-4 text-gray-200">
          I craft systems and sentences. My work sits at the intersection of software engineering, research, and reflective writing — small experiments in clarity under violet light. Currently exploring distributed systems, reproducible research, and ways to make complex ideas feel like a quiet conversation.
        </motion.p>
      </div>
    </section>
  )
}
