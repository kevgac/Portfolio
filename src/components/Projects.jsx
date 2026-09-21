import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation' // 1. Importation du hook d'animation

const Projects = () => {
  // 2. Utilisation du hook pour la section Projets
  const [sectionRef, isVisible] = useScrollAnimation();

  // État pour stocker les Todos du Projet 1
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Appel HTTP vers l'API Spring Boot
  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then((response) => {
        if (!response.ok) throw new Error('Impossible de récupérer les tâches')
        return response.json()
      })
      .then((data) => {
        setTodos(data.slice(0, 3))
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Liste de tes projets (Projets 2, 3, 4 et 5)
  const myProjects = [
    {
      id: 2,
      title: "Projet 2 : Consommation d'API & Caching Redis",
      description: "Application backend connectée à une API externe avec optimisation des performances. Intégration de Redis pour mettre en cache les requêtes fréquentes et réduire la latence.",
      tech: ["Spring Boot", "Redis", "Docker Compose", "REST Client"],
      github: "https://github.com/kevgac/API-Meteo"
    },
    {
      id: 3,
      title: "Projet 3 : API Auth JWT Complète",
      description: "Système de sécurité et d'authentification complet et stateless. Gestion des inscriptions, connexions, chiffrement des mots de passe avec BCrypt et protection des routes par rôles (USER/ADMIN).",
      tech: ["Spring Security 6", "JWT (JJWT)", "PostgreSQL", "Docker"],
      github: "https://github.com/kevgac/API_Auth_JWT"
    },
    {
      id: 4,
      title: "Projet 4 : Talk Application (Chat Real-time)",
      description: "Application de messagerie instantanée en temps réel. Permet l'envoi et la réception de messages immédiats sans rafraîchissement de la page grâce à une architecture bidirectionnelle.",
      tech: ["Java", "WebSockets", "Spring Boot", "Real-time"],
      github: "https://github.com/kevgac/Talk-Application"
    },
    {
      id: 5,
      title: "Projet 5 : Web Scraping Python",
      description: "Script d'automatisation conçu pour extraire et structurer les données de sites web cibles. Gestion du parsing HTML, des requêtes asynchrones et du stockage des données.",
      tech: ["Python", "BeautifulSoup", "Scraping", "Automation"],
      github: "https://github.com/kevgac/Web_Scraping_with_Python"
    }
  ]

  return (
    // 3. Liaison de la référence et injection de la classe dynamique 'reveal'
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 reveal ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center">
        <span className="text-sky-600 dark:text-sky-400 font-mono text-xl mr-2">02.</span> Mes Réalisations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARTE DE L'API TODO (PROJET 1) */}
        <div className="bg-slate-50 dark:bg-slate-800/40 border border-sky-500/30 p-6 rounded-lg flex flex-col justify-between shadow-md dark:shadow-lg dark:shadow-sky-500/5 group">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <svg className="w-10 h-10 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="bg-sky-500/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400 text-xs px-2 py-1 rounded font-mono font-medium">Live Connected</span>
              </div>
              <a href="https://github.com/kevgac/Todo_API" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.061.069-.061 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 mb-2">
              Projet 1 : API Todo & Gestion de Tâches
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              Une API REST robuste pour gérer une liste de tâches, développée avec Spring Boot. Comprend la validation des données d'entrée.
            </p>

            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded p-3 my-3 font-mono text-xs">
              {loading && <p className="text-slate-400 animate-pulse">Connexion à l'API...</p>}
              {error && <p className="text-rose-500 dark:text-rose-400">⚠️ Erreur : Backend hors ligne</p>}
              
              {!loading && !error && todos.length === 0 && (
                <p className="text-slate-400 italic">Aucune tâche en base de données.</p>
              )}

              {!loading && !error && todos.length > 0 && (
                <ul className="space-y-2">
                  {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                      <span className={`w-2 h-2 rounded-full ${todo.completed || todo.done ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      <span className={(todo.completed || todo.done) ? 'line-through text-slate-400' : ''}>
                        {todo.title || todo.description || todo.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Java 21", "Spring Boot", "REST API"].map((t, idx) => (
              <span key={idx} className="text-xs font-mono text-slate-400 dark:text-slate-500">{t}</span>
            ))}
          </div>
        </div>

        {/* CARTES PROJETS 2 & 3 */}
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-50 dark:bg-slate-800/20 border border-slate-200 dark:border-slate-800 p-6 rounded-lg flex flex-col justify-between hover:border-sky-500/30 dark:hover:border-sky-400/30 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <svg className="w-10 h-10 text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.061.069-.061 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                </a>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, idx) => (
                <span key={idx} className="text-xs font-mono text-slate-400 dark:text-slate-500">{t}</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects