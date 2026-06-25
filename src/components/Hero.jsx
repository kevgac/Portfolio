import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6 pt-16">
      <p className="text-sky-600 dark:text-sky-400 font-mono mb-3 tracking-wide">Bonjour, je m'appelle</p>
      
      {/* text-slate-900 en mode clair, text-slate-100 en mode sombre */}
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        Kevin.
      </h1>
      
      {/* text-slate-600 en mode clair, text-slate-400 en mode sombre */}
      <h2 className="text-4xl md:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-6 leading-tight">
        Je construis des applications Fullstack robustes.
      </h2>
      
      <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
        Développeur spécialisé dans l'écosystème **Java / Spring Boot** et le développement frontend moderne avec **React**. Passionné par l'architecture logicielle, la sécurité (JWT) et l'optimisation des performances (Redis, Docker).
      </p>
      
      <a 
        href="#projects" 
        className="px-6 py-3 border border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400 font-medium rounded hover:bg-sky-600/10 dark:hover:bg-sky-400/10 transition-all duration-300 transform hover:-translate-y-1"
      >
        Découvrir mes projets
      </a>
    </section>
  )
}

export default Hero