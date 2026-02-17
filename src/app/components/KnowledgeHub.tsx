import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';

export function KnowledgeHub() {
  const featuredArticle = mockArticles.find(a => a.featured) || mockArticles[0];
  const otherArticles = mockArticles.filter(a => a.id !== featuredArticle.id).slice(0, 4);

  return (
    <section id="knowledge-hub" className="py-24 bg-gray-50 dark:bg-black/20">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">Knowledge Hub</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, trends, and best practices from our team of experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link to={`/knowledge-hub/${featuredArticle.id}`}>
              <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent dark:border-white/10 hover:border-[#FF6600]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#FF6600] text-white px-4 py-2 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-4 group-hover:text-[#FF6600] transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mb-6">
                       <User className="w-4 h-4 text-gray-400" />
                       <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{featuredArticle.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#FF6600] font-medium group/link">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Articles */}
          {otherArticles.map((article) => (
            <Link key={article.id} to={`/knowledge-hub/${article.id}`}>
              <div
                className="group bg-white dark:bg-white/5 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-white/10 hover:border-[#FF6600]/20 h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-[#FF6600] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-[#FF6600] font-medium group/link">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/knowledge-hub"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-medium hover:bg-[#FF6600] dark:hover:bg-[#FF6600] dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
