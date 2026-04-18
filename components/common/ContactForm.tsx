'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'
import { company } from '@/lib/company'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const subject = encodeURIComponent('Kontaktanfrage über Domanê Tiji e.V. Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `E-Mail: ${formData.email}\n` +
        `Telefon: ${formData.phone || 'Nicht angegeben'}\n\n` +
        `Nachricht:\n${formData.message}`
    )

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`

    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
          placeholder="Ihr Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
          E-Mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
          placeholder="ihre.email@beispiel.de"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
          Telefon <span className="text-xs text-text-secondary">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
          placeholder={company.phoneDisplay}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
          placeholder="Ihre Nachricht an uns..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
          <p className="font-medium">Vielen Dank für Ihre Nachricht!</p>
          <p className="mt-1 text-sm">
            Ihr E-Mail-Client sollte sich geöffnet haben. Falls nicht, schreiben Sie uns an {company.email}.
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  )
}

