import { motion } from 'motion/react';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

export function TermsOfServicePage() {
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
            <FileText className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-medium text-[#FF6600]">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Terms of Service
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
              Welcome to The Development Studio. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          <LegalSection
            icon={CheckCircle}
            title="Acceptance of Terms"
            items={[
              'By accessing our services, you confirm that you are at least 18 years old and have the legal capacity to enter into these terms.',
              'You agree to use our services only for lawful purposes and in accordance with these Terms of Service.',
              'We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.'
            ]}
          />

          <LegalSection
            icon={Scale}
            title="Use of Services"
            items={[
              'You may use our services for personal or commercial purposes in compliance with applicable laws and these terms.',
              'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
              'You agree not to use our services for any unlawful, harmful, or fraudulent activities.',
              'We reserve the right to suspend or terminate your access to our services if you violate these terms.'
            ]}
          />

          <LegalSection
            icon={FileText}
            title="Intellectual Property"
            items={[
              'All content, features, and functionality on our website are owned by The Development Studio and protected by copyright, trademark, and other intellectual property laws.',
              'You may not reproduce, distribute, modify, or create derivative works without our express written permission.',
              'Any feedback or suggestions you provide may be used by us without obligation to you.'
            ]}
          />

          <LegalSection
            icon={AlertCircle}
            title="Limitation of Liability"
            items={[
              'Our services are provided "as is" without warranties of any kind, either express or implied.',
              'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.',
              'Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.',
              'Some jurisdictions do not allow the exclusion of certain warranties, so some of the above limitations may not apply to you.'
            ]}
          />

          <div className="bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Questions?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Email: <a href="mailto:legal@devstudio.com" className="text-[#FF6600] hover:underline">legal@devstudio.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface LegalSectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}

function LegalSection({ icon: Icon, title, items }: LegalSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#FF6600]" />
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-white">
          {title}
        </h2>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
            <span className="text-[#FF6600] font-bold flex-shrink-0">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
