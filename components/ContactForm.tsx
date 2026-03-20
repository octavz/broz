'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      // Simulate form submission - in production, replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Construct mailto URL
      const mailto =
        `mailto:contact@centralatermicaservice.ro` +
        `?subject=Solicitare contact - ${data.phone ? encodeURIComponent(data.phone.toString()) : ''}${data.subject ? ' - ' + encodeURIComponent(data.subject.toString()) : ''}` +
        `&body=Nume:%20${encodeURIComponent(data.name ? data.name.toString() : '')}%0ATelefon:%20${encodeURIComponent(data.phone ? data.phone.toString() : '')}%0AMesaj:%20${encodeURIComponent(data.message ? data.message.toString() : '')}`
      window.location.href = mailto
      setSubmitStatus('success')
      e.currentTarget.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Mesaj trimis cu succes!</p>
          <p className="text-green-700 text-sm mt-1">Vă vom contacta în cel mai scurt timp.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">A apărut o eroare</p>
          <p className="text-red-700 text-sm mt-1">Vă rugăm să încercați din nou saucontactați-ne direct.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Ion Popescu"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="ion@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="0722 123 456"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subiect
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Selectează...</option>
            <option value="emergency">Urgență - defecțiune centrală</option>
            <option value="maintenance">Întreținere programată</option>
            <option value="installation">Instalare nouă / înlocuire</option>
            <option value="consultation">Consultanță tehnică</option>
            <option value="other">Altul</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mesaj *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
            placeholder="Descrieți problema sau solicitarea dvs..."
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" role="img" aria-label="Loading spinner">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Se trimite...
              </>
            ) : (
              'Trimite Mesaj'
            )}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            * Câmpurile marcate sunt obligatorii. Vă promitem răspunsul în maxim 24 de ore.
          </p>
        </div>
      </form>
    </div>
  )
}