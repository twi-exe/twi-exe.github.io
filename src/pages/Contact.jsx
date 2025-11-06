import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-2xl mx-auto card glass">
        <motion.h2 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} className="text-2xl font-heading text-rebecca">Get in Touch</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="mt-4 text-gray-200">
          For collaborations, questions, or just to say hello — reach out.
        </motion.p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-dim-lilac">Email:</span>
            <a href="mailto:twishapatel.hq@gmail.com" className="text-gray-200 hover:text-rebecca">twishapatel.hq@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-dim-lilac">GitHub:</span>
            <a href="https://github.com/twi-exe" className="text-gray-200 hover:text-rebecca">@twi-exe</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-dim-lilac">LinkedIn:</span>
            <a href="https://linkedin.com/in/dte-gecbh-com-twisha-patel" className="text-gray-200 hover:text-rebecca">Twisha Patel</a>
          </div>
        </div>
        <div className="mt-8">
          <a 
            href="mailto:twishapatel.hq@gmail.com" 
            className="inline-block px-6 py-2 bg-rebecca text-white rounded hover:bg-dim-lilac transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}