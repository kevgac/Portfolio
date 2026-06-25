import React from 'react'

const Skills = () => {
  const techStack = [
    { category: "Backend", skills: ["Java 21", "Spring Boot 3", "Spring Security 6", "JPA / Hibernate"] },
    { category: "Frontend", skills: ["React", "JavaScript (ES6+)", "Tailwind CSS v4", "HTML5 / CSS3"] },
    { category: "Data & Optimisation", skills: ["PostgreSQL", "Redis (Caching)", "SQL"] },
    { category: "DevOps & Outils", skills: ["Docker & Docker Compose", "Git / GitHub", "Maven"] }
  ]

  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center">
        <span className="text-sky-600 dark:text-sky-400 font-mono text-xl mr-2">01.</span> Mes Compétences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techStack.map((group, index) => (
          // bg-slate-50 en mode clair, bg-slate-800/40 en mode sombre
          <div key={index} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex} 
                  className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700/50 hover:border-sky-500 dark:hover:border-sky-400/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills