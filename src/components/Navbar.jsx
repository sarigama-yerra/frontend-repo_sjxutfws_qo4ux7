import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 bg-neutral-900/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">dev.<span className="text-yellow-400">folio</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-neutral-300 hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="px-3 py-1.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Hire me</a>
          </nav>
          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map(l => (
                <a onClick={() => setOpen(false)} key={l.href} href={l.href} className="block rounded-md px-3 py-2 text-neutral-200 hover:bg-white/10">{l.label}</a>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="block rounded-md px-3 py-2 bg-white/10 text-white">Hire me</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
