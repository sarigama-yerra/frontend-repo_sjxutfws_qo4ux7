import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * TiltCard
 * 3D interactive card that tilts toward the cursor with subtle parallax layers.
 */
export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    x.set(px - 0.5)
    y.set(py - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative will-change-transform"
      >
        {/* Glow */}
        <motion.div
          aria-hidden
          style={{ left: glowX, top: glowY }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl"
        />
        {/* Content positioned in 3D space */}
        <div style={{ transform: 'translateZ(40px)' }} className="relative z-10">
          {children}
        </div>
        {/* Subtle border layer */}
        <div
          style={{ transform: 'translateZ(10px)' }}
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"
        />
      </motion.div>
    </motion.div>
  )
}
