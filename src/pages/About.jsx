import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto card glass">
        <motion.h1 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold text-rebecca mb-6">About</motion.h1>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="text-gray-200 leading-relaxed">
          I craft systems and sentences — building software that thinks clearly and writing that feels alive. I’m Twisha Patel, a computer engineering student exploring the edges where logic meets language. My work lives at the intersection of software engineering, research, and reflective design, where I turn complex ideas into quiet, elegant structures.
        </motion.p>
        <br />
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="text-gray-200 leading-relaxed">
        My interests drift across AI/ML, data science, and open source development, where I’m still finding my footing but building steadily. I love clarity — in code, in ideas, and in the way systems fit together. And somewhere between debugging loops and writing reflections, I’m trying to build a life that feels like good design — simple, purposeful, and a little poetic.
        </motion.p>
        
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mt-8">
          <h2 className="text-xl font-semibold text-rebecca mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Artificial Intelligence & Machine Learning</b> learning how systems learn, think, and sometimes surprise us.</li>
            <li><b>Data Science & Analytics</b> finding stories in data and building tools that make those stories reproducible.</li>
            <li><b>Academic Writing and Technical Communication</b> crafting clear and impactful narratives around complex ideas.</li>
            <li><b>Human–Computer Interaction</b> designing systems that understand users as much as users understand systems.</li>
            <li><b>Open Source Development</b> contributing to and building tools that empower communities and foster collaboration.</li>
            <li><b>Philosophy & Reflective Writing</b> studying thought, meaning, and the language behind logic.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}