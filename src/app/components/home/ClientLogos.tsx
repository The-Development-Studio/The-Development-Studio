import { motion } from 'motion/react';
import { CountUp } from '@/app/components/CountUp';
import { Building2, TrendingUp, Globe, Award } from 'lucide-react';

export function ClientLogos() {
  // Sophisticated brand representation
  const brands = [
    { name: 'TechCorp', industry: 'Technology' },
    { name: 'FinanceFlow', industry: 'FinTech' },
    { name: 'HealthSync', industry: 'Healthcare' },
    { name: 'RetailMax', industry: 'E-commerce' },
    { name: 'EduLearn', industry: 'Education' },
    { name: 'LogiTrack', industry: 'Logistics' },
    { name: 'RealEstate Pro', industry: 'Real Estate' },
    { name: 'FoodHub', industry: 'F&B' },
    { name: 'TravelWise', industry: 'Travel' },
    { name: 'AutoDrive', industry: 'Automotive' },
    { name: 'ManufactureX', industry: 'Manufacturing' },
    { name: 'MediaFlow', industry: 'Media' }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header - Sophisticated Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#FF6600] tracking-wider uppercase">Our Partners</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            Powering Success for
            <br />
            <span className="relative inline-block">
              <span className="italic font-light text-gray-600 dark:text-gray-400">Global</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-[#FF6600]/20"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>{' '}
            <span className="text-black dark:text-white">Brands</span>
          </h2>
        </motion.div>

        {/* Brand Grid - Premium Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all duration-500 cursor-pointer"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/0 to-[#FF6600]/0 group-hover:from-[#FF6600]/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Brand Icon/Initial */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform shadow-lg">
                    {brand.name.substring(0, 2)}
                  </div>
                  
                  {/* Brand Name */}
                  <div className="font-bold text-sm text-black dark:text-white mb-1 group-hover:text-[#FF6600] transition-colors">
                    {brand.name}
                  </div>
                  
                  {/* Industry Tag */}
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {brand.industry}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Stats - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-[2.5rem] border-2 border-gray-200 dark:border-gray-800 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                  Numbers That Speak for <span className="text-[#FF6600]">Themselves</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our track record of excellence across the globe
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Building2, number: 12, suffix: '+', label: 'Industries Served', color: 'from-blue-500 to-cyan-500' },
                  { icon: Globe, number: 45, suffix: '+', label: 'Countries Reached', color: 'from-purple-500 to-pink-500' },
                  { icon: TrendingUp, number: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-orange-500 to-red-500' },
                  { icon: Award, number: 5, suffix: '★', label: 'Average Rating', color: 'from-green-500 to-emerald-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-bold text-[#FF6600] mb-2">
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    </div>

                    {/* Label */}
                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
