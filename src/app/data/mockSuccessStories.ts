export interface SuccessStory {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  image: string;
  logo?: string;
  technologies: string[];
  duration: string;
  featured: boolean;
}

export const mockSuccessStories: SuccessStory[] = [
  {
    id: '1',
    client: 'TechCorp Global',
    industry: 'Financial Services',
    challenge: 'Legacy banking system struggling with modern demands, security vulnerabilities, and poor user experience.',
    solution: 'Complete digital transformation with microservices architecture, modern UI/UX, and enhanced security protocols.',
    results: [
      'Reduced transaction processing time by 75%',
      'Increased customer satisfaction score to 94%',
      'Zero security breaches post-implementation',
      'Reduced operational costs by 40%'
    ],
    metrics: [
      { label: 'Performance Improvement', value: '75%' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'User Satisfaction', value: '94%' }
    ],
    testimonial: {
      quote: 'The Development Studio transformed our entire digital infrastructure. Their expertise and dedication exceeded all expectations.',
      author: 'Rajesh Malhotra',
      position: 'CTO',
      company: 'TechCorp Global'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['React', 'Node.js', 'Kubernetes', 'PostgreSQL', 'AWS'],
    duration: '8 months',
    featured: true
  },
  {
    id: '2',
    client: 'HealthPlus Medical',
    industry: 'Healthcare',
    challenge: 'Fragmented patient data systems leading to inefficiencies and compliance issues.',
    solution: 'Unified healthcare platform with AI-powered diagnostics and HIPAA-compliant infrastructure.',
    results: [
      'Integrated 15+ legacy systems seamlessly',
      'Reduced patient wait times by 60%',
      'Achieved 100% HIPAA compliance',
      'Improved diagnostic accuracy by 35%'
    ],
    metrics: [
      { label: 'Wait Time Reduction', value: '60%' },
      { label: 'Diagnostic Accuracy', value: '+35%' },
      { label: 'System Integration', value: '15+' }
    ],
    testimonial: {
      quote: 'This solution has revolutionized how we deliver patient care. The system is intuitive, secure, and incredibly efficient.',
      author: 'Dr. Priya Sharma',
      position: 'Chief Medical Officer',
      company: 'HealthPlus Medical'
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    technologies: ['Angular', 'Python', 'TensorFlow', 'MongoDB', 'Azure'],
    duration: '10 months',
    featured: true
  },
  {
    id: '3',
    client: 'RetailMax Chain',
    industry: 'Retail & E-commerce',
    challenge: 'Outdated e-commerce platform unable to handle peak traffic, resulting in lost sales and poor customer experience.',
    solution: 'Cloud-native e-commerce platform with real-time inventory management and personalized shopping experience.',
    results: [
      'Handled 10x traffic increase during peak seasons',
      'Increased conversion rate by 45%',
      'Reduced cart abandonment by 32%',
      '99.99% uptime achieved'
    ],
    metrics: [
      { label: 'Traffic Capacity', value: '10x' },
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Uptime', value: '99.99%' }
    ],
    testimonial: {
      quote: 'Our online sales have skyrocketed since the platform launch. The system handles our busiest days without breaking a sweat.',
      author: 'Amit Kapoor',
      position: 'VP of Digital Commerce',
      company: 'RetailMax Chain'
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    technologies: ['Next.js', 'GraphQL', 'Redis', 'Stripe', 'Google Cloud'],
    duration: '6 months',
    featured: true
  },
  {
    id: '4',
    client: 'EduLearn Platform',
    industry: 'Education Technology',
    challenge: 'Growing online learning platform struggling with video streaming quality and student engagement.',
    solution: 'Scalable learning management system with adaptive streaming, AI-driven personalization, and interactive features.',
    results: [
      'Supported 1M+ concurrent users',
      'Improved video streaming quality by 85%',
      'Increased course completion rate by 52%',
      'Reduced infrastructure costs by 35%'
    ],
    metrics: [
      { label: 'Concurrent Users', value: '1M+' },
      { label: 'Streaming Quality', value: '+85%' },
      { label: 'Completion Rate', value: '+52%' }
    ],
    testimonial: {
      quote: 'The platform transformation has been phenomenal. Our students love the seamless experience, and our costs have decreased significantly.',
      author: 'Sneha Reddy',
      position: 'Founder & CEO',
      company: 'EduLearn Platform'
    },
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    technologies: ['Vue.js', 'Django', 'WebRTC', 'Elasticsearch', 'AWS'],
    duration: '7 months',
    featured: false
  },
  {
    id: '5',
    client: 'LogiTrack Solutions',
    industry: 'Logistics & Supply Chain',
    challenge: 'Manual tracking systems causing delivery delays and inventory mismanagement.',
    solution: 'IoT-enabled real-time tracking system with predictive analytics and automated routing.',
    results: [
      'Reduced delivery times by 40%',
      'Decreased operational costs by 28%',
      'Improved route optimization by 55%',
      'Real-time visibility across 500+ vehicles'
    ],
    metrics: [
      { label: 'Delivery Speed', value: '+40%' },
      { label: 'Cost Savings', value: '28%' },
      { label: 'Route Efficiency', value: '+55%' }
    ],
    testimonial: {
      quote: 'Real-time tracking has transformed our operations. We now have complete visibility and control over our entire fleet.',
      author: 'Vikram Mehta',
      position: 'Operations Director',
      company: 'LogiTrack Solutions'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    technologies: ['React Native', 'Node.js', 'IoT', 'PostgreSQL', 'Azure'],
    duration: '9 months',
    featured: false
  },
  {
    id: '6',
    client: 'GreenEnergy Corp',
    industry: 'Renewable Energy',
    challenge: 'Inefficient energy grid management and lack of predictive maintenance capabilities.',
    solution: 'AI-powered energy management platform with predictive analytics and automated grid optimization.',
    results: [
      'Increased grid efficiency by 42%',
      'Reduced downtime by 68%',
      'Predicted failures with 92% accuracy',
      'Saved $5M annually in maintenance costs'
    ],
    metrics: [
      { label: 'Grid Efficiency', value: '+42%' },
      { label: 'Downtime Reduction', value: '68%' },
      { label: 'Prediction Accuracy', value: '92%' }
    ],
    testimonial: {
      quote: 'The AI-driven insights have revolutionized our maintenance strategy. We can now predict and prevent issues before they occur.',
      author: 'Ananya Krishnan',
      position: 'Chief Technology Officer',
      company: 'GreenEnergy Corp'
    },
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'TimescaleDB', 'AWS'],
    duration: '11 months',
    featured: false
  },
  {
    id: '7',
    client: 'FinanceHub Bank',
    industry: 'Banking',
    challenge: 'Slow loan approval process and high fraud detection false positives.',
    solution: 'ML-powered loan processing system with advanced fraud detection and instant decision-making.',
    results: [
      'Reduced loan processing time from days to minutes',
      'Decreased fraud by 78%',
      'Improved customer satisfaction by 65%',
      'Automated 85% of routine decisions'
    ],
    metrics: [
      { label: 'Processing Speed', value: '95%' },
      { label: 'Fraud Reduction', value: '78%' },
      { label: 'Automation', value: '85%' }
    ],
    testimonial: {
      quote: 'This system has completely transformed our loan operations. What used to take days now happens in minutes with better accuracy.',
      author: 'Deepak Verma',
      position: 'Head of Digital Banking',
      company: 'FinanceHub Bank'
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    technologies: ['React', 'Python', 'Scikit-learn', 'Redis', 'AWS'],
    duration: '8 months',
    featured: false
  },
  {
    id: '8',
    client: 'TravelEase Booking',
    industry: 'Travel & Hospitality',
    challenge: 'Fragmented booking systems across multiple platforms leading to double bookings and revenue loss.',
    solution: 'Unified booking platform with real-time availability, dynamic pricing, and multi-channel distribution.',
    results: [
      'Eliminated double bookings completely',
      'Increased revenue by 38%',
      'Reduced booking time by 70%',
      'Integrated 50+ travel partners'
    ],
    metrics: [
      { label: 'Revenue Growth', value: '+38%' },
      { label: 'Booking Speed', value: '+70%' },
      { label: 'Partner Integration', value: '50+' }
    ],
    testimonial: {
      quote: 'The unified platform has streamlined our entire booking process. Our revenue has grown significantly while operational headaches have disappeared.',
      author: 'Meera Nair',
      position: 'Managing Director',
      company: 'TravelEase Booking'
    },
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    technologies: ['Angular', 'Java', 'Microservices', 'MySQL', 'Google Cloud'],
    duration: '7 months',
    featured: false
  },
  {
    id: '9',
    client: 'SmartCity Solutions',
    industry: 'Government & Public Sector',
    challenge: 'Inefficient city services management and lack of citizen engagement platforms.',
    solution: 'Integrated smart city platform with mobile apps, IoT sensors, and citizen portal for seamless service delivery.',
    results: [
      'Reduced service response time by 55%',
      'Increased citizen satisfaction by 72%',
      'Automated 60% of service requests',
      'Connected 10,000+ IoT devices'
    ],
    metrics: [
      { label: 'Response Time', value: '-55%' },
      { label: 'Satisfaction', value: '+72%' },
      { label: 'IoT Devices', value: '10K+' }
    ],
    testimonial: {
      quote: 'This platform has modernized how we serve our citizens. Service delivery is faster, more transparent, and more efficient than ever.',
      author: 'Karthik Menon',
      position: 'Commissioner',
      company: 'SmartCity Solutions'
    },
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    technologies: ['React', 'Node.js', 'IoT', 'MongoDB', 'Azure'],
    duration: '12 months',
    featured: false
  },
  {
    id: '10',
    client: 'MediaStream Pro',
    industry: 'Media & Entertainment',
    challenge: 'Video streaming platform unable to compete with major players due to buffering and poor recommendations.',
    solution: 'Next-gen streaming platform with CDN optimization, AI recommendations, and offline viewing capabilities.',
    results: [
      'Reduced buffering by 88%',
      'Increased watch time by 65%',
      'Improved content discovery by 73%',
      'Supported 4K streaming for 2M+ users'
    ],
    metrics: [
      { label: 'Buffering Reduction', value: '88%' },
      { label: 'Watch Time', value: '+65%' },
      { label: '4K Users', value: '2M+' }
    ],
    testimonial: {
      quote: 'The platform performance is outstanding. Our users are watching more content, and our retention rates have never been better.',
      author: 'Arjun Desai',
      position: 'Chief Product Officer',
      company: 'MediaStream Pro'
    },
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
    technologies: ['React', 'Node.js', 'CDN', 'Redis', 'AWS'],
    duration: '9 months',
    featured: false
  },
  {
    id: '11',
    client: 'AgriTech Innovations',
    industry: 'Agriculture',
    challenge: 'Farmers lacking access to real-time data on weather, soil conditions, and market prices.',
    solution: 'Mobile-first agricultural platform with IoT integration, weather predictions, and marketplace features.',
    results: [
      'Helped 50,000+ farmers optimize yields',
      'Increased crop yields by 35%',
      'Reduced water usage by 40%',
      'Connected farmers to 200+ buyers'
    ],
    metrics: [
      { label: 'Farmers Benefited', value: '50K+' },
      { label: 'Yield Increase', value: '+35%' },
      { label: 'Water Savings', value: '40%' }
    ],
    testimonial: {
      quote: 'This platform has transformed farming in our region. Farmers now have the data and tools they need to succeed in modern agriculture.',
      author: 'Lakshmi Iyer',
      position: 'Director of Innovation',
      company: 'AgriTech Innovations'
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    technologies: ['React Native', 'Python', 'IoT', 'PostgreSQL', 'AWS'],
    duration: '8 months',
    featured: false
  },
  {
    id: '12',
    client: 'SecureVault Systems',
    industry: 'Cybersecurity',
    challenge: 'Enterprise clients needing advanced threat detection and compliance management.',
    solution: 'AI-powered security platform with real-time threat detection, automated responses, and compliance reporting.',
    results: [
      'Detected threats 90% faster',
      'Reduced security incidents by 82%',
      'Automated 95% of compliance reporting',
      'Protected 1000+ enterprise clients'
    ],
    metrics: [
      { label: 'Threat Detection', value: '+90%' },
      { label: 'Incidents Reduced', value: '82%' },
      { label: 'Automation', value: '95%' }
    ],
    testimonial: {
      quote: 'The AI-driven threat detection is phenomenal. We can now identify and respond to threats before they become serious issues.',
      author: 'Rohan Gupta',
      position: 'CISO',
      company: 'SecureVault Systems'
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kafka', 'AWS'],
    duration: '10 months',
    featured: false
  },
  {
    id: '13',
    client: 'FitLife Wellness',
    industry: 'Health & Fitness',
    challenge: 'Disconnected fitness tracking and lack of personalized workout recommendations.',
    solution: 'Comprehensive fitness platform with AI personal trainer, nutrition tracking, and social features.',
    results: [
      'Gained 500K+ active users',
      'Increased user engagement by 78%',
      'Improved fitness goal achievement by 64%',
      '4.8 star rating on app stores'
    ],
    metrics: [
      { label: 'Active Users', value: '500K+' },
      { label: 'Engagement', value: '+78%' },
      { label: 'Goal Achievement', value: '+64%' }
    ],
    testimonial: {
      quote: 'The app has become an essential part of our members\' fitness journey. The AI recommendations are incredibly accurate and motivating.',
      author: 'Neha Kapoor',
      position: 'Founder & CEO',
      company: 'FitLife Wellness'
    },
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    technologies: ['Flutter', 'Node.js', 'TensorFlow', 'MongoDB', 'Google Cloud'],
    duration: '6 months',
    featured: false
  },
  {
    id: '14',
    client: 'RealEstate Connect',
    industry: 'Real Estate',
    challenge: 'Inefficient property search and virtual tour capabilities.',
    solution: 'AI-powered property platform with 3D virtual tours, smart matching, and blockchain-based transactions.',
    results: [
      'Reduced property search time by 65%',
      'Increased qualified leads by 80%',
      'Enabled virtual tours for 10,000+ properties',
      'Reduced transaction time by 50%'
    ],
    metrics: [
      { label: 'Search Efficiency', value: '+65%' },
      { label: 'Lead Quality', value: '+80%' },
      { label: 'Virtual Tours', value: '10K+' }
    ],
    testimonial: {
      quote: 'The 3D virtual tours and AI matching have transformed how we connect buyers with properties. Our closing rates have never been higher.',
      author: 'Sanjay Malhotra',
      position: 'Managing Partner',
      company: 'RealEstate Connect'
    },
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    technologies: ['React', 'Three.js', 'Blockchain', 'PostgreSQL', 'AWS'],
    duration: '9 months',
    featured: false
  },
  {
    id: '15',
    client: 'FoodHub Delivery',
    industry: 'Food & Beverage',
    challenge: 'Slow delivery times and inefficient restaurant-driver-customer coordination.',
    solution: 'Real-time food delivery platform with AI route optimization and live tracking.',
    results: [
      'Reduced average delivery time by 45%',
      'Increased order volume by 120%',
      'Improved driver efficiency by 55%',
      'Onboarded 5,000+ restaurants'
    ],
    metrics: [
      { label: 'Delivery Speed', value: '+45%' },
      { label: 'Order Growth', value: '+120%' },
      { label: 'Restaurants', value: '5K+' }
    ],
    testimonial: {
      quote: 'The platform has revolutionized our delivery operations. Customers love the speed and transparency of real-time tracking.',
      author: 'Pooja Agarwal',
      position: 'COO',
      company: 'FoodHub Delivery'
    },
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
    technologies: ['React Native', 'Node.js', 'Google Maps API', 'Redis', 'Google Cloud'],
    duration: '7 months',
    featured: false
  },
  {
    id: '16',
    client: 'ManufacturePro Industries',
    industry: 'Manufacturing',
    challenge: 'Production inefficiencies and lack of predictive maintenance.',
    solution: 'IoT-enabled manufacturing platform with real-time monitoring and predictive analytics.',
    results: [
      'Increased production efficiency by 48%',
      'Reduced machine downtime by 72%',
      'Decreased maintenance costs by 40%',
      'Improved quality control by 58%'
    ],
    metrics: [
      { label: 'Efficiency Gain', value: '+48%' },
      { label: 'Downtime Reduction', value: '72%' },
      { label: 'Cost Savings', value: '40%' }
    ],
    testimonial: {
      quote: 'Predictive maintenance has been a game-changer. We can now prevent equipment failures before they disrupt production.',
      author: 'Suresh Kumar',
      position: 'Plant Manager',
      company: 'ManufacturePro Industries'
    },
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    technologies: ['Angular', 'Python', 'IoT', 'InfluxDB', 'Azure'],
    duration: '11 months',
    featured: false
  },
  {
    id: '17',
    client: 'InsureTech Solutions',
    industry: 'Insurance',
    challenge: 'Lengthy claim processing and high operational costs.',
    solution: 'Automated insurance platform with AI claim assessment and blockchain verification.',
    results: [
      'Reduced claim processing from weeks to hours',
      'Decreased fraudulent claims by 85%',
      'Improved customer satisfaction by 68%',
      'Reduced operational costs by 45%'
    ],
    metrics: [
      { label: 'Processing Speed', value: '98%' },
      { label: 'Fraud Reduction', value: '85%' },
      { label: 'Cost Savings', value: '45%' }
    ],
    testimonial: {
      quote: 'The automation has transformed our claims process. What used to take weeks now happens in hours with greater accuracy.',
      author: 'Kavita Shah',
      position: 'Chief Claims Officer',
      company: 'InsureTech Solutions'
    },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    technologies: ['Vue.js', 'Python', 'Blockchain', 'PostgreSQL', 'AWS'],
    duration: '10 months',
    featured: false
  },
  {
    id: '18',
    client: 'EventPro Management',
    industry: 'Events & Entertainment',
    challenge: 'Complex event coordination and ticketing system limitations.',
    solution: 'Comprehensive event management platform with virtual and hybrid event capabilities.',
    results: [
      'Managed 1,000+ events successfully',
      'Sold 2M+ tickets with zero downtime',
      'Enabled hybrid events for global audiences',
      'Reduced event setup time by 60%'
    ],
    metrics: [
      { label: 'Events Managed', value: '1K+' },
      { label: 'Tickets Sold', value: '2M+' },
      { label: 'Setup Time', value: '-60%' }
    ],
    testimonial: {
      quote: 'This platform has made event management seamless. From registration to post-event analytics, everything works flawlessly.',
      author: 'Rahul Bhatt',
      position: 'Event Director',
      company: 'EventPro Management'
    },
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    duration: '8 months',
    featured: false
  },
  {
    id: '19',
    client: 'PharmaCare Network',
    industry: 'Pharmaceutical',
    challenge: 'Drug supply chain visibility and regulatory compliance tracking.',
    solution: 'Blockchain-based supply chain platform with real-time tracking and automated compliance reporting.',
    results: [
      'Achieved 100% supply chain visibility',
      'Reduced counterfeit drugs by 95%',
      'Automated 90% of compliance reports',
      'Improved delivery accuracy by 78%'
    ],
    metrics: [
      { label: 'Visibility', value: '100%' },
      { label: 'Counterfeit Reduction', value: '95%' },
      { label: 'Compliance Automation', value: '90%' }
    ],
    testimonial: {
      quote: 'The blockchain solution has given us complete transparency in our supply chain. We can now track every drug from manufacture to patient.',
      author: 'Dr. Sunita Rao',
      position: 'Supply Chain Director',
      company: 'PharmaCare Network'
    },
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    technologies: ['React', 'Blockchain', 'Smart Contracts', 'PostgreSQL', 'AWS'],
    duration: '12 months',
    featured: false
  },
  {
    id: '20',
    client: 'AutoDrive Technologies',
    industry: 'Automotive',
    challenge: 'Fleet management inefficiencies and lack of predictive maintenance.',
    solution: 'IoT-powered fleet management system with AI predictive maintenance and driver behavior analytics.',
    results: [
      'Reduced vehicle downtime by 65%',
      'Decreased fuel costs by 30%',
      'Improved driver safety scores by 55%',
      'Extended vehicle lifespan by 25%'
    ],
    metrics: [
      { label: 'Downtime Reduction', value: '65%' },
      { label: 'Fuel Savings', value: '30%' },
      { label: 'Safety Improvement', value: '+55%' }
    ],
    testimonial: {
      quote: 'The predictive maintenance has saved us millions. We can now identify and fix issues before they cause breakdowns.',
      author: 'Ashok Pillai',
      position: 'Fleet Operations Manager',
      company: 'AutoDrive Technologies'
    },
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    technologies: ['Angular', 'Python', 'IoT', 'TensorFlow', 'Azure'],
    duration: '9 months',
    featured: false
  },
  {
    id: '21',
    client: 'SocialConnect Platform',
    industry: 'Social Media',
    challenge: 'Scaling issues and content moderation challenges with growing user base.',
    solution: 'Scalable social media platform with AI content moderation and personalized feeds.',
    results: [
      'Scaled to 5M+ active users',
      'Improved content moderation accuracy by 92%',
      'Reduced harmful content by 88%',
      'Increased user engagement by 67%'
    ],
    metrics: [
      { label: 'Active Users', value: '5M+' },
      { label: 'Moderation Accuracy', value: '92%' },
      { label: 'Engagement', value: '+67%' }
    ],
    testimonial: {
      quote: 'The AI moderation has made our platform safer while the scalability improvements have supported our rapid growth seamlessly.',
      author: 'Aditya Khanna',
      position: 'Head of Engineering',
      company: 'SocialConnect Platform'
    },
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    technologies: ['React', 'GraphQL', 'TensorFlow', 'Cassandra', 'Google Cloud'],
    duration: '10 months',
    featured: false
  }
];
