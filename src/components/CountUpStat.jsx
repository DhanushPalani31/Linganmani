import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * Renders `value` (e.g. "900+", "1997", "A+") — if it contains a number,
 * that number counts up from 0 when it scrolls into view; any prefix/suffix
 * (like "+" or "A") is preserved as static text around it.
 */
export default function CountUpStat({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);

  const match = String(value).match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    if (!inView || !match) {
      if (!match) setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.p ref={ref} className={className}>
      {display}
    </motion.p>
  );
}
