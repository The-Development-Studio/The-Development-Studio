import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Award, TrendingUp, Calendar, Zap, Server } from 'lucide-react';
import { mockSuccessStories } from '../data/mockSuccessStories';
import { ScrollReveal } from '../components/ScrollReveal';
import { NotFoundPage } from './NotFoundPage';
import { useEffect } from 'react';

export function SuccessStoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const story = mockSuccessStories.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!story) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={story.image} 
            alt={story.client} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-end pb-20">
          <ScrollReveal direction="left">
            <Link to="/success-stories" className="inline-flex items-center gap-2 text-white/80 hover:text-[#FF6600] transition-colors mb-6 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Success Stories
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-[#FF6600] text-white px-3 py-1 rounded-full text-sm font-medium">
                {story.industry}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                {story.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {story.client}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              {story.challenge.substring(0, 100)}...
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Challenge */}
            <ScrollReveal>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">The Challenge</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {story.challenge}
                </p>
              </section>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Server className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">The Solution</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {story.solution}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {story.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 p-4 rounded-lg border border-gray-100 dark:border-white/10">
                      <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Key Results</h2>
                </div>
                <ul className="space-y-4">
                  {story.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* Testimonial */}
            <ScrollReveal>
              <div className="bg-[#FF6600]/5 dark:bg-[#FF6600]/10 p-8 rounded-2xl border border-[#FF6600]/10 relative overflow-hidden">
                <div className="absolute top-4 right-8 text-[#FF6600]/10 text-9xl font-serif">"</div>
                <blockquote className="relative z-10">
                  <p className="text-xl md:text-2xl font-medium italic text-gray-800 dark:text-gray-100 mb-6">
                    "{story.testimonial.quote}"
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold text-xl">
                      {story.testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{story.testimonial.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{story.testimonial.position}, {story.testimonial.company}</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Key Metrics Card */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Award className="text-[#FF6600]" />
                    Impact Metrics
                  </h3>
                  <div className="space-y-6">
                    {story.metrics.map((metric, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{metric.label}</span>
                          <span className="text-2xl font-bold text-[#FF6600]">{metric.value}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-[#FF6600]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Technologies Card */}
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                  <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {story.technologies.map((tech, index) => (
                      <span key={index} className="bg-white dark:bg-black/50 border border-gray-200 dark:border-white/20 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Card */}
              <ScrollReveal direction="right" delay={0.4}>
                <div className="bg-black dark:bg-white text-white dark:text-black rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Have a similar project?</h3>
                  <p className="text-white/70 dark:text-black/70 mb-6 text-sm">
                    Let's discuss how we can help you achieve similar results.
                  </p>
                  <Link to="/connect" className="block w-full bg-[#FF6600] hover:bg-[#FF8800] text-white py-3 rounded-lg font-medium transition-colors">
                    Start a Project
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
