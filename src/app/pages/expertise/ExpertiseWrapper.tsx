import { useParams, Navigate } from 'react-router-dom';
import { ExpertiseDetailPage } from './ExpertiseDetailPage';
import { expertiseData } from '@/app/data/expertiseData';

export function ExpertiseWrapper() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !(slug in expertiseData)) {
    return <Navigate to="/expertise" replace />;
  }
  
  const data = expertiseData[slug as keyof typeof expertiseData];
  
  return <ExpertiseDetailPage {...data} />;
}
