import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Compass } from 'lucide-react';
import { useEffect, useState } from 'react';

export function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#FF6600 1px, transparent 1px), linear-gradient(90deg, #FF6600 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF6600] rounded-full"
            style={{
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

      {/* Parallax Effect Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-[#FF6600]/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-[#FF8800]/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1]
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 404 Illustration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Glowing 404 */}
            <motion.h1
              className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold leading-none"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FF6600 0%, #FF8800 50%, #FFAA00 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              404
            </motion.h1>

            {/* Animated SVG Illustration */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-30">
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#FF6600"
                  strokeWidth="3"
                  animate={{
                    strokeDasharray: ['0 502', '251 251', '0 502'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.path
                  d="M 100 40 Q 120 80 100 120 Q 80 80 100 40"
                  fill="none"
                  stroke="#FF8800"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </svg>
            </motion.div>

            {/* Orbiting Icons */}
            {[Search, Compass].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 md:w-16 md:h-16 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#FF6600]/50"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: [
                    0,
                    Math.cos((index * 180) * Math.PI / 180) * 180,
                    0
                  ],
                  y: [
                    0,
                    Math.sin((index * 180) * Math.PI / 180) * 180,
                    0
                  ],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'easeInOut'
                }}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF6600]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6 mb-12"
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
            animate={{
              textShadow: [
                '0 0 10px rgba(255, 102, 0, 0.3)',
                '0 0 20px rgba(255, 102, 0, 0.5)',
                '0 0 10px rgba(255, 102, 0, 0.3)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Oops! Looks like you've ventured into uncharted territory. The page you're looking for seems to have taken a different path.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Go Home Button */}
          <Link to="/">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6600] to-[#FF8800] text-white font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF8800] to-[#FFAA00]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Home className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Go Home</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </Link>

          {/* Go Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#FF6600] text-[#FF6600] font-semibold rounded-full hover:bg-[#FF6600]/10 transition-all"
            whileHover={{ scale: 1.05, borderColor: '#FF8800' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { name: 'Expertise', path: '/expertise' },
              { name: 'Success Stories', path: '/success-stories' },
              { name: 'Knowledge Hub', path: '/knowledge-hub' },
              { name: 'Connect', path: '/connect' }
            ].map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-[#FF6600] transition-colors relative group"
                >
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6600] group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#FF6600]/30 rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#FF6600]/30 rounded-br-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />

      {/* Floating Brand Letters */}
      {['4', '0', '4'].map((char, index) => (
        <motion.div
          key={`char-${index}`}
          className="absolute text-[#FF6600]/5 font-bold text-9xl select-none pointer-events-none"
          style={{
            left: `${10 + index * 35}%`,
            top: `${30 + (index % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'easeInOut'
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
}
