import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';
import logo from '@/assets/logo.svg';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Timeout refs for smooth dropdown behavior
  const expertiseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const domainsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    [
      theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      theme === 'dark' ? 'rgba(0, 0, 0, 0.98)' : 'rgba(255, 255, 255, 0.98)'
    ]
  );
  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(8px)', 'blur(12px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: 'expertise' | 'domains') => {
    // Clear any existing timeouts
    if (expertiseTimeoutRef.current) clearTimeout(expertiseTimeoutRef.current);
    if (domainsTimeoutRef.current) clearTimeout(domainsTimeoutRef.current);
    
    // Open the dropdown immediately
    if (dropdown === 'expertise') {
      setExpertiseOpen(true);
    } else {
      setDomainsOpen(true);
    }
  };

  const handleMouseLeave = (dropdown: 'expertise' | 'domains') => {
    // Delay closing to allow moving to dropdown
    const timeoutRef = dropdown === 'expertise' ? expertiseTimeoutRef : domainsTimeoutRef;
    
    timeoutRef.current = setTimeout(() => {
      if (dropdown === 'expertise') {
        setExpertiseOpen(false);
      } else {
        setDomainsOpen(false);
      }
    }, 200); // 200ms delay
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Expertise', 
      href: '/expertise',
      hasDropdown: true,
      dropdown: 'expertise' as const,
      isOpen: expertiseOpen,
      items: [
        { name: 'Web Design & Development', href: '/expertise/web-development' },
        { name: 'Mobile Apps', href: '/expertise/mobile-apps' },
        { name: 'Custom Software', href: '/expertise/custom-software' },
        { name: 'AI & Automation', href: '/expertise/ai-automation' },
        { name: 'Cyber Security', href: '/expertise/cyber-security' },
        { name: 'Digital Solutions', href: '/expertise/digital-solutions' },
        { name: 'Digital Marketing', href: '/expertise/digital-marketing' },
        { name: 'Graphical Designs', href: '/expertise/graphical-designs' }
      ]
    },
    { label: 'Success Stories', href: '/success-stories' },
    { 
      label: 'Domains', 
      href: '/industries',
      hasDropdown: true,
      dropdown: 'domains' as const,
      isOpen: domainsOpen,
      items: [
        { name: 'FinTech', href: '/industries' },
        { name: 'Healthcare', href: '/industries' },
        { name: 'E-Commerce', href: '/industries' },
        { name: 'Logistics', href: '/industries' },
        { name: 'SaaS', href: '/industries' },
        { name: 'Education', href: '/industries' }
      ]
    },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Company', href: '/company' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Connect', href: '/connect' }
  ];

  return (
    <motion.header 
      style={{ 
        backgroundColor: headerBackground,
        backdropFilter: headerBlur 
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 dark:bg-black/90 ${
        isScrolled 
          ? 'shadow-2xl border-b border-black/10 dark:border-white/10' 
          : 'border-b border-black/5 dark:border-white/5'
      }`}
    >
      {/* Gradient Border on Scroll */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6600] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="group flex items-center gap-2 md:gap-3">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="The Development Studio logo" className="w-full h-full object-contain" />
              </motion.div>
              
              <div className="flex flex-col">
                <div className="text-black dark:text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-[#FF6600] transition-colors leading-tight">
                  The Development Studio
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                  A Digital Solution Company
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item, index) => (
              <motion.div 
                key={item.label}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.dropdown)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave(item.dropdown)}
              >
                <Link
                  to={item.href}
                  className="text-black dark:text-white text-sm font-medium flex items-center gap-1 py-3 px-3 xl:px-4 relative group/link whitespace-nowrap hover:text-[#FF6600] transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.div
                      animate={{ rotate: item.isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                  
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6600] to-[#FF8800]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.isOpen && (
                  <motion.div 
                    className="absolute top-full left-0 pt-2 w-72 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => handleMouseEnter(item.dropdown)}
                    onMouseLeave={() => handleMouseLeave(item.dropdown)}
                  >
                    <div className="bg-white dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl py-3 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6600] to-transparent" />
                      
                      {item.items?.map((subItem, subIndex) => (
                        <motion.div
                          key={typeof subItem === 'string' ? subItem : subItem.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: subIndex * 0.03 }}
                        >
                          <Link
                            to={typeof subItem === 'string' ? item.href : subItem.href}
                            className="block px-5 py-3 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 hover:text-[#FF6600] transition-all relative overflow-hidden group/subitem"
                          >
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF6600]"
                              initial={{ scaleY: 0 }}
                              whileHover={{ scaleY: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="relative z-10 font-medium">{typeof subItem === 'string' ? subItem : subItem.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Customer Hub */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 border-l border-gray-300 dark:border-gray-700/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <User className="w-4 h-4 text-black dark:text-white" />
              <Link 
                to="/customer-hub" 
                className="text-black dark:text-white text-sm font-medium hover:text-[#FF6600] transition-colors whitespace-nowrap"
              >
                Customer Hub
              </Link>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#FF6600] dark:hover:bg-[#FF6600] hover:text-white transition-all"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-white"
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden py-6 border-t border-gray-200 dark:border-gray-700/50 bg-white dark:bg-black"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black dark:text-white text-sm py-3 px-4 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all flex items-center justify-between group"
                  >
                    <span className="group-hover:text-[#FF6600] transition-colors">{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: menuItems.length * 0.05 }}
              >
                <Link
                  to="/customer-hub"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-black dark:text-white text-sm py-3 px-4 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all flex items-center gap-2 group"
                >
                  <User className="w-4 h-4" />
                  <span className="group-hover:text-[#FF6600] transition-colors">Customer Hub</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
