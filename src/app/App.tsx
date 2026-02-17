import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CallToAction } from './components/CallToAction';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ExpertiseWrapper } from './pages/expertise/ExpertiseWrapper';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { SuccessStoryDetailPage } from './pages/SuccessStoryDetailPage';
import { DomainsPage } from './pages/DomainsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { KnowledgeHubPage } from './pages/KnowledgeHubPage';
import { KnowledgeHubDetailPage } from './pages/KnowledgeHubDetailPage';
import { CompanyPage } from './pages/CompanyPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { ConnectPage } from './pages/ConnectPage';
import { CustomerHubPage } from './pages/CustomerHubPage';
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/legal/TermsOfServicePage';
import { CookiePolicyPage } from './pages/legal/CookiePolicyPage';
import { SecurityPage } from './pages/legal/SecurityPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <ThemeProvider>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Main Content */}
      {showContent && (
        <Router>
          <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Header />
            <PageTransition>
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/expertise" element={<ExpertisePage />} />
                  <Route path="/expertise/:slug" element={<ExpertiseWrapper />} />
                  <Route path="/success-stories" element={<SuccessStoriesPage />} />
                  <Route path="/success-stories/:id" element={<SuccessStoryDetailPage />} />
                  <Route path="/domains" element={<DomainsPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
                  <Route path="/knowledge-hub/:id" element={<KnowledgeHubDetailPage />} />
                  <Route path="/company" element={<CompanyPage />} />
                  <Route path="/opportunities" element={<OpportunitiesPage />} />
                  <Route path="/connect" element={<ConnectPage />} />
                  <Route path="/customer-hub" element={<CustomerHubPage />} />
                  <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/legal/terms-of-service" element={<TermsOfServicePage />} />
                  <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/legal/security" element={<SecurityPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <CallToAction />
              </main>
            </PageTransition>
            <Footer />
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}
