import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-white text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Let’s build something great
          </motion.h2>
          <p className="mt-3 text-neutral-400 max-w-2xl">
            I’m available for freelance work, collaborations, or full-time opportunities. Drop your email and a short note, and I’ll get back to you.
          </p>
          <form className="mt-6 grid md:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => e.preventDefault()}>
            <input required type="email" placeholder="Your email" className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
            <button className="rounded-md bg-yellow-400 text-black font-medium px-5 py-3 hover:bg-yellow-300 transition-colors">Say hello</button>
          </form>
        </div>
        <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  )
}
