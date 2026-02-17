import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24 md:pt-32 pb-16">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 mb-6">
            <Shield className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-medium text-[#FF6600]">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: January 19, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 mb-8 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At The Development Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <Section
            icon={Eye}
            title="Information We Collect"
            content={[
              {
                subtitle: 'Personal Information',
                text: 'We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us. This may include your name, email address, phone number, company name, and job title.'
              },
              {
                subtitle: 'Automatically Collected Information',
                text: 'When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.'
              },
              {
                subtitle: 'Usage Data',
                text: 'We collect information about how you interact with our services, including pages viewed, features used, and actions taken.'
              }
            ]}
          />

          <Section
            icon={Lock}
            title="How We Use Your Information"
            content={[
              {
                subtitle: 'Service Delivery',
                text: 'We use your information to provide, maintain, and improve our services, process transactions, and send you technical notices and support messages.'
              },
              {
                subtitle: 'Communication',
                text: 'To send you marketing communications, newsletters, and updates about our services (with your consent where required).'
              },
              {
                subtitle: 'Analytics',
                text: 'To understand how users interact with our services and improve user experience.'
              },
              {
                subtitle: 'Legal Compliance',
                text: 'To comply with legal obligations and protect our rights and the rights of others.'
              }
            ]}
          />

          <Section
            icon={Shield}
            title="Data Security"
            content={[
              {
                subtitle: 'Protection Measures',
                text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
              },
              {
                subtitle: 'Encryption',
                text: 'We use industry-standard encryption to protect sensitive data during transmission and storage.'
              },
              {
                subtitle: 'Access Controls',
                text: 'We restrict access to personal information to authorized personnel who need it to perform their job functions.'
              }
            ]}
          />

          <Section
            icon={FileText}
            title="Your Rights"
            content={[
              {
                subtitle: 'Access and Correction',
                text: 'You have the right to access and update your personal information at any time.'
              },
              {
                subtitle: 'Data Portability',
                text: 'You can request a copy of your personal data in a structured, commonly used format.'
              },
              {
                subtitle: 'Deletion',
                text: 'You can request deletion of your personal information, subject to certain legal obligations.'
              },
              {
                subtitle: 'Opt-Out',
                text: 'You can opt out of receiving marketing communications at any time by clicking the unsubscribe link in our emails.'
              }
            ]}
          />

          <div className="bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 rounded-2xl p-6 md:p-8 mt-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Contact Us</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Email: privacy@devstudio.com</li>
              <li>• Phone: +1 (555) 123-4567</li>
              <li>• Address: 123 Digital Avenue, Tech City, TC 12345</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface SectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: Array<{ subtitle: string; text: string }>;
}

function Section({ icon: Icon, title, content }: SectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#FF6600]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white m-0">
          {title}
        </h2>
      </div>
      
      <div className="space-y-4 pl-0 md:pl-13">
        {content.map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              {item.subtitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed m-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
