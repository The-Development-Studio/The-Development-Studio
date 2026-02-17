import { ScrollReveal } from './ScrollReveal';
import { TextReveal } from './TextReveal';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';
import { ParallaxSection } from './ParallaxSection';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Sparkles } from 'lucide-react';

export function PremiumShowcase() {
  return (
    <div className="relative bg-white dark:bg-black">
      {/* Section 1: Scroll Reveal Animation */}
      <section className="min-h-screen flex items-center justify-center px-4 scroll-snap-start">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-2 bg-[#FF6600]/10 text-[#FF6600] rounded-full text-sm font-medium mb-6">
              Premium Animations
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <TextReveal className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
              Smooth Professional Animations
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Experience the difference of smooth, minimal animations that elevate your brand without overwhelming the user.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton 
                className="px-8 py-4 bg-[#FF6600] text-white rounded-full font-semibold shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
              </MagneticButton>

              <MagneticButton 
                className="px-8 py-4 border-2 border-[#FF6600] text-[#FF6600] rounded-full font-semibold hover:bg-[#FF6600]/5"
              >
                Learn More
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Parallax Effect */}
      <section className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-gray-950 scroll-snap-start">
        <ParallaxSection speed={-0.3} className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-[#FF6600]/10 via-transparent to-[#FF8800]/10" />
        </ParallaxSection>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black dark:text-white">
              Parallax Scrolling
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-16">
              Depth and dimension through subtle parallax effects that create a premium, layered experience.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Fast Performance', desc: 'Optimized for smooth 60fps animations' },
              { icon: Target, title: 'Precise Control', desc: 'Fine-tuned easing curves for professional feel' },
              { icon: Sparkles, title: 'Premium Quality', desc: 'Enterprise-grade animation system' }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                  <item.icon className="w-12 h-12 text-[#FF6600] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 3D Tilt Cards */}
      <section className="min-h-screen flex items-center justify-center px-4 scroll-snap-start">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-black dark:text-white">
              Interactive 3D Cards
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} direction="up" delay={item * 0.1}>
                <TiltCard className="perspective-1000">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
                    <div className="w-16 h-16 bg-[#FF6600]/10 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-[#FF6600]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                      Premium Card {item}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Hover to experience smooth 3D tilt effect with professional easing curves.
                    </p>
                    <MagneticButton className="px-6 py-3 bg-[#FF6600] text-white rounded-full font-medium">
                      Explore
                    </MagneticButton>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sticky Section with Scroll Snap */}
      <section className="relative scroll-snap-start">
        <div className="sticky top-24 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#FF6600]/5 via-transparent to-[#FF8800]/5">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <motion.div
                className="inline-block mb-8"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-24 h-24 bg-[#FF6600] rounded-full opacity-20 blur-2xl" />
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
                Sticky Sections
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Professional scroll-based interactions with smooth snap points for an intuitive navigation experience.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <MagneticButton 
                strength={0.4}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Try Magnetic Button
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 5: Text Animations */}
      <section className="min-h-screen flex items-center justify-center px-4 scroll-snap-start bg-black dark:bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="none">
            <TextReveal 
              type="word" 
              className="text-5xl md:text-7xl font-bold text-white dark:text-black mb-8"
            >
              Premium Text Animations
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5}>
            <p className="text-xl text-gray-400 dark:text-gray-600 mb-12">
              Smooth, word-by-word reveals that add sophistication without distraction
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.7}>
            <div className="flex flex-wrap gap-6 justify-center">
              {['Smooth', 'Professional', 'Premium', 'Corporate'].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.8 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20"
                >
                  <span className="text-white dark:text-black font-medium">{word}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 scroll-snap-start bg-gradient-to-br from-white via-orange-50/30 to-white dark:from-black dark:via-orange-950/20 dark:to-black">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
              Ready to Transform Your Website?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Experience premium animations that elevate your brand and engage your audience.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-6 justify-center">
              <MagneticButton 
                strength={0.5}
                className="px-12 py-5 bg-gradient-to-r from-[#FF6600] to-[#FF8800] text-white rounded-full font-semibold text-lg shadow-2xl shadow-[#FF6600]/25"
              >
                <span className="flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-6 h-6" />
                </span>
              </MagneticButton>

              <MagneticButton 
                strength={0.5}
                className="px-12 py-5 border-2 border-[#FF6600] text-[#FF6600] rounded-full font-semibold text-lg hover:bg-[#FF6600]/5"
              >
                View Portfolio
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
