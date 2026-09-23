import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6 pt-24 pb-12">
      
      {/* Surtitre */}
      <p className="text-sky-600 dark:text-sky-400 font-mono mb-3 tracking-wide">
        Bonjour, je m'appelle
      </p>
      
      {/* Nom */}
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
        Kevin GAC.
      </h1>
      
      {/* Métier / Titre principal */}
      <h2 className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-6 leading-tight">
        Développeur Java / Spring Boot & Fullstack.
      </h2>
      
      {/* Paragraphe de présentation (Option 2 sélectionnée) */}
      <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
        Diplômé d'un <strong className="font-semibold text-slate-800 dark:text-slate-200">Bac+5 en Ingénierie du logiciel et du web</strong> et fort de 3 ans d'expérience (alternance & CDI), je conçois des applications web complètes et performantes. Mon expertise s'étend du backend Java (<strong className="font-semibold text-slate-800 dark:text-slate-200">Spring Boot, Spring Security, JWT, Redis</strong>) au frontend moderne (<strong className="font-semibold text-slate-800 dark:text-slate-200">React, Angular, Tailwind CSS</strong>).
        <br />
        <span className="inline-block mt-4 font-semibold text-sky-600 dark:text-sky-400">
          💼 Actuellement à la recherche d'un poste de Développeur Java / Fullstack / Front-End. Disponible dès maintenant !
        </span>
      </p>

      {/* Bloc d'actions : Téléchargement CV + Bouton Projets */}
      <div className="flex flex-wrap gap-4 items-center">
        <a 
          href="/CV_Kevin.pdf" 
          download="CV_Kevin_GAC_Developpeur_Java.pdf"
          className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded shadow-lg shadow-sky-600/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Télécharger mon CV</span>
        </a>

        <a 
          href="#projects" 
          className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-sky-500 text-slate-700 dark:text-slate-300 font-medium rounded transition-all duration-300"
        >
          Découvrir mes réalisations
        </a>
      </div>

    </section>
  )
}

export default Hero