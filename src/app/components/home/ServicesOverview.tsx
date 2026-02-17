import { motion } from 'motion/react';
import { Code, Smartphone, Cpu, Bot, Shield, Palette, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function ServicesOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      slug: 'web-development',
      description: 'Enterprise-grade web applications built with cutting-edge technology',
      features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions'],
      color: 'from-blue-500 to-cyan-500',
      accent: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      slug: 'mobile-apps',
      description: 'Native and cross-platform mobile experiences that users love',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization'],
      color: 'from-purple-500 to-pink-500',
      accent: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
    },
    {
      icon: Cpu,
      title: 'Custom Software',
      slug: 'custom-software',
      description: 'Tailored solutions designed for your unique business challenges',
      features: ['Enterprise Software', 'API Development', 'System Integration'],
      color: 'from-orange-500 to-red-500',
      accent: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      slug: 'ai-automation',
      description: 'Intelligent systems that transform operations and boost efficiency',
      features: ['Machine Learning', 'Process Automation', 'AI Integration'],
      color: 'from-green-500 to-emerald-500',
      accent: 'bg-green-500/10 text-green-600 dark:text-green-400'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      slug: 'cyber-security',
      description: 'Comprehensive protection for your digital assets and infrastructure',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'from-red-500 to-rose-500',
      accent: 'bg-red-500/10 text-red-600 dark:text-red-400'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      description: 'Data-driven strategies that amplify your brand and drive growth',
      features: ['SEO & SEM', 'Social Media', 'Content Strategy'],
      color: 'from-yellow-500 to-orange-500',
      accent: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header - Editorial Style */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#FF6600] tracking-wider uppercase">Our Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
              Full-Spectrum
              <br />
              <span className="italic font-light text-gray-600 dark:text-gray-400">Digital</span> Services
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              From concept to deployment, we deliver end-to-end digital solutions that drive measurable business results.
            </p>
            <Link to="/expertise">
              <motion.button
                whileHover={{ x: 5 }}
                className="group inline-flex items-center gap-2 text-[#FF6600] font-semibold"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid - Sophisticated Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link to={`/expertise/${service.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <motion.div
                        animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${service.accent}`}>
                        {service.features[0]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-[#FF6600] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-[#FF6600] font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6600]/0 to-[#FF6600]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-3xl p-12 md:p-16 shadow-2xl shadow-orange-500/20">
            <Zap className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital goals
            </p>
            <Link to="/connect">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF6600] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
