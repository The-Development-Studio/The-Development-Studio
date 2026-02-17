import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UnderConstructionModal } from '../components/UnderConstructionModal';

export function CustomerHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-6">Customer Hub</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Access your projects, documentation, and support resources all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Login Card */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-8 border-2 border-gray-200 dark:border-white/10 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Client Portal</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Access your project dashboard, track progress, and communicate with your team.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#FF6600] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF7722] transition-colors"
            >
              Login to Portal
            </button>
          </div>

          {/* Documentation */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-8 border-2 border-gray-200 dark:border-white/10 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all duration-300">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Browse comprehensive guides, API documentation, and technical resources.
            </p>
            <Link to="/knowledge-hub">
              <button className="w-full border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                View Docs
              </button>
            </Link>
          </div>

          {/* Support */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-8 border-2 border-gray-200 dark:border-white/10 hover:border-[#FF6600] dark:hover:border-[#FF6600] transition-all duration-300">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Support Center</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get help from our support team or browse our knowledge base for answers.
            </p>
            <Link to="/connect">
              <button className="w-full border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                Get Support
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-black dark:bg-white/10 rounded-xl p-12 text-center text-white border border-gray-800 dark:border-white/10">
          <h2 className="text-3xl font-bold mb-4">New Customer?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your project with us today and get access to our comprehensive customer portal, 
            dedicated support team, and premium resources.
          </p>
          <Link to="/connect">
            <button className="bg-[#FF6600] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#FF7722] transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>

      <UnderConstructionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Client Portal"
      />
    </div>
  );
}
