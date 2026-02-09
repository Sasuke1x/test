'use client'

import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { siteInfo } from '@/data/siteData'

const LeadForm = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(false)
    setErrorMessage('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setErrorMessage('Something went wrong. Please call us and we will help right away.')
    }
  }

  return (
    <div className={`rounded-2xl shadow-xl ${variant === 'dark' ? 'bg-white' : 'bg-white'} p-8`}>
      <h3 className="text-2xl font-bold text-slate-900">Request a Free Inspection</h3>
      <p className="text-slate-600 mt-2">Tell us about your project and we will respond within 24 hours.</p>

      {isSubmitted ? (
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <FiCheck className="mx-auto text-3xl text-emerald-600" />
          <p className="mt-3 text-emerald-800 font-semibold">Thank you! We will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {errorMessage && (
            <div className="rounded-lg border border-emergency-200 bg-emergency-50 px-4 py-3 text-sm text-emergency-700">
              {errorMessage}
            </div>
          )}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none"
          />
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 focus:border-brand-400 focus:outline-none ${formData.service ? 'text-slate-800' : 'text-slate-400'}`}
              required
            >
              <option value="" disabled>Select a Service</option>
              <option value="Roofing">Roofing</option>
              <option value="Windows">Windows</option>
              <option value="Siding & Gutters">Siding & Gutters</option>
              <option value="Kitchen & Bath">Kitchen & Bath</option>
              <option value="Home Additions">Home Additions</option>
              <option value="Decks & Patios">Decks & Patios</option>
              <option value="Emergency Services">Emergency Services</option>
              <option value="Water Damage">Water & Flood Damage</option>
              <option value="Fire & Smoke Damage">Fire & Smoke Damage</option>
              <option value="Storm Damage">Storm Damage</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
              v
            </span>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            rows={4}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none"
          />
          <button type="submit" className="btn-primary w-full">
            Request My Quote
          </button>
        </form>
      )}

      <p className="text-xs text-slate-500 mt-4">
        For urgent help call {siteInfo.phone}.
      </p>
    </div>
  )
}

export default LeadForm
