import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  const experiences = [
    {
      role: "Développeur Front-End / Full-Stack",
      company: "ISOSKELE (Groupe La Poste)",
      period: "Sept. 2022 — Oct. 2025",
      type: "Alternance puis CDI",
      details: [
        "Création de landing pages et formulaires web interactifs en React.",
        "Conception et intégration de campagnes emailing complexes pour les clients du groupe.",
        "Traitement, gestion et structuration des données clients en base de données.",
        "Automatisation de la génération de newsletters via des scripts Python."
      ],
      tech: ["React", "JavaScript", "Python", "Bases de données", "Agile/Scrum"]
    },
    {
      role: "Développeur Front-End (Stage)",
      company: "Grand-Mercredi",
      period: "Avr. 2021 — Août 2021",
      type: "Stage",
      details: [
        "Conception et développement de solutions logicielles web multi-clients.",
        "Vérification de la faisabilité technique de prototypes UI/UX.",
        "Résolution de bugs, débogage et optimisation de la qualité du code."
      ],
      tech: ["JavaScript", "HTML/CSS", "Débogage"]
    }
  ]

  const education = [
    {
      degree: "Master Ingénierie du logiciel et du web",
      school: "ENSITECH (Cergy)",
      period: "2022 — 2024",
      details: "Formation Bac+5 en alternance axée sur l'architecture logicielle et le web."
    },
    {
      degree: "Licence MIAGE (parcours MIASHS)",
      school: "Université Paris X Nanterre",
      period: "2018 — 2022",
      details: "Méthodes Informatiques Appliquées à la Gestion d'Entreprise."
    }
  ]

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-20 max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 reveal ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center">
        <span className="text-sky-600 dark:text-sky-400 font-mono text-xl mr-2">02.</span> Parcours & Expériences
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* COLONNE EXPÉRIENCES (2/3 de large sur grand écran) */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Expérience Professionnelle
          </h3>

          <div className="space-y-6 border-l-2 border-sky-500/30 pl-6 ml-2">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Puce sur la ligne temporelle */}
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-sky-500 border-4 border-white dark:border-slate-900" />
                
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {exp.role} <span className="text-sky-600 dark:text-sky-400">@ {exp.company}</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                </div>

                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-3">{exp.type}</p>

                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {exp.details.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE FORMATION (1/3 de large) */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Formation
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400">{edu.period}</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1">{edu.degree}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{edu.school}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience