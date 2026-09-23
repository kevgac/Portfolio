import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  // État local pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // États pour la gestion de la soumission et des erreurs
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Mise à jour des champs lors de la saisie
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }

    setIsSubmitting(true)

    // Simulation d'un envoi réseau (délai de 1,5 seconde)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 max-w-3xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 reveal ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center justify-center">
        <span className="text-sky-600 dark:text-sky-400 font-mono text-xl mr-2">04.</span> Me Contacter
      </h2>

      <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
        Je suis actuellement à la recherche d'une nouvelle opportunité professionnelle. Que ce soit pour une proposition de poste, une question ou simplement échanger, n'hésitez pas !
      </p>

      {submitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Message envoyé avec succès !</h3>
          <p className="text-sm">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-mono underline hover:text-emerald-500"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-500 p-4 rounded text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Adresse email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="votre.email@exemple.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
              placeholder="Opportunité de poste / Prise de contact"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              placeholder="Bonjour Kevin, ..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded shadow-lg shadow-sky-600/20 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Envoi en cours...</span>
            ) : (
              <span>Envoyer le message</span>
            )}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact