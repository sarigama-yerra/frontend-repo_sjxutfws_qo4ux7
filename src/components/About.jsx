import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              I design and build modern web apps with a focus on performance, accessibility, and smooth interactions. My toolkit includes React, TypeScript, Tailwind, and a backend stack centered around Node and Python. I enjoy turning complex problems into simple, delightful experiences.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 text-sm"
          >
            {['React','Next.js','TypeScript','Tailwind CSS','Node.js','Python','FastAPI','MongoDB'].map((s) => (
              <li key={s} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-neutral-300">{s}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
