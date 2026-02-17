import { Globe, Smartphone, Code, Cpu, Shield, Zap, TrendingUp, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Custom web applications built with modern frameworks, optimized for performance and scalability.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions that deliver seamless experiences across all devices.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your unique business requirements and workflows.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      description: 'Intelligent automation and AI-powered solutions that drive efficiency and unlock new possibilities.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Digital Solutions',
      description: 'End-to-end digital transformation strategies tailored to your business objectives.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that enhance your online presence and drive growth.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      title: 'Graphical Designs',
      description: 'Creative visual designs that capture attention and communicate your brand effectively.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section id="expertise" className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 102, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

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
              What We Do
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive digital services that cover every aspect of your digital journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#FF6600] transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{ y: -10, scale: 1.03 }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/0 via-[#FF6600]/0 to-[#FF6600]/0 group-hover:from-[#FF6600]/10 group-hover:via-[#FF6600]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3 group-hover:text-[#FF6600] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(255, 102, 0, 0.3), transparent)',
                  }}
                  initial={{ rotate: 0, opacity: 0 }}
                  whileHover={{ rotate: 360, opacity: 1 }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}