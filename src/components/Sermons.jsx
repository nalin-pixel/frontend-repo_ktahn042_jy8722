import React, { useEffect, useState } from 'react'

const brand = {
  blue: '#17243e',
  cream: '#d0d0c1',
  teal: '#4e757c',
  lightTeal: '#8bb1b1'
}

export default function Sermons() {
  const [sermons, setSermons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/sermons`)
        if (!res.ok) throw new Error('Failed to load sermons')
        const data = await res.json()
        setSermons(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold" style={{color: brand.blue}}>Recent Sermons</h2>
            <p className="mt-2" style={{color: brand.blue, opacity: 0.8}}>Catch up on the latest teaching.</p>
          </div>
          <a href="#" className="text-sm font-semibold" style={{color: brand.teal}}>View archive</a>
        </div>

        {loading && <p className="text-sm" style={{color: brand.blue}}>Loading sermons…</p>}
        {error && <p className="text-sm text-red-700">{error}</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((s) => (
            <article key={`${s.title}-${s.date}`} className="rounded-xl bg-white ring-1 ring-black/10 overflow-hidden hover:shadow-lg transition">
              <div className="p-5">
                <div className="text-xs font-semibold" style={{color: brand.teal}}>
                  {s.series || 'Message'}
                </div>
                <h3 className="mt-1 text-lg font-semibold" style={{color: brand.blue}}>{s.title}</h3>
                {s.speaker && <p className="text-sm mt-1" style={{color: brand.blue, opacity: 0.8}}>Speaker: {s.speaker}</p>}
                <p className="text-xs mt-1" style={{color: brand.blue, opacity: 0.7}}>
                  {new Date(s.date).toLocaleDateString()}
                </p>
                <div className="mt-4 flex gap-3">
                  {s.video_url && <a className="text-sm font-semibold" style={{color: brand.teal}} href={s.video_url} target="_blank" rel="noreferrer">Watch</a>}
                  {s.audio_url && <a className="text-sm font-semibold" style={{color: brand.teal}} href={s.audio_url} target="_blank" rel="noreferrer">Listen</a>}
                  {s.notes_url && <a className="text-sm font-semibold" style={{color: brand.teal}} href={s.notes_url} target="_blank" rel="noreferrer">Notes</a>}
                </div>
              </div>
            </article>
          ))}
          {(!loading && !error && sermons.length === 0) && (
            <div className="col-span-full text-sm" style={{color: brand.blue}}>
              Sermons will appear here when added.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
