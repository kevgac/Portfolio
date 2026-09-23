import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white font-sans antialiased transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800/50">
          © {new Date().getFullYear()} Kevin GAC. Construit avec React & Tailwind.
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App