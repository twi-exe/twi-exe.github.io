import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import blog from '../data/blog.json'
import research from '../data/research.json'

export default function Home(){
  const skills = ['NLP', 'ML', 'React', 'PyTorch', 'Healthcare', 'Browser Extensions', 'Medical Imaging', 'GNN', 'LLM']
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/twi-exe' },
    { name: 'Email', url: 'mailto:twishapatel.hq@gmail.com' }
  ]

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

      {/* Featured Projects */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-rebecca mb-8"
          >
            Featured Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-ash/10 border border-ash/50 rounded-lg p-6 hover:bg-ash/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-rebecca/20 text-rebecca rounded text-sm">{tag}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.slug}`} className="text-dim-lilac hover:underline">View Project</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-rebecca mb-8"
          >
            Recent Writings
          </motion.h2>
          <div className="space-y-6">
            {blog.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-ash/10 border border-ash/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-2">{post.excerpt}</p>
                <p className="text-sm text-gray-400 mb-4">{new Date(post.date).toLocaleDateString()}</p>
                <Link to={`/blog/${post.slug}`} className="text-dim-lilac hover:underline">Read More</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-rebecca mb-8"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-rebecca/20 text-rebecca rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Highlight */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-rebecca mb-8"
          >
            Research Highlight
          </motion.h2>
          {research.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-ash/10 border border-ash/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 mb-2">{item.abstract}</p>
              <p className="text-sm text-gray-400 mb-4">Authors: {item.authors} | Year: {item.year}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-dim-lilac hover:underline">View Paper</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Links and CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-rebecca mb-8"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-dim-lilac transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="inline-block px-8 py-4 rounded-md bg-rebecca text-white hover:bg-dim-lilac transition-colors text-lg font-medium">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
