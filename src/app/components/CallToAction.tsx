import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CallToAction() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#FF6600] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6600] rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform<br />
            <span className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent">
              Your Digital Vision?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create something extraordinary. Our team is ready to bring your ideas to life with cutting-edge technology and creative excellence.
          </motion.p>
          
          <motion.a
            href="#start-project"
            className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#FF6600] to-[#FF8800] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-medium relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2 md:gap-3">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF8800] to-[#FFAA00]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}