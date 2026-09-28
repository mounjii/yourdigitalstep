import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import DetailedServices from '../components/DetailedServices';

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader titleKey="services.title" subtitleKey="services.subtitle" />
      <DetailedServices />
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
};

export default ServicesPage;