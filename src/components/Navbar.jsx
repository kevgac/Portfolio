import React from 'react'
import { useTheme } from '../context/ThemeContext' // 1. Import du hook

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // 2. Récupération des données du thème

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white py-4 px-6 flex justify-between items-center z-50 transition-colors duration-300">
      <div className="text-xl font-bold text-sky-500 dark:text-sky-400 tracking-wider">
        KEVIN.DEV
      </div>
      
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <li><a href="#home" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Accueil</a></li>
          <li><a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Compétences</a></li>
          <li><a href="#projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Projets</a></li>
        </ul>

        {/* 3. BOUTON DE CHANGEMENT DE MODE */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Changer de thème"
        >
          {isDarkMode ? (
            // Icône Soleil pour repasser en mode clair
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.343l.707-.707N12 2a10 10 0 11-10 10A10 10 0 0112 2z" />
            </svg>
          ) : (
            // Icône Lune pour repasser en mode sombre
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar