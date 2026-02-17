import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function CountUp({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  decimals = 0,
  className = ''
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (endValue - startValue) * easeOutQuart;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
