import React, { useState } from 'react'

const brand = {
  blue: '#17243e',
  cream: '#d0d0c1',
  teal: '#4e757c',
  lightTeal: '#8bb1b1'
}

export default function ConnectForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = e.currentTarget
    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
      newsletter_opt_in: form.newsletter.checked
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)})
      if (!res.ok) throw new Error('Submission failed')
      setStatus({ ok: true, message: 'Thanks! We will be in touch shortly.' })
      form.reset()
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="connect" className="py-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2" style={{color: brand.blue}}>Get Connected</h2>
        <p className="mb-8" style={{color: brand.blue, opacity: 0.85}}>Have a question or prayer request? We’d love to hear from you.</p>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 bg-white rounded-xl p-6 ring-1 ring-black/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium" style={{color: brand.blue}}>Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium" style={{color: brand.blue}}>Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium" style={{color: brand.blue}}>Phone</label>
              <input id="phone" name="phone" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium" style={{color: brand.blue}}>Subject</label>
              <input id="subject" name="subject" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium" style={{color: brand.blue}}>Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div className="flex items-center gap-2">
            <input id="newsletter" name="newsletter" type="checkbox" className="h-4 w-4" />
            <label htmlFor="newsletter" className="text-sm" style={{color: brand.blue}}>Subscribe to newsletter</label>
          </div>

          <div className="mt-4">
            <button disabled={loading} className="rounded-md px-5 py-3 text-white font-semibold" style={{backgroundColor: brand.teal}}>
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </div>

          {status && (
            <p className={`text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
