import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
// Static per-item pages (pre-generated)
const P_DistributedSystemSimulator = lazy(() => import('./pages/projects/distributed-system-simulator'))
const P_ReproducibleResearchFramework = lazy(() => import('./pages/projects/reproducible-research-framework'))
const P_VioletDuskTheme = lazy(() => import('./pages/projects/violet-dusk-theme'))
const R_Consensus = lazy(() => import('./pages/research/on-the-efficiency-of-consensus-algorithms-in-dynamic-networks'))
const R_ReproCase = lazy(() => import('./pages/research/reproducibility-in-computational-research-a-case-study'))
const B_Reflections = lazy(() => import('./pages/blog/reflections-on-code-and-clarity'))
const B_Amethyst = lazy(() => import('./pages/blog/building-in-the-amethyst-hours'))
const Research = lazy(() => import('./pages/Research'))
const ResearchDetail = lazy(() => import('./pages/ResearchDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const Archive = lazy(() => import('./pages/Archive'))

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-rebecca">Loading...</div>
  </div>
)

// 404 component
const NotFound = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
    <h1 className="text-4xl font-heading text-rebecca mb-4">404 - Page Not Found</h1>
    <p className="text-gray-300 mb-6">The page you're looking for doesn't exist.</p>
    <a href="/" className="px-6 py-3 bg-rebecca text-white rounded hover:bg-dim-lilac">Go Home</a>
  </div>
)

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-abyss">
        <Navbar />
  <main className="flex-1 pt-16 md:pt-20">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/projects/distributed-system-simulator" element={<P_DistributedSystemSimulator />} />
              <Route path="/projects/reproducible-research-framework" element={<P_ReproducibleResearchFramework />} />
              <Route path="/projects/violet-dusk-theme" element={<P_VioletDuskTheme />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/:id" element={<ResearchDetail />} />
              <Route path="/research/on-the-efficiency-of-consensus-algorithms-in-dynamic-networks" element={<R_Consensus />} />
              <Route path="/research/reproducibility-in-computational-research-a-case-study" element={<R_ReproCase />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/blog/reflections-on-code-and-clarity" element={<B_Reflections />} />
              <Route path="/blog/building-in-the-amethyst-hours" element={<B_Amethyst />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
