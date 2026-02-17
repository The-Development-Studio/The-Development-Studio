import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from 'lucide-react';

export function SecurityPage() {
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
            <Shield className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-medium text-[#FF6600]">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Security Policy
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
              At The Development Studio, security is our top priority. We implement industry-leading security measures to protect your data and ensure the integrity of our systems.
            </p>
          </div>

          <SecuritySection
            icon={Lock}
            title="Data Encryption"
            measures={[
              {name: 'Transport Layer Security (TLS)', desc: 'All data transmitted between your browser and our servers is encrypted using TLS 1.3'},
              {name: 'End-to-End Encryption', desc: 'Sensitive data is encrypted at rest and in transit'},
              {name: 'Database Encryption', desc: 'All databases are encrypted using AES-256 encryption'},
              {name: 'Secure Key Management', desc: 'Encryption keys are stored in secure, isolated environments'}
            ]}
          />

          <SecuritySection
            icon={Server}
            title="Infrastructure Security"
            measures={[
              {name: 'Cloud Security', desc: 'Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA'},
              {name: 'DDoS Protection', desc: 'Advanced DDoS mitigation to protect against attacks'},
              {name: 'Firewall Protection', desc: 'Multi-layer firewall systems to prevent unauthorized access'},
              {name: 'Regular Backups', desc: 'Automated daily backups with geographic redundancy'}
            ]}
          />

          <SecuritySection
            icon={Eye}
            title="Access Control"
            measures={[
              {name: 'Multi-Factor Authentication', desc: 'MFA required for all administrative access'},
              {name: 'Role-Based Access', desc: 'Strict role-based access control (RBAC) policies'},
              {name: 'Access Logging', desc: 'All access attempts are logged and monitored'},
              {name: 'Regular Audits', desc: 'Periodic security audits and access reviews'}
            ]}
          />

          <SecuritySection
            icon={CheckCircle}
            title="Compliance & Standards"
            measures={[
              {name: 'GDPR Compliant', desc: 'Full compliance with EU General Data Protection Regulation'},
              {name: 'SOC 2 Type II', desc: 'Certified for security, availability, and confidentiality'},
              {name: 'ISO 27001', desc: 'Information security management system certification'},
              {name: 'PCI DSS', desc: 'Payment Card Industry Data Security Standard compliant'}
            ]}
          />

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Report a Security Vulnerability
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you discover a security vulnerability, please report it immediately. We take all security reports seriously.
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Email: <a href="mailto:security@devstudio.com" className="text-[#FF6600] hover:underline font-medium">security@devstudio.com</a></p>
                  <p className="text-sm">We aim to respond to all security reports within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FF6600]/10 dark:bg-[#FF6600]/20 border border-[#FF6600]/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
              Your Security Responsibilities
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <span className="text-[#FF6600]">•</span>
                <span>Use strong, unique passwords for your account</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF6600]">•</span>
                <span>Enable multi-factor authentication when available</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF6600]">•</span>
                <span>Keep your contact information up to date</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF6600]">•</span>
                <span>Report any suspicious activity immediately</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface SecuritySectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  measures: Array<{name: string; desc: string}>;
}

function SecuritySection({ icon: Icon, title, measures }: SecuritySectionProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#FF6600]/10 dark:bg-[#FF6600]/20 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#FF6600]" />
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-white">{title}</h2>
      </div>

      <div className="grid gap-4">
        {measures.map((measure, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-black dark:text-white mb-1">{measure.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{measure.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
