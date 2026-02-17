import { motion } from 'motion/react';
import { ArrowRight, Check, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ExpertiseDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  process: ProcessStep[];
  technologies: string[];
  benefits: string[];
}

export function ExpertiseDetailPage({
  title,
  description,
  icon: Icon,
  features,
  process,
  technologies,
  benefits
}: ExpertiseDetailProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
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
              <Icon className="w-4 h-4 text-[#FF6600]" />
              <span className="text-sm font-medium text-[#FF6600]">Expertise</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 md:mb-6">
              {title}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 bg-[#FF6600] text-white rounded-lg font-medium hover:bg-[#FF7722] transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
              
              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-medium hover:border-[#FF6600] hover:text-[#FF6600] transition-colors text-sm md:text-base"
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
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 md:mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Why choose our {title.toLowerCase()} services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#FF6600] transition-all hover:shadow-lg group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#FF6600] transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 md:mb-4">
              Our Process
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology for success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-[#FF6600] to-[#FF8800] text-white p-5 md:p-6 rounded-xl md:rounded-2xl h-full">
                  <div className="text-3xl md:text-4xl font-bold opacity-30 mb-2">{item.step}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      {technologies.length > 0 && (
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 md:mb-4">
                Technologies & Tools
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Industry-leading technologies we work with
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 text-black dark:text-white font-medium hover:border-[#FF6600] hover:text-[#FF6600] transition-all cursor-pointer text-xs md:text-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits List */}
      {benefits.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4 md:mb-6">
                  What You Get
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
                  Comprehensive solutions tailored to your needs
                </p>

                <div className="space-y-3 md:space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-black dark:text-white">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together
            </p>
            
            <motion.button
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#FF6600] rounded-lg font-bold hover:bg-gray-100 transition-colors text-sm md:text-base"
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
