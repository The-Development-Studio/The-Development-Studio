import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { mockSuccessStories } from '../data/mockSuccessStories';

export function SuccessStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Use the first 6 success stories for the main page list
  const caseStudies = mockSuccessStories.slice(0, 6);

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="success-stories" className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

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
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Real results from real partnerships. See how we've helped businesses transform digitally.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={item}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF6600] transition-all duration-500 cursor-pointer flex flex-col h-full"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <Link to={`/success-stories/${study.id}`} className="block h-full">
                {/* Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <motion.img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#FF6600] transition-colors">
                      {study.client}
                    </h3>
                  </div>
                  
                  {/* Key Metric */}
                  {study.metrics.length > 0 && (
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent mb-4">
                      {study.metrics[0].value} {study.metrics[0].label}
                    </div>
                  )}

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors flex-grow line-clamp-3">
                    {study.challenge}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-white hover:text-[#FF6600] transition-colors group/link font-medium">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
