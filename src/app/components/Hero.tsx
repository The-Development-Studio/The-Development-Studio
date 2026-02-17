import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 102, 0, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF6600] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-32 text-center">
        <motion.div 
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90"
          >
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            <span>Where Vision Meets Artistry</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Crafting Dreams</span>
            <span className="block bg-gradient-to-r from-[#FF6600] via-[#FF8800] to-[#FFAA00] bg-clip-text text-transparent">
              into Design
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your Vision, Our Artistry.
          </motion.p>

          {/* Subtext */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            We transform innovative ideas into exceptional digital experiences. 
            Our team combines creative excellence with technical expertise to deliver 
            solutions that drive growth and exceed expectations.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#start-project"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-[#FF6600] to-[#FF8800] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF8800] to-[#FFAA00]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#success-stories"
              className="group w-full sm:w-auto relative border-2 border-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 102, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Our Work</span>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-[#FF6600] rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}