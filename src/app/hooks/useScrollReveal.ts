import { useInView } from 'motion/react';
import { useRef } from 'react';

interface ScrollRevealOptions {
  once?: boolean;
  margin?: string;
  amount?: number | 'some' | 'all';
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? '-100px',
    amount: options.amount ?? 0.3,
  });

  return { ref, isInView };
}
