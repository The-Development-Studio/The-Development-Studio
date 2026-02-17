import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Zap, Target, Users, Award, TrendingUp, Globe } from 'lucide-react';
import { useState } from 'react';
import { CountUp } from '@/app/components/CountUp';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "The Development Studio transformed our entire digital infrastructure. Their attention to detail and technical expertise is unmatched. They didn't just deliver a product—they delivered a partnership.",
      author: "Sarah Mitchell",
      role: "CTO",
      company: "TechVenture Inc.",
      rating: 5,
      project: "Enterprise Platform Redesign",
      image: "SM"
    },
    {
      quote: "Working with this team was a game-changer for our business. They took our complex requirements and turned them into an elegant, scalable solution that exceeded all expectations.",
      author: "James Rodriguez",
      role: "Founder & CEO",
      company: "FinanceFlow",
      rating: 5,
      project: "FinTech Mobile App",
      image: "JR"
    },
    {
      quote: "Exceptional quality, incredible speed, and outstanding communication. They understood our vision instantly and brought it to life with creativity and precision.",
      author: "Emily Chen",
      role: "VP of Product",
      company: "HealthSync",
      rating: 5,
      project: "Healthcare SaaS Platform",
      image: "EC"
    },
    {
      quote: "Their innovative approach to problem-solving and commitment to excellence sets them apart. Every interaction felt personal, professional, and purposeful.",
      author: "Michael Thompson",
      role: "Director of Technology",
      company: "RetailMax",
      rating: 5,
      project: "E-Commerce Integration",
      image: "MT"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 dark:from-gray-950 dark:via-black dark:to-orange-950/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#FF6600] tracking-wider uppercase">Client Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            Trusted by Industry
            <br />
            <span className="italic font-light text-gray-600 dark:text-gray-400">Leaders</span> Worldwide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the companies we've helped transform
          </p>
        </motion.div>

        {/* Main Testimonial - Magazine Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
            {/* Decorative Top Bar */}
            <div className="h-2 bg-gradient-to-r from-[#FF6600] via-purple-500 to-blue-500" />

            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Side - Quote Section */}
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-[#FF6600]/20" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-[#FF6600] fill-[#FF6600]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl md:text-3xl font-medium text-black dark:text-white leading-relaxed mb-8">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonials[activeIndex].image}
                      </div>
                      
                      <div>
                        <div className="font-bold text-lg text-black dark:text-white">
                          {testimonials[activeIndex].author}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-12">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6600] hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6600] hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>

                  {/* Dots */}
                  <div className="flex gap-2 ml-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeIndex 
                            ? 'bg-[#FF6600] w-8' 
                            : 'bg-gray-300 dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Project Tag */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#FF6600] to-[#FF8800] p-8 md:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-white/80 text-sm font-semibold mb-2 uppercase tracking-wider">
                      Project
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {testimonials[activeIndex].project}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="text-white/90 font-medium">On-Time Delivery</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div className="text-white/90 font-medium">Exceptional Quality</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Target className="w-6 h-6" />
                        </div>
                        <div className="text-white/90 font-medium">Goal Exceeded</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section - Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { number: 4.9, decimals: 1, suffix: '/5.0', label: 'Average Rating', icon: Star },
            { number: 500, suffix: '+', label: 'Happy Clients', icon: Users },
            { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: Award },
            { number: 45, suffix: '+', label: 'Countries Served', icon: Globe }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#FF6600] mb-2">
                <CountUp 
                  end={stat.number} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}