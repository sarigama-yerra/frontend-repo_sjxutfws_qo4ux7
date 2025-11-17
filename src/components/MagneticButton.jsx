import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ children, className = '', href, as = 'a', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.2)
    y.set(dy * 0.2)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const Comp = href ? 'a' : as

  return (
    <Comp
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      {...props}
    >
      <motion.span style={{ x: springX, y: springY }} className="pointer-events-none inline-flex items-center">
        {children}
      </motion.span>
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors" />
    </Comp>
  )
}
