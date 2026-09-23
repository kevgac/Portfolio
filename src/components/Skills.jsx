import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  // Vos compétences réorganisées par pôles d'expertise
  const techStack = [
    {
      category: "Backend & Logiciel",
      skills: ["Java (Spring Boot 3, Security 6, JWT)", "JPA / Hibernate", "PHP Symfony", "Python (Django)", "C / C++"]
    },
    {
      category: "Frontend & UI",
      skills: ["React", "Angular & RxJS", "JavaScript (ES6+)", "Tailwind CSS v4", "Bootstrap", "HTML5 / CSS / SASS"]
    },
    {
      category: "Bases de données",
      skills: ["PostgreSQL", "Redis (Caching)", "MySQL", "SQL Server", "PL/SQL"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker & Docker Compose", "Git / GitHub / GitLab", "CI/CD (GitHub Actions)", "Linux", "Maven"]
    },
    {
      category: "Méthodes & Outils",
      skills: ["Agile / Scrum / Kanban", "Jira / Trello", "Figma / Adobe XD", "IA & LLM (Dev Assistance)", "WordPress"]
    },
    {
      category: "Langues & Soft Skills",
      skills: ["Français (Natif)", "Anglais (Professionnel)", "Polonais", "Résolution de problèmes", "Autonomie"]
    }
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 reveal ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center">
        <span className="text-sky-600 dark:text-sky-400 font-mono text-xl mr-2">01.</span> Mes Compétences
      </h2>

      {/* Grille responsive : 1 col sur mobile, 2 col sur tablette, 3 col sur grand écran */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((group, index) => (
          <div 
            key={index} 
            className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-6 rounded-lg backdrop-blur-sm flex flex-col justify-between hover:border-sky-500/50 transition-colors duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1.5 rounded border border-slate-300 dark:border-slate-700/50 hover:border-sky-500 dark:hover:border-sky-400/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills