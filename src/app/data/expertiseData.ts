import { Code, Smartphone, Cpu, Bot, Shield, Globe, TrendingUp, Palette, Zap, Users, Target, CheckCircle, Layers, Cloud, Lock, LineChart } from 'lucide-react';

export const expertiseData = {
  'web-development': {
    title: 'Web Design & Development',
    description: 'Create stunning, high-performance websites that drive results and deliver exceptional user experiences',
    icon: Code,
    features: [
      { icon: Code, title: 'Modern Tech Stack', description: 'React, Next.js, TypeScript, and cutting-edge frameworks' },
      { icon: Smartphone, title: 'Responsive Design', description: 'Pixel-perfect layouts that work on all devices' },
      { icon: Zap, title: 'High Performance', description: 'Optimized for speed and Core Web Vitals' },
      { icon: Shield, title: 'Security First', description: 'Best practices for data protection and security' },
      { icon: Users, title: 'User-Centric', description: 'Intuitive interfaces with exceptional UX' },
      { icon: TrendingUp, title: 'Scalable Solutions', description: 'Built to grow with your business needs' }
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements' },
      { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
      { step: '03', title: 'Development', description: 'Building with modern technologies' },
      { step: '04', title: 'Testing', description: 'Quality assurance and optimization' },
      { step: '05', title: 'Launch', description: 'Deployment and go-live support' },
      { step: '06', title: 'Support', description: 'Ongoing maintenance and updates' }
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'REST API', 'PostgreSQL', 'MongoDB', 'AWS'],
    benefits: [
      'Custom design tailored to your brand',
      'SEO-optimized architecture',
      '99.9% uptime guarantee',
      'Mobile-first approach',
      'Comprehensive documentation',
      'Post-launch support and training'
    ]
  },
  'mobile-apps': {
    title: 'Mobile App Development',
    description: 'Build powerful native and cross-platform mobile applications for iOS and Android',
    icon: Smartphone,
    features: [
      { icon: Smartphone, title: 'Cross-Platform', description: 'React Native for iOS and Android from one codebase' },
      { icon: Zap, title: 'Native Performance', description: 'Smooth animations and fast load times' },
      { icon: Users, title: 'User Experience', description: 'Intuitive navigation and beautiful interfaces' },
      { icon: Cloud, title: 'Cloud Integration', description: 'Seamless backend and API connectivity' },
      { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security standards' },
      { icon: CheckCircle, title: 'App Store Ready', description: 'Compliant with Apple and Google guidelines' }
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Defining app goals and target audience' },
      { step: '02', title: 'UX/UI Design', description: 'Creating stunning mobile interfaces' },
      { step: '03', title: 'Development', description: 'Building with native technologies' },
      { step: '04', title: 'Testing', description: 'Rigorous QA across devices' },
      { step: '05', title: 'Deployment', description: 'App store submission and approval' },
      { step: '06', title: 'Maintenance', description: 'Updates and ongoing support' }
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'GraphQL', 'Redux', 'TypeScript', 'Jest'],
    benefits: [
      'Native iOS and Android apps',
      'Offline functionality support',
      'Push notifications integration',
      'In-app purchases and subscriptions',
      'Analytics and crash reporting',
      'App store optimization (ASO)'
    ]
  },
  'custom-software': {
    title: 'Custom Software Development',
    description: 'Tailored enterprise software solutions that solve complex business challenges',
    icon: Cpu,
    features: [
      { icon: Layers, title: 'Scalable Architecture', description: 'Built to handle growth and complexity' },
      { icon: Cpu, title: 'High Performance', description: 'Optimized for speed and efficiency' },
      { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security protocols' },
      { icon: Cloud, title: 'Cloud Native', description: 'Deployable on AWS, Azure, or GCP' },
      { icon: CheckCircle, title: 'Quality Assured', description: 'Comprehensive testing and validation' },
      { icon: Users, title: 'User Focused', description: 'Designed for end-user success' }
    ],
    process: [
      { step: '01', title: 'Analysis', description: 'Deep dive into business requirements' },
      { step: '02', title: 'Architecture', description: 'System design and planning' },
      { step: '03', title: 'Development', description: 'Agile development sprints' },
      { step: '04', title: 'Integration', description: 'Connecting with existing systems' },
      { step: '05', title: 'Deployment', description: 'Smooth rollout and migration' },
      { step: '06', title: 'Evolution', description: 'Continuous improvement and scaling' }
    ],
    technologies: ['Python', 'Java', 'Node.js', '.NET', 'PostgreSQL', 'MongoDB', 'Kubernetes', 'Docker', 'Microservices', 'CI/CD'],
    benefits: [
      'Fully customized to your workflow',
      'Integration with existing systems',
      'Scalable and maintainable code',
      'Comprehensive documentation',
      'Training for your team',
      'Long-term technical support'
    ]
  },
  'ai-automation': {
    title: 'AI & Automation',
    description: 'Harness the power of artificial intelligence and automation to transform your business',
    icon: Bot,
    features: [
      { icon: Bot, title: 'Machine Learning', description: 'Custom ML models for your use case' },
      { icon: Zap, title: 'Process Automation', description: 'Streamline repetitive tasks' },
      { icon: Target, title: 'Predictive Analytics', description: 'Data-driven insights and forecasting' },
      { icon: Users, title: 'Chatbots & AI Agents', description: 'Intelligent customer support' },
      { icon: LineChart, title: 'Data Intelligence', description: 'Advanced analytics and visualization' },
      { icon: Cloud, title: 'AI Infrastructure', description: 'Scalable cloud-based solutions' }
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Identifying automation opportunities' },
      { step: '02', title: 'Strategy', description: 'AI implementation roadmap' },
      { step: '03', title: 'Development', description: 'Building and training models' },
      { step: '04', title: 'Integration', description: 'Connecting with your systems' },
      { step: '05', title: 'Optimization', description: 'Fine-tuning and improvement' },
      { step: '06', title: 'Monitoring', description: 'Ongoing performance tracking' }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'AutoML', 'Apache Airflow', 'Pandas', 'scikit-learn', 'MLflow'],
    benefits: [
      'Reduced operational costs',
      'Improved accuracy and efficiency',
      ' 24/7 automated workflows',
      'Data-driven decision making',
      'Scalable AI infrastructure',
      'Continuous model improvement'
    ]
  },
  'cyber-security': {
    title: 'Cyber Security',
    description: 'Protect your digital assets with comprehensive security solutions and threat prevention',
    icon: Shield,
    features: [
      { icon: Shield, title: 'Threat Protection', description: 'Advanced security measures and monitoring' },
      { icon: Lock, title: 'Data Encryption', description: 'End-to-end encryption protocols' },
      { icon: CheckCircle, title: 'Compliance', description: 'GDPR, HIPAA, and SOC 2 compliant' },
      { icon: Target, title: 'Penetration Testing', description: 'Identify and fix vulnerabilities' },
      { icon: LineChart, title: 'Security Audits', description: 'Comprehensive security assessments' },
      { icon: Users, title: 'Training', description: 'Security awareness programs' }
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Security posture evaluation' },
      { step: '02', title: 'Planning', description: 'Security strategy development' },
      { step: '03', title: 'Implementation', description: 'Deploy security measures' },
      { step: '04', title: 'Testing', description: 'Vulnerability scanning and pentesting' },
      { step: '05', title: 'Monitoring', description: '24/7 threat detection' },
      { step: '06', title: 'Response', description: 'Incident response and recovery' }
    ],
    technologies: ['SIEM', 'Firewall', 'IDS/IPS', 'VPN', 'WAF', 'Encryption', 'Multi-Factor Auth', 'Zero Trust', 'SOAR', 'EDR'],
    benefits: [
      'Reduced security risks',
      '24/7 monitoring and alerts',
      'Compliance certification support',
      'Incident response planning',
      'Regular security updates',
      'Peace of mind for your business'
    ]
  },
  'digital-solutions': {
    title: 'Digital Solutions',
    description: 'Comprehensive digital transformation services to modernize your business operations',
    icon: Globe,
    features: [
      { icon: Globe, title: 'Digital Strategy', description: 'Roadmap for digital transformation' },
      { icon: Cloud, title: 'Cloud Migration', description: 'Seamless transition to the cloud' },
      { icon: Layers, title: 'System Integration', description: 'Connect disparate systems' },
      { icon: LineChart, title: 'Analytics & BI', description: 'Business intelligence solutions' },
      { icon: Zap, title: 'Process Optimization', description: 'Streamline operations' },
      { icon: Users, title: 'Change Management', description: 'Support during transformation' }
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understanding current state' },
      { step: '02', title: 'Strategy', description: 'Digital transformation roadmap' },
      { step: '03', title: 'Design', description: 'Solution architecture' },
      { step: '04', title: 'Implementation', description: 'Phased rollout approach' },
      { step: '05', title: 'Training', description: 'User adoption programs' },
      { step: '06', title: 'Optimization', description: 'Continuous improvement' }
    ],
    technologies: ['Salesforce', 'Microsoft 365', 'AWS', 'Azure', 'Google Cloud', 'API Gateway', 'ETL Tools', 'Power BI', 'Tableau', 'Zapier'],
    benefits: [
      'Increased operational efficiency',
      'Better customer experiences',
      'Data-driven insights',
      'Reduced IT costs',
      'Improved collaboration',
      'Competitive advantage'
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that drive growth and maximize ROI',
    icon: TrendingUp,
    features: [
      { icon: TrendingUp, title: 'Growth Marketing', description: 'Strategies that scale your business' },
      { icon: Target, title: 'SEO & SEM', description: 'Improve search visibility and traffic' },
      { icon: Users, title: 'Social Media', description: 'Engage your audience effectively' },
      { icon: LineChart, title: 'Analytics', description: 'Track and optimize campaigns' },
      { icon: CheckCircle, title: 'Content Strategy', description: 'Compelling content that converts' },
      { icon: Zap, title: 'Marketing Automation', description: 'Streamline your marketing' }
    ],
    process: [
      { step: '01', title: 'Research', description: 'Market and audience analysis' },
      { step: '02', title: 'Strategy', description: 'Marketing plan development' },
      { step: '03', title: 'Creation', description: 'Content and campaign creation' },
      { step: '04', title: 'Execution', description: 'Launch across channels' },
      { step: '05', title: 'Optimization', description: 'A/B testing and refinement' },
      { step: '06', title: 'Reporting', description: 'ROI analysis and insights' }
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'SEMrush', 'Hootsuite', 'Buffer', 'Ahrefs', 'Hotjar'],
    benefits: [
      'Increased brand awareness',
      'Higher conversion rates',
      'Better customer engagement',
      'Measurable ROI',
      'Multi-channel presence',
      'Data-driven decision making'
    ]
  },
  'graphical-designs': {
    title: 'Graphical Design',
    description: 'Create stunning visual identities and designs that captivate your audience',
    icon: Palette,
    features: [
      { icon: Palette, title: 'Brand Identity', description: 'Complete brand design systems' },
      { icon: Layers, title: 'UI/UX Design', description: 'Beautiful and functional interfaces' },
      { icon: Target, title: 'Marketing Materials', description: 'Print and digital collateral' },
      { icon: CheckCircle, title: 'Illustrations', description: 'Custom graphics and icons' },
      { icon: Globe, title: 'Motion Graphics', description: 'Animated visual content' },
      { icon: Users, title: 'Consultation', description: 'Expert design guidance' }
    ],
    process: [
      { step: '01', title: 'Brief', description: 'Understanding your vision' },
      { step: '02', title: 'Research', description: 'Market and trend analysis' },
      { step: '03', title: 'Concepts', description: 'Initial design explorations' },
      { step: '04', title: 'Refinement', description: 'Iterative improvements' },
      { step: '05', title: 'Finalization', description: 'Final designs and assets' },
      { step: '06', title: 'Delivery', description: 'All formats and guidelines' }
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'After Effects', 'Illustrator', 'Photoshop', 'InDesign', 'Blender', 'Cinema 4D', 'Procreate'],
    benefits: [
      'Consistent brand identity',
      'Professional visual assets',
      'Increased brand recognition',
      'Ready-to-use design files',
      'Comprehensive brand guidelines',
      'Unlimited revisions'
    ]
  }
};
