import React from 'react'
import { ThemeProvider } from './context/ThemeContext' // 1. Import du Provider
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    // 2. On enveloppe l'application entière
    <ThemeProvider>
      {/* 3. On ajoute les variantes de couleur light/dark (bg-white par défaut, bg-slate-900 en dark) */}
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white font-sans antialiased transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>

        <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800/50">
          © {new Date().getFullYear()} Kevin. Construit avec React & Tailwind.
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App