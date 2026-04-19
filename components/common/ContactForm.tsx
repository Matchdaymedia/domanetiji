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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'kontaktformular-domane-tiji',
          ...formData,
          empfaenger_email: company.email,
          'bot-field': '',
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form
      name="kontaktformular-domane-tiji"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="kontaktformular-domane-tiji" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="empfaenger_email" value={company.email} />
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
            Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
          <p className="font-medium">Senden fehlgeschlagen</p>
          <p className="mt-1 text-sm">
            Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an {company.email}.
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  )
}

