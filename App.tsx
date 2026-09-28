import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ProjectModal from './components/ProjectModal';
import MainLayout from './components/MainLayout';
import type { FormData } from './types';

// Lazy load pages for code splitting and faster initial loads
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const TestimonialsPage = React.lazy(() => import('./pages/TestimonialsPage'));
const WhyUsPage = React.lazy(() => import('./pages/WhyUsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'));
const SpecialOfferPage = React.lazy(() => import('./pages/SpecialOfferPage'));
const ThankYouPage = React.lazy(() => import('./pages/ThankYouPage'));


// Create a context to provide the modal open function to any component
type ModalContextType = (initialData?: Partial<FormData> | null) => void;
export const ModalContext = createContext<ModalContextType>(() => {});


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<Partial<FormData> | null>(null);

  const handleOpenModal = (initialData: Partial<FormData> | null = null) => {
    setModalInitialData(initialData);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalInitialData(null); // Reset initial data on close
    document.body.style.overflow = 'auto';
  };
  
  return (
    <ThemeProvider>
      <ModalContext.Provider value={handleOpenModal}>
        <div className="overflow-x-hidden antialiased font-sans relative">
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="testimonials" element={<TestimonialsPage />} />
                <Route path="why-us" element={<WhyUsPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="privacy" element={<PrivacyPolicyPage />} />
                <Route path="terms" element={<TermsOfServicePage />} />
                <Route path="special-offer" element={<SpecialOfferPage />} />
                <Route path="thank-you" element={<ThankYouPage />} />
              </Route>
            </Routes>
          <ProjectModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            initialData={modalInitialData}
          />
        </div>
      </ModalContext.Provider>
    </ThemeProvider>
  );
};

export default App;