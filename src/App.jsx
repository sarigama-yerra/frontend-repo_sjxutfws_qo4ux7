import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
