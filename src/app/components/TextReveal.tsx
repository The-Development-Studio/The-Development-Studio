import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: 'word' | 'char' | 'line';
}

export function TextReveal({ 
  children, 
  delay = 0,
  className = '',
  type = 'word'
}: TextRevealProps) {
  const { ref, isInView } = useScrollReveal();

  if (typeof children !== 'string') {
    return <div className={className}>{children}</div>;
  }

  const text = children;
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: type === 'char' ? 0.03 : 0.08, 
        delayChildren: delay 
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (type === 'char') {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ display: 'inline-block' }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
