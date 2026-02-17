import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { SuccessStory } from '../components/home/SuccessStory';
import { ClientLogos } from '../components/home/ClientLogos';
import { Testimonials } from '../components/home/Testimonials';
import { SEO, SEOData } from '../components/SEO';

export function HomePage() {
  return (
    <>
      <SEO {...SEOData.home} />
      <Hero />
      <ServicesOverview />
      <SuccessStory />
      <ClientLogos />
      <Testimonials />
    </>
  );
}