import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, Github, Instagram, ArrowRight, Facebook, Youtube, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/expertise/web-development' },
      { name: 'Mobile Apps', href: '/expertise/mobile-apps' },
      { name: 'Custom Software', href: '/expertise/custom-software' },
      { name: 'AI & Automation', href: '/expertise/ai-automation' },
      { name: 'Cyber Security', href: '/expertise/cyber-security' },
      { name: 'Digital Marketing', href: '/expertise/digital-marketing' }
    ],
    company: [
      { name: 'About Us', href: '/company' },
      { name: 'Careers', href: '/opportunities' },
      { name: 'Contact', href: '/connect' },
      { name: 'Blog', href: '/knowledge-hub' },
      { name: 'Industries', href: '/industries' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Terms of Service', href: '/legal/terms-of-service' },
      { name: 'Cookie Policy', href: '/legal/cookie-policy' },
      { name: 'Security', href: '/legal/security' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', Icon: Linkedin, color: 'hover:bg-blue-600' },
    { name: 'Twitter', url: 'https://twitter.com', Icon: Twitter, color: 'hover:bg-blue-400' },
    { name: 'Instagram', url: 'https://instagram.com', Icon: Instagram, color: 'hover:bg-pink-600' },
    { name: 'Facebook', url: 'https://facebook.com', Icon: Facebook, color: 'hover:bg-blue-700' },
    { name: 'YouTube', url: 'https://youtube.com', Icon: Youtube, color: 'hover:bg-red-600' },
    { name: 'GitHub', url: 'https://github.com', Icon: Github, color: 'hover:bg-gray-700' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Top Section - CTA */}
        <div className="border-b border-gray-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Let's Build Something
                  <br />
                  <span className="text-[#FF6600]">Extraordinary</span> Together
                </h3>
                <p className="text-lg text-gray-400 mb-8">
                  Transform your vision into reality with our expert team
                </p>
                <Link to="/connect">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 bg-[#FF6600] hover:bg-[#FF7700] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-orange-500/25"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
              >
                <h4 className="text-xl font-bold mb-6">Stay Connected</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-400 flex-col">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#FF6600]" />
                      <a href="mailto:hello@devstudioco.com" className="hover:text-white transition-colors">
                        hello@devstudioco.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 ml-7">
                      <a href="mailto:info@devstudioco.com" className="hover:text-white transition-colors">
                        info@devstudioco.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 ml-7">
                      <a href="mailto:support@devstudioco.com" className="hover:text-white transition-colors">
                        support@devstudioco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400 flex-col">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#FF6600]" />
                      <a href="tel:+918438028227" className="hover:text-white transition-colors">
                        +91 84380 28227
                      </a>
                    </div>
                    <div className="flex items-center gap-2 ml-7">
                      <a href="tel:+918489551887" className="hover:text-white transition-colors">
                        +91 84895 51887
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-[#FF6600] mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <div className="hover:text-white transition-colors">Chennai, India</div>
                      <div className="hover:text-white transition-colors">Bengaluru, India</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="border-b border-gray-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6600] to-[#FF8800] rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    DS
                  </div>
                  <h5 className="text-xl font-bold mb-2">The Development Studio</h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Crafting Dreams into Design. Your Vision, Our Artistry.
                  </p>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h5 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">Services</h5>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-[#FF6600] transition-colors text-sm inline-flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FF6600] transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h5 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">Company</h5>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-[#FF6600] transition-colors text-sm inline-flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FF6600] transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h5 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">Legal</h5>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-[#FF6600] transition-colors text-sm inline-flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FF6600] transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-900 ${social.color} rounded-xl flex items-center justify-center transition-all border border-gray-800 hover:border-transparent`}
                  aria-label={social.name}
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500 text-center md:text-right"
            >
              <p>© {new Date().getFullYear()} The Development Studio. All rights reserved.</p>
              <p className="mt-1">Crafted with passion & precision</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}