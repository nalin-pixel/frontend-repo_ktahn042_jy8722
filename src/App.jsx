import React from 'react'
import Hero from './components/Hero'
import Events from './components/Events'
import Sermons from './components/Sermons'
import ConnectForm from './components/ConnectForm'

const brand = {
  blue: '#17243e',
  cream: '#d0d0c1',
  teal: '#4e757c',
  lightTeal: '#8bb1b1'
}

function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#fff'}}>
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded" style={{backgroundColor: brand.teal}} aria-hidden />
            <span className="font-semibold" style={{color: brand.blue}}>CCBC Murrieta</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{color: brand.blue}}>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#ministries" className="hover:opacity-80">Ministries</a>
            <a href="#sermons" className="hover:opacity-80">Sermons</a>
            <a href="#events" className="hover:opacity-80">Events</a>
            <a href="#connect" className="hover:opacity-80">New Here</a>
            <a href="#give" className="rounded-md px-4 py-2 text-white" style={{backgroundColor: brand.teal}}>Give</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="events"><Events /></div>
        <div id="sermons"><Sermons /></div>
        <ConnectForm />
      </main>

      <footer className="mt-16" style={{backgroundColor: brand.blue}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-sm text-white/90">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold">Service Times</h4>
              <p className="mt-2 text-white/80">Sundays 9:00 AM & 11:00 AM</p>
            </div>
            <div>
              <h4 className="font-semibold">Visit</h4>
              <p className="mt-2 text-white/80">39407 Murrieta Hot Springs Rd<br/>Murrieta, CA</p>
            </div>
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-2 space-y-1 text-white/80">
                <li><a href="#plan" className="hover:text-white">Plan Your Visit</a></li>
                <li><a href="#connect" className="hover:text-white">Connect</a></li>
                <li><a href="#events" className="hover:text-white">Events</a></li>
                <li><a href="#sermons" className="hover:text-white">Sermons</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Newsletter</h4>
              <p className="mt-2 text-white/80">Get updates on events and stories.</p>
              <form className="mt-3 flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 rounded-md px-3 py-2 text-slate-900" aria-label="Email for newsletter" />
                <button className="rounded-md px-4 py-2 text-white" style={{backgroundColor: brand.teal}}>Sign Up</button>
              </form>
            </div>
          </div>
          <div className="mt-10 text-xs text-white/60">© {new Date().getFullYear()} CCBC Murrieta</div>
        </div>
      </footer>
    </div>
  )
}

export default App
