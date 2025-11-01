import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send contact email to you
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template for you
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Send auto-reply to sender
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID, // Template for sender
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      e.target.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="from_name"
              placeholder="Name" 
              required
              className="w-full p-3 bg-violet-smoke border border-ash rounded focus:border-rebecca focus:outline-none" 
            />
            <input 
              type="email" 
              name="from_email"
              placeholder="Email" 
              required
              className="w-full p-3 bg-violet-smoke border border-ash rounded focus:border-rebecca focus:outline-none" 
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              required
              className="w-full p-3 bg-violet-smoke border border-ash rounded focus:border-rebecca focus:outline-none" 
            />
            <textarea 
              name="message"
              placeholder="Message" 
              rows="4" 
              required
              className="w-full p-3 bg-violet-smoke border border-ash rounded focus:border-rebecca focus:outline-none resize-none"
            ></textarea>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-6 py-2 bg-rebecca text-white rounded hover:bg-dim-lilac disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}