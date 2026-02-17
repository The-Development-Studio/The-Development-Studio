import { motion, useAnimation } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// Brand-Oriented Custom Icons
const BrandCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.path
      d="M8 6L2 12L8 18"
      stroke="#FF6600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M16 6L22 12L16 18"
      stroke="#FF6600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
    />
  </svg>
);

const BrandDesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1"
      stroke="#FF6600"
      strokeWidth="2"
      fill="none"
      animate={{ 
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.1, 1, 0.9, 1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle
      cx="17.5"
      cy="6.5"
      r="3.5"
      stroke="#FF8800"
      strokeWidth="2"
      fill="none"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.path
      d="M3 14L10 21L10 14L3 14Z"
      stroke="#FFAA00"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      animate={{ 
        pathLength: [0, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </svg>
);

const BrandInnovationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.path
      d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
      stroke="#FF6600"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      fill="#FF6600"
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 1, 0.3]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const controls = useAnimation();
  const codeContainerRef = useRef<HTMLDivElement>(null);

  const codeSnippets = [
    'import { Innovation } from "@studio/core"',
    'const vision = new Vision({ creative: true })',
    'await design.transform(ideas)',
    'export const Excellence = () => {',
    '  return <Premium quality="enterprise" />',
    '}',
    'console.log("Crafting your experience...")',
    'const studio = new DevelopmentStudio()',
    'studio.initialize({ theme: "modern" })',
    'await studio.loadAssets()',
    'render(<YourDreams />)',
  ];

  const brandIcons = [BrandCodeIcon, BrandDesignIcon, BrandInnovationIcon];

  useEffect(() => {
    // Total duration: 8 seconds
    const duration = 8000;
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    let lineIndex = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));

      // Add code lines progressively
      if (lineIndex < codeSnippets.length && currentProgress > (lineIndex * (100 / codeSnippets.length))) {
        setCodeLines(prev => [...prev, codeSnippets[lineIndex]]);
        lineIndex++;
      }

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          controls.start({ opacity: 0, scale: 0.95 });
          setTimeout(onLoadingComplete, 500);
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete, controls]);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTo({
        top: codeContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [codeLines]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8"
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Grid Background with Loop Animation */}
      <div className="absolute inset-0 opacity-10 sm:opacity-15 md:opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#FF6600 1px, transparent 1px), linear-gradient(90deg, #FF6600 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
      </div>

      {/* Floating Particles with Enhanced Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#FF6600] rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5 + Math.random(), 0]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Rotating Rings with Hover Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border border-[#FF6600]/10 sm:border-2 sm:border-[#FF6600]/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          whileHover={{ scale: 1.1, borderColor: 'rgba(255, 102, 0, 0.5)' }}
        />
        <motion.div
          className="absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] border border-[#FF8800]/10 sm:border-2 sm:border-[#FF8800]/20 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
          }}
          whileHover={{ scale: 1.1, borderColor: 'rgba(255, 136, 0, 0.5)' }}
        />
        <motion.div
          className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] border border-[#FFAA00]/10 sm:border-2 sm:border-[#FFAA00]/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
          }}
          whileHover={{ scale: 1.1, borderColor: 'rgba(255, 170, 0, 0.5)' }}
        />
      </div>

      {/* Floating Brand Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`brand-${i}`}
            className="absolute text-[#FF6600]/5 font-bold text-4xl md:text-6xl select-none"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
          >
            DS
          </motion.div>
        ))}
      </div>

      {/* Illustration Art - Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-[10%] right-[15%] w-32 h-32 md:w-48 md:h-48"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF6600', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#FFAA00', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <motion.polygon
              points="100,20 180,80 160,160 40,160 20,80"
              fill="url(#grad1)"
              stroke="#FF6600"
              strokeWidth="2"
              animate={{
                points: [
                  "100,20 180,80 160,160 40,160 20,80",
                  "100,30 170,90 150,150 50,150 30,90",
                  "100,20 180,80 160,160 40,160 20,80"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* Abstract Circle Pattern */}
        <motion.div
          className="absolute bottom-[15%] left-[10%] w-40 h-40 md:w-56 md:h-56"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF8800', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#FF6600', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="3"
              animate={{
                strokeDasharray: ['0 440', '220 220', '0 440'],
                rotate: [0, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="#FF6600"
              strokeWidth="2"
              opacity="0.4"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </svg>
        </motion.div>

        {/* Code Symbol Illustration */}
        <motion.div
          className="absolute top-[30%] left-[5%] w-24 h-24 md:w-32 md:h-32"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M 30 20 L 10 50 L 30 80"
              fill="none"
              stroke="#FF6600"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0.3, 0.8, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.path
              d="M 70 20 L 90 50 L 70 80"
              fill="none"
              stroke="#FF6600"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0.3, 0.8, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            />
          </svg>
        </motion.div>

        {/* Abstract Triangle */}
        <motion.div
          className="absolute bottom-[35%] right-[8%] w-28 h-28 md:w-40 md:h-40"
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 0.9, 1.1, 1],
            x: [0, -10, 10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFAA00', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#FF6600', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 10 L 90 80 L 10 80 Z"
              fill="url(#grad3)"
              stroke="#FF8800"
              strokeWidth="2"
              animate={{
                d: [
                  "M 50 10 L 90 80 L 10 80 Z",
                  "M 50 15 L 85 75 L 15 75 Z",
                  "M 50 10 L 90 80 L 10 80 Z"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </svg>
        </motion.div>

        {/* Tech Grid Pattern */}
        <motion.div
          className="absolute top-[50%] right-[20%] w-36 h-36 md:w-48 md:h-48 opacity-40"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {[...Array(4)].map((_, i) => (
              <motion.rect
                key={i}
                x={5 + (i % 2) * 45}
                y={5 + Math.floor(i / 2) * 45}
                width="40"
                height="40"
                fill="none"
                stroke="#FF6600"
                strokeWidth="1.5"
                rx="5"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Sparkle Effect */}
        <motion.div
          className="absolute top-[20%] right-[40%] w-20 h-20"
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M 50 10 L 55 45 L 90 50 L 55 55 L 50 90 L 45 55 L 10 50 L 45 45 Z"
              fill="#FF6600"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        
        {/* Logo Animation with Hover */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-4 sm:mb-6 md:mb-8"
          onHoverStart={() => setHoveredElement('logo')}
          onHoverEnd={() => setHoveredElement(null)}
        >
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-[#FF6600] via-[#FF8800] to-[#FFAA00] rounded-2xl sm:rounded-3xl flex items-center justify-center relative cursor-pointer overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 102, 0, 0.4)',
                '0 0 50px rgba(255, 102, 0, 0.6)',
                '0 0 20px rgba(255, 102, 0, 0.4)',
              ],
              rotate: hoveredElement === 'logo' ? [0, 5, -5, 0] : 0
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity },
              rotate: { duration: 0.5, ease: 'easeInOut' }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.6, ease: 'easeOut' }
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '10px 10px'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            <motion.span
              className="relative text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                  '0 0 20px rgba(255, 255, 255, 0.8)',
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              DS
            </motion.span>

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF6600] via-[#FF8800] to-[#FFAA00] rounded-2xl sm:rounded-3xl"
              animate={{
                scale: [1, 1.3],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
            
            {/* Orbiting Brand Icons with Hover */}
            {brandIcons.map((IconComponent, index) => (
              <motion.div
                key={index}
                className="absolute w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#FF6600]/50 cursor-pointer overflow-hidden"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: [
                    0, 
                    Math.cos((index * 120) * Math.PI / 180) * (typeof window !== 'undefined' && window.innerWidth < 640 ? 50 : window.innerWidth < 768 ? 60 : 80), 
                    0
                  ],
                  y: [
                    0, 
                    Math.sin((index * 120) * Math.PI / 180) * (typeof window !== 'undefined' && window.innerWidth < 640 ? 50 : window.innerWidth < 768 ? 60 : 80), 
                    0
                  ],
                  rotate: [0, 360]
                }}
                transition={{
                  x: { duration: 4, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' },
                  y: { duration: 4, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' },
                  rotate: { duration: 4, repeat: Infinity, ease: 'linear' }
                }}
                whileHover={{ 
                  scale: 1.3,
                  backgroundColor: 'rgba(255, 102, 0, 0.9)',
                  borderColor: '#FFFFFF',
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredElement(`icon-${index}`)}
                onHoverEnd={() => setHoveredElement(null)}
              >
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  animate={{
                    scale: hoveredElement === `icon-${index}` ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.3, repeat: hoveredElement === `icon-${index}` ? Infinity : 0 }}
                >
                  <IconComponent />
                </motion.div>

                {/* Hover Ripple Effect */}
                {hoveredElement === `icon-${index}` && (
                  <motion.div
                    className="absolute inset-0 bg-[#FF6600] rounded-full"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Welcome Text with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 sm:mb-6 md:mb-8 px-2"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4"
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, #FFFFFF 0%, #FF6600 50%, #FFFFFF 100%)',
                'linear-gradient(90deg, #FF6600 0%, #FFFFFF 50%, #FF6600 100%)',
                'linear-gradient(90deg, #FFFFFF 0%, #FF6600 50%, #FFFFFF 100%)',
              ],
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundSize: '200% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hello, Visitor
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            Welcome to <span className="text-[#FF6600] font-semibold">The Development Studio</span>
          </motion.p>
        </motion.div>

        {/* Code Terminal with Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-black/50 backdrop-blur-xl border border-[#FF6600]/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 mb-4 sm:mb-6 md:mb-8 w-full mx-auto cursor-pointer relative overflow-hidden"
          whileHover={{ 
            borderColor: 'rgba(255, 102, 0, 0.5)',
            boxShadow: '0 0 30px rgba(255, 102, 0, 0.3)',
            scale: 1.01
          }}
          onHoverStart={() => setHoveredElement('terminal')}
          onHoverEnd={() => setHoveredElement(null)}
        >
          {/* Hover Glow Effect */}
          {hoveredElement === 'terminal' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6600]/10 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          )}

          {/* Terminal Header with Animated Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-700 relative z-10">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2">
              <motion.div 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full cursor-pointer"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.5, boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}
              />
              <motion.div 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full cursor-pointer"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                whileHover={{ scale: 1.5, boxShadow: '0 0 10px rgba(234, 179, 8, 0.8)' }}
              />
              <motion.div 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full cursor-pointer"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                whileHover={{ scale: 1.5, boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
              />
            </div>
            <motion.span 
              className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2 font-mono truncate"
              animate={{
                color: ['#9CA3AF', '#FF6600', '#9CA3AF']
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              terminal.tsx
            </motion.span>
          </div>

          {/* Code Lines with Hover Effect */}
          <div 
            ref={codeContainerRef}
            className="font-mono text-left text-xs sm:text-sm md:text-base space-y-1 sm:space-y-1.5 md:space-y-2 h-[140px] xs:h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#FF6600]/50 scrollbar-track-gray-800 relative z-10"
          >
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-2 sm:gap-3 md:gap-4 group cursor-pointer"
                whileHover={{ 
                  x: 5,
                  backgroundColor: 'rgba(255, 102, 0, 0.05)'
                }}
              >
                <motion.span 
                  className="text-gray-600 select-none w-4 sm:w-5 md:w-6 text-right flex-shrink-0 text-xs sm:text-sm md:text-base"
                  whileHover={{ color: '#FF6600', scale: 1.1 }}
                >
                  {index + 1}
                </motion.span>
                <motion.span 
                  className="text-[#FF6600] flex-1 break-all text-xs sm:text-sm md:text-base leading-relaxed"
                  animate={{
                    textShadow: [
                      '0 0 5px rgba(255, 102, 0, 0.3)',
                      '0 0 10px rgba(255, 102, 0, 0.5)',
                      '0 0 5px rgba(255, 102, 0, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
                  whileHover={{ 
                    color: '#FFAA00',
                    textShadow: '0 0 15px rgba(255, 170, 0, 0.8)'
                  }}
                >
                  {line}
                </motion.span>
              </motion.div>
            ))}
            
            {/* Blinking Cursor with Animation */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3 md:gap-4"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="text-gray-600 w-4 sm:w-5 md:w-6 text-right flex-shrink-0 text-xs sm:text-sm md:text-base">
                {codeLines.length + 1}
              </span>
              <motion.span 
                className="w-1.5 h-3 sm:w-2 sm:h-4 md:h-5 bg-[#FF6600]"
                animate={{
                  boxShadow: [
                    '0 0 5px rgba(255, 102, 0, 0.5)',
                    '0 0 15px rgba(255, 102, 0, 0.8)',
                    '0 0 5px rgba(255, 102, 0, 0.5)',
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Bar with Hover and Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-2"
          onHoverStart={() => setHoveredElement('progress')}
          onHoverEnd={() => setHoveredElement(null)}
        >
          <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
            <motion.span 
              className="truncate"
              animate={{
                color: hoveredElement === 'progress' ? '#FF6600' : '#9CA3AF'
              }}
            >
              Loading Experience
            </motion.span>
            <motion.span 
              className="ml-2 font-mono"
              animate={{
                color: ['#9CA3AF', '#FF6600', '#9CA3AF'],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                color: { duration: 2, repeat: Infinity },
                scale: { duration: 1, repeat: Infinity }
              }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
          
          {/* Progress Bar Container with Hover */}
          <motion.div 
            className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700 cursor-pointer relative"
            whileHover={{ 
              borderColor: '#FF6600',
              boxShadow: '0 0 20px rgba(255, 102, 0, 0.4)',
              scale: 1.02
            }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6600] via-[#FF8800] to-[#FFAA00] relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Loading Status with Animation */}
          <motion.p
            className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-3 font-mono"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [0, -2, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress < 30 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                ⚡ Initializing systems...
              </motion.span>
            )}
            {progress >= 30 && progress < 60 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                🚀 Loading components...
              </motion.span>
            )}
            {progress >= 60 && progress < 90 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                ✨ Crafting experience...
              </motion.span>
            )}
            {progress >= 90 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                🎯 Almost there...
              </motion.span>
            )}
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Accents with Loop Animation */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-t-2 border-l-2 sm:border-t-3 sm:border-l-3 md:border-t-4 md:border-l-4 border-[#FF6600] rounded-tl-2xl sm:rounded-tl-3xl cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{ 
          scale: 1.2, 
          opacity: 1,
          borderColor: '#FFAA00',
          boxShadow: '0 0 20px rgba(255, 102, 0, 0.6)'
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-b-2 border-r-2 sm:border-b-3 sm:border-r-3 md:border-b-4 md:border-r-4 border-[#FF6600] rounded-br-2xl sm:rounded-br-3xl cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }}
        whileHover={{ 
          scale: 1.2, 
          opacity: 1,
          borderColor: '#FFAA00',
          boxShadow: '0 0 20px rgba(255, 102, 0, 0.6)'
        }}
      />

      {/* Floating Brand Letters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['D', 'S'].map((letter, index) => (
          <motion.div
            key={`letter-${index}`}
            className="absolute text-[#FF6600]/10 font-bold text-8xl md:text-9xl"
            style={{
              left: index === 0 ? '10%' : '80%',
              top: index === 0 ? '15%' : '75%',
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 2,
              ease: 'easeInOut'
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}