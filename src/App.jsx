import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function App() {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 border-b border-pink-200/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-sm text-slate-700">
          <NavLink to="/" className="text-lg font-semibold tracking-[0.25em] uppercase text-pink-700">
            Maliha Tasnim
          </NavLink>
          <nav className="flex flex-wrap items-center justify-center gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-pink-100 text-pink-700 shadow-sm'
                      : 'text-slate-600 hover:bg-pink-50 hover:text-pink-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="bg-[radial-gradient(circle_at_top,_rgba(251,207,232,0.55),_transparent_30%),linear-gradient(180deg,#fff7fb,#ffe8f3)] min-h-screen pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
