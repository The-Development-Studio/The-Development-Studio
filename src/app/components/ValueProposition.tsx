import { Lightbulb, Palette, Rocket, Handshake } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Lightbulb,
      title: 'Strategy-Led Development',
      description: 'Every project begins with deep strategic thinking to ensure alignment with your business goals and market needs.'
    },
    {
      icon: Palette,
      title: 'Creative Engineering',
      description: 'Where art meets science. We blend innovative design with robust technical architecture for exceptional results.'
    },
    {
      icon: Rocket,
      title: 'Scalable Digital Solutions',
      description: 'Built for growth. Our solutions evolve with your business, ensuring long-term value and performance.'
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnership',
      description: 'We\'re invested in your success. Our relationships extend beyond project delivery to ongoing support and growth.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-[#FF6600]/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 group-hover:text-[#FF6600] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF6600]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}