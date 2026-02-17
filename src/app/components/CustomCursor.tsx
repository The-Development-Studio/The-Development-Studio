import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseout', handleMouseOut);

    // Add listeners for interactive elements
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile/tablet devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="w-10 h-10 border-2 border-[#FF6600] rounded-full"
            animate={{
              scale: isHovering ? 1.2 : 1,
              borderColor: isClicking ? '#FF8800' : '#FF6600',
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Inner Dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FF6600] rounded-full"
            animate={{
              scale: isClicking ? 0.5 : isHovering ? 0 : 1,
              backgroundColor: isClicking ? '#FF8800' : '#FF6600',
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Hover Effect - Expanding Circle */}
          {isHovering && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF6600] rounded-full opacity-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Click Effect - Ripple */}
          {isClicking && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#FF6600] rounded-full"
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#FF6600] rounded-full opacity-30"
          animate={{
            scale: isHovering ? 1.8 : 1.2,
            opacity: isHovering ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Gradient Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#FF6600] rounded-full blur-2xl"
          animate={{
            scale: isHovering ? 1.5 : 0.8,
            opacity: isHovering ? 0.15 : 0.05,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </>
  );
}