import React, { useEffect, useState } from 'react'

const brand = {
  blue: '#17243e',
  cream: '#d0d0c1',
  teal: '#4e757c',
  lightTeal: '#8bb1b1'
}

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/events`)
        if (!res.ok) throw new Error('Failed to load events')
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="py-16" aria-labelledby="events-heading" style={{backgroundColor: brand.cream}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 id="events-heading" className="text-3xl font-bold" style={{color: brand.blue}}>Upcoming Events</h2>
            <p className="mt-2" style={{color: brand.blue, opacity: 0.8}}>Be part of what’s happening in our community.</p>
          </div>
          <a href="#" className="text-sm font-semibold" style={{color: brand.teal}}>View all</a>
        </div>

        {loading && <p className="text-sm" style={{color: brand.blue}}>Loading events…</p>}
        {error && <p className="text-sm text-red-700">{error}</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={`${e.title}-${e.start_date}`} className="rounded-xl bg-white ring-1 ring-black/10 overflow-hidden hover:shadow-lg transition">
              {e.image_url && <img src={e.image_url} alt="Event image" className="h-40 w-full object-cover" />}
              <div className="p-5">
                <div className="text-xs font-semibold" style={{color: brand.teal}}>
                  {new Date(e.start_date).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}
                </div>
                <h3 className="mt-1 text-lg font-semibold" style={{color: brand.blue}}>{e.title}</h3>
                {e.description && <p className="mt-2 text-sm" style={{color: brand.blue, opacity: 0.8}}>{e.description}</p>}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm" style={{color: brand.blue, opacity: 0.8}}>{e.location || 'CCBC Murrieta'}</span>
                  {e.registration_url && <a href={e.registration_url} className="text-sm font-semibold" style={{color: brand.teal}}>Register</a>}
                </div>
              </div>
            </article>
          ))}
          {(!loading && !error && events.length === 0) && (
            <div className="col-span-full text-sm" style={{color: brand.blue}}>
              No upcoming events yet. Check back soon!
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
