import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ReactNode, useRef, MouseEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ 
  children, 
  className = '',
  tiltAmount = 15
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
