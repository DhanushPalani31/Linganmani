import { motion } from "framer-motion";

/**
 * Fades + slides content in once as it scrolls into view.
 * Usage: <Reveal><div>...</div></Reveal>  or  <Reveal delay={0.1} y={16}>
 */
export default function Reveal({ children, delay = 0, y = 20, className = "", as = "div" }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
