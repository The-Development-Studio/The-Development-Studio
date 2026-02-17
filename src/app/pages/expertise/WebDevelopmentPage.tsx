import { motion } from 'motion/react';
import { Code, Smartphone, Zap, Shield, Users, TrendingUp, Check, ArrowRight } from 'lucide-react';

export function WebDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'React, Next.js, TypeScript, and cutting-edge frameworks'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Pixel-perfect layouts that work on all devices'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and Core Web Vitals'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Best practices for data protection and security'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Intuitive interfaces with exceptional UX'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs'
    }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements' },
    { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
    { step: '03', title: 'Development', description: 'Building with modern technologies' },
    { step: '04', title: 'Testing', description: 'Quality assurance and optimization' },
    { step: '05', title: 'Launch', description: 'Deployment and go-live support' },
    { step: '06', title: 'Support', description: 'Ongoing maintenance and updates' }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'GraphQL', 'REST API', 'PostgreSQL', 'MongoDB', 'AWS'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent dark:from-[#FF6600]/10" />
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code className="w-4 h-4 text-[#FF6600]" />
              <span className="text-sm font-medium text-[#FF6600]">Expertise</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              Web Design & Development
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Create stunning, high-performance websites that drive results and deliver exceptional user experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-[#FF6600] text-white rounded-lg font-medium hover:bg-[#FF7722] transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-medium hover:border-[#FF6600] hover:text-[#FF6600] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Why Choose Our Web Development Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine creativity with technical excellence to deliver websites that stand out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#FF6600] transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF6600] transition-colors">
                  <feature.icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#FF6600] to-[#FF8800] text-white p-6 rounded-2xl h-full">
                  <div className="text-4xl font-bold opacity-30 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 text-black dark:text-white font-medium hover:border-[#FF6600] hover:text-[#FF6600] transition-all cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600] to-[#FF8800]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create a website that exceeds your expectations
            </p>
            
            <motion.button
              className="px-8 py-4 bg-white text-[#FF6600] rounded-lg font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
