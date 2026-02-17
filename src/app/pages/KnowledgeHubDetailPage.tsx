import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Tag, User, Share2, Bookmark } from 'lucide-react';
import { mockArticles } from '../data/mockArticles';
import { ScrollReveal } from '../components/ScrollReveal';
import { NotFoundPage } from './NotFoundPage';
import { useEffect } from 'react';

export function KnowledgeHubDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20">
      {/* Article Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-end pb-16">
          <ScrollReveal direction="left">
            <Link to="/knowledge-hub" className="inline-flex items-center gap-2 text-white/80 hover:text-[#FF6600] transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Knowledge Hub
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#FF6600] text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="flex justify-between items-start gap-8">
          {/* Main Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-a:text-[#FF6600]">
             <ScrollReveal>
                <div className="lead text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-10 border-l-4 border-[#FF6600] pl-6">
                  {article.excerpt}
                </div>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
                <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
             </ScrollReveal>
          </article>
        </div>

        {/* Tags & Share */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#FF6600] transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#FF6600] transition-colors">
                <Bookmark className="w-5 h-5" />
                <span className="font-medium">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 bg-gray-50 dark:bg-white/5 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
           <div className="w-16 h-16 rounded-full bg-[#FF6600] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
             {article.author[0]}
           </div>
           <div className="text-center sm:text-left">
             <h3 className="text-lg font-bold mb-2">Written by {article.author}</h3>
             <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
               Senior Technical Writer and Software Architect at The Development Studio. Passionate about exploring the intersection of technology and human potential.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
