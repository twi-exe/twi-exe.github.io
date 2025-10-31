import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Research = lazy(() => import('./pages/Research'))
const Blog = lazy(() => import('./pages/Blog'))
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
        <main className="flex-1">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blog" element={<Blog />} />
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
