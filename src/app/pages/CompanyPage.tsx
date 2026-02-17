import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Users, Target, TrendingUp } from 'lucide-react';
import { SEO, SEOData } from '../components/SEO';

export function CompanyPage() {
  const storyRef = useRef(null);
  const philosophyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: '2021-2023',
      title: 'The Beginning',
      icon: Sparkles,
      content: 'The journey began when Somaskandhan M, the Founder, worked independently as a web designing freelancer. During this period, he handled every aspect of delivery alone—client discussions, design, development coordination, revisions, and support. More importantly, he gained firsthand exposure to a recurring problem in the industry: businesses did not just need websites or applications; they needed structured execution, accountability, and long-term reliability.',
      highlight: 'As projects grew in complexity, so did the vision.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Formalization',
      icon: Target,
      content: 'Somaskandhan formally established The Development Studio (DevStudio) as a Solo Proprietor business. The purpose was clear—to move beyond the limitations of freelancing and create a studio-driven model focused on process, documentation, and professional delivery. DevStudio was designed to operate with the discipline of a company, even when managed by a single founder.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      year: '2024',
      title: 'The Turning Point',
      icon: TrendingUp,
      content: 'The Development Studio secured a major project from a large corporate organization. While this milestone validated years of effort, it also revealed a critical challenge: enterprise-scale projects demand teamwork, shared responsibility, and operational depth. The opportunity was significant—but so was the risk of handling it alone.',
      highlight: 'At this crucial moment, Mr. Raghul joined the journey as Co-Founder.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      year: 'Today',
      title: 'The Partnership Era',
      icon: Users,
      content: 'This partnership marked a defining chapter for The Development Studio. With complementary strengths, shared ownership, and aligned values, the company transitioned from a founder-led operation into a collaborative studio model. The focus expanded from individual execution to team coordination, scalable delivery, and long-term growth.',
      highlight: 'Together, the founders successfully delivered the corporate project—setting a new internal benchmark for quality, communication, and accountability.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const philosophy = [
    {
      number: '01',
      title: 'Ownership, Not Transactions',
      description: 'Treat every project with ownership, not as a transaction'
    },
    {
      number: '02',
      title: 'Systems, Not Shortcuts',
      description: 'Build systems, not shortcuts'
    },
    {
      number: '03',
      title: 'Qualified Professionals',
      description: 'Work with qualified, project-based professionals under clear agreements'
    },
    {
      number: '04',
      title: 'Transparency & Structure',
      description: 'Deliver with transparency, structure, and responsibility'
    }
  ];

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-black">
      <SEO {...SEOData.company} />
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(255, 102, 0, 0.15) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                Our Journey
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About The <span className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent">Company</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              The Development Studio was not born overnight. It was built through persistence, 
              responsibility, and a clear belief in doing things the right way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 md:py-24 relative" ref={storyRef}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6600] via-[#FF8800] to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <motion.div 
                      className="flex-1 w-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#FF6600] transition-all duration-500 group relative overflow-hidden">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/0 to-[#FF6600]/0 group-hover:from-[#FF6600]/10 group-hover:to-transparent transition-all duration-500"></div>

                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <div className="text-sm text-[#FF6600] font-semibold mb-1">{item.year}</div>
                              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 leading-relaxed mb-4">
                            {item.content}
                          </p>
                          
                          {item.highlight && (
                            <div className="bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-lg p-4">
                              <p className="text-white font-medium italic">
                                {item.highlight}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:block relative">
                      <motion.div
                        className="w-4 h-4 bg-[#FF6600] rounded-full ring-4 ring-black"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block flex-1"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900" ref={philosophyRef}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Today, The Development Studio operates with a clear philosophy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#FF6600] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/0 to-transparent group-hover:from-[#FF6600]/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FF6600] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 right-0 w-full h-full"
            style={{
              background: 'radial-gradient(circle at 70% 50%, rgba(255, 102, 0, 0.15) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 md:p-16 rounded-3xl border border-gray-800 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The Journey <span className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] bg-clip-text text-transparent">Continues</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
              What started as a solo freelancing journey has evolved into a studio built on 
              experience, discipline, and adaptability.
            </p>
            <p className="text-xl sm:text-2xl text-white font-semibold">
              And the story continues—with every project, partnership, and problem solved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}