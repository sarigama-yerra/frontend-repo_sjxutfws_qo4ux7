import { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function FloatInView({ children, delay = 0, className = '' }) {
  const controls = useAnimation()
  const refCallback = (node) => {
    if (!node) return
    const inView = useInView(node, { amount: 0.3 })
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { delay, duration: 0.6 } })
    }
  }

  return (
    <motion.div
      ref={refCallback}
      initial={{ opacity: 0, y: 16 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}
