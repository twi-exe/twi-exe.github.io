import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto card glass">
        <motion.h1 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} className="text-3xl font-heading text-rebecca mb-6">About</motion.h1>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="text-gray-200 leading-relaxed">
          I craft systems and sentences. My work sits at the intersection of software engineering, research, and reflective writing — small experiments in clarity under violet light. Currently exploring distributed systems, reproducible research, and ways to make complex ideas feel like a quiet conversation.
        </motion.p>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mt-8">
          <h2 className="text-xl font-semibold text-rebecca mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Distributed algorithms and consensus protocols</li>
            <li>Reproducible computational experiments</li>
            <li>Academic writing and technical communication</li>
            <li>Dark mode UI/UX design</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}