import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CountUp } from '@/app/components/CountUp';

export function SuccessStory() {
  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Revenue Growth' },
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: Award, value: '#1', label: 'Market Position' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6600] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8800] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Award className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-medium text-[#FF6600]">Featured Success Story</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Transforming Businesses
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how we helped our clients achieve extraordinary results
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-2xl overflow-hidden relative">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Mock Dashboard */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 w-fit">
                  <div className="text-white text-sm font-medium mb-1">FinTech Platform</div>
                  <div className="text-white/80 text-xs">E-Commerce Solution</div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/30 rounded-lg" />
                    <div className="flex-1">
                      <div className="h-2 bg-white/40 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-white/30 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/30 rounded-lg" />
                    <div className="flex-1">
                      <div className="h-2 bg-white/40 rounded w-2/3 mb-2" />
                      <div className="h-2 bg-white/30 rounded w-1/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black dark:text-white">300%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Growth</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                FinTech Revolution: 300% Revenue Growth in 12 Months
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                We partnered with a leading financial technology company to rebuild their entire digital 
                infrastructure. The result? A scalable platform that handles millions of transactions daily.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                By implementing cutting-edge technologies and user-centric design, we helped them achieve 
                unprecedented growth and become the #1 platform in their market.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800"
                >
                  <stat.icon className="w-6 h-6 text-[#FF6600] mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/success-stories/1">
              <motion.button
                className="px-6 py-3 bg-[#FF6600] text-white rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-[#FF7722] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Story
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* More Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join 300+ companies who transformed their business with us
          </p>
          <Link to="/success-stories">
            <motion.button
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-semibold hover:border-[#FF6600] hover:text-[#FF6600] transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Success Stories
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}