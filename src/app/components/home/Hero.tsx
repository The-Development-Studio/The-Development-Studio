import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Code, Users, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CountUp } from '@/app/components/CountUp';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-orange-50/30 dark:from-black dark:via-gray-950 dark:to-orange-950/20">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Organic Shapes - Not AI-looking */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF6600]/10 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/5 via-transparent to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Subtle Grid - Designer Touch */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-32 md:pt-40 pb-20">
        {/* Asymmetric Layout - Professional Design */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7">
            {/* Badge - Designer Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6600] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6600]"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Award-Winning Digital Studio</span>
            </motion.div>

            {/* Main Headline - Editorial Style */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-black dark:text-white">Crafting</span>{' '}
              <span className="relative inline-block">
                <span className="text-[#FF6600]">Dreams</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FF6600]/20 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
              <br />
              <span className="text-black dark:text-white">into</span>{' '}
              <span className="italic font-light text-gray-600 dark:text-gray-400">Digital</span>{' '}
              <span className="text-black dark:text-white">Reality</span>
            </motion.h1>

            {/* Tagline - Refined Typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl"
            >
              Your vision, our artistry. We transform ambitious ideas into exceptional digital experiences that drive real business growth.
            </motion.p>

            {/* CTA Buttons - Sophisticated Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/connect">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-[#FF6600] text-white rounded-full font-semibold overflow-hidden shadow-lg shadow-orange-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6600] to-[#FF8800]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link to="/expertise">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white dark:bg-gray-900 text-black dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-gray-800 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-colors shadow-sm"
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators - Designer Touch */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF6600]" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF6600]" />
                <span>99% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF6600]" />
                <span>45+ Countries</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 5 columns - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5"
          >
            {/* Sophisticated Stats Card */}
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF6600]/10 rounded-full blur-2xl" />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Code, number: 500, suffix: '+', label: 'Projects', color: 'from-blue-500 to-cyan-500' },
                    { icon: Users, number: 300, suffix: '+', label: 'Clients', color: 'from-purple-500 to-pink-500' },
                    { icon: Zap, number: 99, suffix: '%', label: 'Success', color: 'from-orange-500 to-red-500' },
                    { icon: Sparkles, number: 50, suffix: '+', label: 'Team', color: 'from-green-500 to-emerald-500' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Icon with Gradient Background */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Number */}
                      <div className="text-3xl font-bold text-black dark:text-white mb-1">
                        <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Trusted by global enterprises and innovative startups across 45+ countries worldwide.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-[#FF6600] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star className="w-4 h-4 fill-white" />
                <div className="text-xs font-semibold">4.9/5 Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider - Designer Element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-white dark:text-black">
          <path
            fill="currentColor"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
}