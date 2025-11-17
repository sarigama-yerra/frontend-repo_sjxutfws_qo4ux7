import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Commerce UI',
    desc: 'A performant storefront with modern cart, search, and checkout flows.',
    tags: ['React', 'Tailwind', 'Stripe'],
  },
  {
    title: 'Realtime Boards',
    desc: 'Collaborative whiteboard with sockets and buttery-smooth drawing.',
    tags: ['Next.js', 'WebSockets', 'Canvas'],
  },
  {
    title: 'Docs Platform',
    desc: 'Markdown-based docs with search, versioning, and analytics.',
    tags: ['Docusaurus', 'Algolia', 'Express'],
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">Selected work</h2>
          <a href="#contact" className="hidden md:inline-flex text-sm px-3 py-1.5 rounded-md bg-white/10 text-white hover:bg-white/20">Get in touch</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-yellow-500/20 via-yellow-400/10 to-transparent border border-white/10" />
              <h3 className="mt-4 text-white font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
