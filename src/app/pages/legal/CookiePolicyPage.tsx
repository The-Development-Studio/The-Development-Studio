import { motion } from 'motion/react';
import { Cookie, Settings, Eye, Trash2 } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24 md:pt-32 pb-16">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 mb-6">
            <Cookie className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-medium text-[#FF6600]">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: January 19, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Cookie Policy explains how The Development Studio uses cookies and similar technologies to recognize you when you visit our website.
            </p>
          </div>

          <CookieSection
            icon={Cookie}
            title="What Are Cookies?"
            description="Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."
            types={[
              {name: 'Essential Cookies', desc: 'Required for the website to function properly'},
              {name: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our website'},
              {name: 'Functional Cookies', desc: 'Enable personalized features and preferences'},
              {name: 'Marketing Cookies', desc: 'Track visitors across websites for advertising purposes'}
            ]}
          />

          <CookieSection
            icon={Eye}
            title="How We Use Cookies"
            description="We use cookies for various purposes:"
            types={[
              {name: 'Authentication', desc: 'To remember your login status and preferences'},
              {name: 'Security', desc: 'To protect your account and detect fraudulent activity'},
              {name: 'Performance', desc: 'To analyze site performance and improve user experience'},
              {name: 'Advertising', desc: 'To deliver relevant advertisements based on your interests'}
            ]}
          />

          <CookieSection
            icon={Settings}
            title="Managing Cookies"
            description="You have the right to control cookie settings:"
            types={[
              {name: 'Browser Settings', desc: 'Most browsers allow you to refuse or delete cookies'},
              {name: 'Third-Party Tools', desc: 'You can use opt-out tools for advertising cookies'},
              {name: 'Our Settings', desc: 'Use our cookie preference center to manage your choices'},
              {name: 'Do Not Track', desc: 'We respect Do Not Track signals from your browser'}
            ]}
          />

          <div className="bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Trash2 className="w-6 h-6 text-[#FF6600] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Disabling Cookies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Please note that disabling cookies may affect the functionality of our website and limit your access to certain features.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  For questions: <a href="mailto:privacy@devstudio.com" className="text-[#FF6600] hover:underline">privacy@devstudio.com</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface CookieSectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  types: Array<{name: string; desc: string}>;
}

function CookieSection({ icon: Icon, title, description, types }: CookieSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#FF6600]" />
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-white">{title}</h2>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {types.map((type, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-black dark:text-white mb-1">{type.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
