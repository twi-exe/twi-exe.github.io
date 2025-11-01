import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-ash/50 mt-12">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-400">
        <div className="mb-2">Built in the amethyst hours.</div>
        <div>© {new Date().getFullYear()} Twisha Patel — <span className="text-dim-lilac">twishapatel.hq@gmail.com</span></div>
      </div>
    </footer>
  )
}
