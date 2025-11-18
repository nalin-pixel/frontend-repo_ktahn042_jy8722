import React from 'react'

const brand = {
  blue: '#17243e',
  cream: '#d0d0c1',
  teal: '#4e757c',
  lightTeal: '#8bb1b1'
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="h-full w-full" style={{background: `radial-gradient(1200px 600px at 10% -10%, ${brand.lightTeal}22, transparent 60%), radial-gradient(900px 500px at 110% 10%, ${brand.teal}22, transparent 60%)`}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold" style={{backgroundColor: brand.cream, color: brand.blue}}>Welcome to CCBC Murrieta</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{color: brand.blue}}>
              A welcoming church family in Murrieta
            </h1>
            <p className="mt-4 text-lg leading-7" style={{color: brand.blue, opacity: 0.85}}>
              Join us this Sunday for worship, biblical teaching, and community. Wherever you are on your journey, you’re welcome here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#plan" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2" style={{backgroundColor: brand.teal, boxShadow: `0 10px 20px -10px ${brand.teal}88`}}>Plan Your Visit</a>
              <a href="#connect" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold border" style={{borderColor: brand.teal, color: brand.teal}}>Get Connected</a>
              <a href="#give" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold" style={{color: brand.blue}}>Give Online</a>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-lg px-4 py-3" style={{backgroundColor: brand.cream}}>
              <div className="text-sm" style={{color: brand.blue}}>
                Sunday Services: 9:00 AM & 11:00 AM • 39407 Murrieta Hot Springs Rd
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/10">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Congregation worshipping together" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
