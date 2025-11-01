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
        {/* Placeholder for EmailJS form */}
        <div className="mt-8">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 bg-violet-smoke border border-ash rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-violet-smoke border border-ash rounded" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 bg-violet-smoke border border-ash rounded"></textarea>
            <button type="submit" className="px-6 py-2 bg-rebecca text-white rounded hover:bg-dim-lilac">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}