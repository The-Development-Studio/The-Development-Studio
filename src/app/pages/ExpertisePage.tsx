import { Expertise } from '../components/Expertise';
import { SEO, SEOData } from '../components/SEO';

export function ExpertisePage() {
  return (
    <>
      <SEO {...SEOData.expertise} />
      <div className="pt-16 md:pt-20">
        <Expertise />
      </div>
    </>
  );
}