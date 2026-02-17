import { DollarSign, Heart, ShoppingCart, Truck, Cloud, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Domains() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: DollarSign,
      title: 'FinTech',
      description: 'Digital banking, payment solutions, and financial platforms',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Telehealth, patient management, and medical software',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Online retail platforms and marketplace solutions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Supply chain management and delivery optimization',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Cloud,
      title: 'SaaS',
      description: 'Cloud-based software and subscription services',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'E-learning platforms and educational technology',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="domains" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Industries
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Industries We Serve</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Deep domain expertise across multiple industries, delivering specialized solutions that understand your unique challenges
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-[#FF6600] transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl"
                whileHover={{ y: -10, scale: 1.03 }}
              >
                {/* Background Gradient Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/0 via-[#FF6600]/0 to-[#FF6600]/0 group-hover:from-[#FF6600]/5 group-hover:to-transparent transition-all duration-500"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 group-hover:text-[#FF6600] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {industry.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6600]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}