import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section id="home" className="relative h-[75vh] md:h-[80vh] lg:h-[90vh] bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl h-full px-4 flex items-end md:items-center">
        <div className="py-16 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            Building elegant web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="mt-4 max-w-xl text-neutral-300"
          >
            I’m a web developer crafting fast, accessible interfaces with a focus on clean design and thoughtful motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-4"
          >
            <MagneticButton href="#work" className="group px-4 py-2 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-colors">
              <span>View work</span>
            </MagneticButton>
            <MagneticButton href="#contact" className="group px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">
              <span>Contact</span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
