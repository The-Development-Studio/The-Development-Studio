import { motion, AnimatePresence } from 'motion/react';
import { X, Wrench, Clock, Sparkles } from 'lucide-react';

interface UnderConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function UnderConstructionModal({ isOpen, onClose, title = "Feature" }: UnderConstructionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-[#FF6600]/30 rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl overflow-hidden"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #FF6600 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '30px 30px']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              </div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-[#FF6600]/20 border border-gray-700 hover:border-[#FF6600] transition-all group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-[#FF6600] transition-colors" />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Animated Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mb-6 relative"
                  animate={{
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {/* Glowing Background */}
                  <motion.div
                    className="absolute inset-0 bg-[#FF6600]/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />

                  {/* Icon Container */}
                  <div className="relative bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-full p-6 md:p-8">
                    <motion.div
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    >
                      <Wrench className="w-10 h-10 md:w-14 md:h-14 text-white" />
                    </motion.div>

                    {/* Orbiting Sparkles */}
                    {[0, 120, 240].map((angle, index) => (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          x: [
                            0,
                            Math.cos((angle * Math.PI) / 180) * 60,
                            0
                          ],
                          y: [
                            0,
                            Math.sin((angle * Math.PI) / 180) * 60,
                            0
                          ],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: 'easeInOut'
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-[#FFAA00]" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-[#FF6600] via-[#FF8800] to-[#FFAA00] bg-clip-text text-transparent">
                    Under Construction
                  </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {title} Coming Soon!
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-gray-400 mb-8 max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We're working hard to bring you this amazing feature. Our team is crafting something extraordinary that will elevate your experience.
                </motion.p>

                {/* Progress Indicator */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-2 text-[#FF6600] mb-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">In Development</span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="max-w-xs mx-auto h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF6600] via-[#FF8800] to-[#FFAA00]"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      style={{ width: '50%' }}
                    />
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF6600] to-[#FF8800] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#FF6600]/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got It!
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#FF6600]/20 rounded-full" />
                <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#FF8800]/20 rounded-full" />
                
                <motion.div
                  className="absolute top-20 left-20 w-2 h-2 bg-[#FF6600] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-20 w-2 h-2 bg-[#FFAA00] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
