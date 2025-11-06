import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto card glass">
        <motion.h1 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold text-rebecca mb-6">About</motion.h1>
        <b> Twisha Patel. </b>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="text-gray-200 leading-relaxed">

          I craft systems and sentences — building software that thinks clearly and writing that feels alive. I’m Twisha Patel, a computer engineering student exploring the edges where logic meets language. My work lives at the intersection of software engineering, research, and reflective design, where I turn complex ideas into quiet, elegant structures.
        </motion.p>
        <br />
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="text-gray-200 leading-relaxed">
        My interests drift across AI/ML, data science, and open source development, where I’m still finding my footing but building steadily. I love clarity — in code, in ideas, and in the way systems fit together. And somewhere between debugging loops and writing reflections, I’m trying to build a life that feels like good design — simple, purposeful, and a little poetic.
        </motion.p>
        
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mt-8">
          <h2 className="text-2xl font-bold text-rebecca mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Artificial Intelligence & Machine Learning.</b> learning how systems learn, think, and sometimes surprise us.</li>
            <li><b>Data Science & Analytics.</b> finding stories in data and building tools that make those stories reproducible.</li>
            <li><b>Academic Writing and Technical Communication.</b> crafting clear and impactful narratives around complex ideas.</li>
            <li><b>Human–Computer Interaction.</b> designing systems that understand users as much as users understand systems.</li>
            <li><b>Open Source Development.</b> contributing to and building tools that empower communities and foster collaboration.</li>
            <li><b>Philosophy & Reflective Writing.</b> studying thought, meaning, and the language behind logic.</li>
          </ul>
        </motion.div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mt-8">
          <h2 className="text-2xl font-bold text-rebecca mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Java</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Javascript</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">C</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Data Science & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">NumPy</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Pandas</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Matplotlib</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Seaborn</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Data Engineering & Databases</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">ETL concepts</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Power BI</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Tableau</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Deep Learning Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">TensorFlow</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Keras</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">PyTorch</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Artificial Intelligence</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">NLP</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">LLMs</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">RAG</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Explainable AI</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Medical Image & Signal Processing</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">MONAI</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">NiBabel</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">NiLearn</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">OpenCV</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">MNE-Python</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Web & Application Development</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Flask</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Django</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">React.js (basic)</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Git</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">GitHub</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Google Colab</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Jupyter</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">VS Code</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Linux</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dim-lilac mb-3">Core Concepts</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Deep Learning</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Data Structures & Algorithms</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Model Deployment</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Model Evaluation</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Research Ethics</span>
                <span className="inline-block bg-rebecca/30 text-white px-3 py-1 rounded-full text-sm font-medium">Data Preprocessing</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mt-8">
          <h2 className="text-2xl font-bold text-rebecca mb-4">Who I am.</h2>
          <p className="text-gray-200 leading-relaxed">
            Hey! It's me. I am also trying to figure out who I am through my work, writing, and the systems I build. I am mostly just trying to live up to my everchanging mind/skillset. I believe in excellence, clarity and purpose. If thats something you resonate with, feel free to reach out!
          </p>
          <div className="mt-6">
            <Link 
              to="/contact" 
              className="inline-block px-6 py-2 bg-rebecca text-white rounded hover:bg-dim-lilac transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}