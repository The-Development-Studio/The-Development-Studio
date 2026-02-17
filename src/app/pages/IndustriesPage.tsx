import { motion } from 'motion/react';
import { TrendingUp, Heart, ShoppingCart, Truck, Cloud, GraduationCap, Building2, Plane, Utensils, Car, Factory, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, SEOData } from '../components/SEO';

export function IndustriesPage() {
  const industries = [
    {
      icon: TrendingUp,
      name: 'FinTech',
      description: 'Digital banking, payment processing, blockchain, and financial management solutions',
      projects: '50+',
      color: 'from-blue-500 to-cyan-500',
      solutions: ['Payment Gateways', 'Trading Platforms', 'Digital Wallets', 'Blockchain Apps']
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Patient management systems, telemedicine, health records, and medical devices',
      projects: '40+',
      color: 'from-red-500 to-pink-500',
      solutions: ['EMR/EHR Systems', 'Telemedicine Platforms', 'Health Monitoring', 'Appointment Scheduling']
    },
    {
      icon: ShoppingCart,
      name: 'E-Commerce',
      description: 'Online stores, marketplace platforms, inventory management, and payment integration',
      projects: '80+',
      color: 'from-purple-500 to-pink-500',
      solutions: ['Online Stores', 'Marketplaces', 'Shopping Apps', 'POS Systems']
    },
    {
      icon: Truck,
      name: 'Logistics',
      description: 'Supply chain management, fleet tracking, warehouse systems, and delivery optimization',
      projects: '35+',
      color: 'from-orange-500 to-red-500',
      solutions: ['Fleet Management', 'Route Optimization', 'Warehouse Systems', 'Delivery Tracking']
    },
    {
      icon: Cloud,
      name: 'SaaS',
      description: 'Cloud-based software platforms, subscription services, and enterprise applications',
      projects: '60+',
      color: 'from-indigo-500 to-blue-500',
      solutions: ['Platform Development', 'API Integration', 'Multi-Tenancy', 'Analytics Dashboards']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'E-learning platforms, student management, virtual classrooms, and educational apps',
      projects: '45+',
      color: 'from-green-500 to-emerald-500',
      solutions: ['LMS Platforms', 'Virtual Classrooms', 'Student Portals', 'Assessment Tools']
    },
    {
      icon: Building2,
      name: 'Real Estate',
      description: 'Property listings, CRM systems, virtual tours, and real estate management',
      projects: '30+',
      color: 'from-yellow-500 to-orange-500',
      solutions: ['Property Portals', 'CRM Systems', 'Virtual Tours', 'Booking Systems']
    },
    {
      icon: Plane,
      name: 'Travel & Hospitality',
      description: 'Booking systems, reservation platforms, tour management, and hospitality solutions',
      projects: '25+',
      color: 'from-cyan-500 to-blue-500',
      solutions: ['Booking Platforms', 'Hotel Management', 'Tour Planning', 'Review Systems']
    },
    {
      icon: Utensils,
      name: 'Food & Beverage',
      description: 'Restaurant management, food delivery, menu systems, and kitchen automation',
      projects: '35+',
      color: 'from-red-500 to-orange-500',
      solutions: ['Delivery Apps', 'Restaurant POS', 'Kitchen Display', 'Table Booking']
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Vehicle tracking, dealership systems, maintenance apps, and fleet management',
      projects: '20+',
      color: 'from-gray-600 to-gray-800',
      solutions: ['Fleet Tracking', 'Dealership CRM', 'Service Booking', 'Parts Management']
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Production planning, quality control, inventory systems, and IoT integration',
      projects: '28+',
      color: 'from-slate-600 to-slate-800',
      solutions: ['Production Planning', 'Quality Control', 'IoT Integration', 'Supply Chain']
    },
    {
      icon: Stethoscope,
      name: 'Insurance',
      description: 'Policy management, claims processing, risk assessment, and customer portals',
      projects: '22+',
      color: 'from-teal-500 to-cyan-500',
      solutions: ['Policy Management', 'Claims Processing', 'Risk Assessment', 'Agent Portals']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20 md:pt-28">
      <SEO {...SEOData.industries} />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FF6600 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

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
              transition={{ duration: 0.5 }}
            >
              <Building2 className="w-4 h-4 text-[#FF6600]" />
              <span className="text-sm font-medium text-[#FF6600]">Industries We Serve</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 md:mb-6">
              Empowering Industries with Digital Innovation
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
              We deliver tailored digital solutions across diverse industries, helping businesses transform and thrive in the digital age
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
              <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800">
                <span className="font-bold text-[#FF6600]">350+</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">Projects Delivered</span>
              </div>
              <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800">
                <span className="font-bold text-[#FF6600]">12+</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">Industries Served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-[#FF6600] transition-all hover:shadow-xl relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF6600] transition-all">
                    <industry.icon className="w-7 h-7 md:w-8 md:h-8 text-[#FF6600] group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-[#FF6600] transition-colors">
                      {industry.name}
                    </h3>
                    <span className="text-sm font-semibold text-[#FF6600] bg-[#FF6600]/10 px-3 py-1 rounded-full">
                      {industry.projects}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Solutions */}
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF6600] to-[#FF8800] relative overflow-hidden">
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
              Don't See Your Industry?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We work with businesses across all sectors. Let's discuss how we can help transform your industry.
            </p>
            
            <Link to="/connect">
              <motion.button
                className="px-8 py-4 bg-white text-[#FF6600] rounded-lg font-bold hover:bg-gray-100 transition-colors text-base md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}