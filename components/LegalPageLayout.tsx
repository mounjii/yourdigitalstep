import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from './PageHeader';
import AnimatedSection from './AnimatedSection';

interface LegalPageLayoutProps {
  translationKey: string;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ translationKey }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageContent = t(translationKey, { returnObjects: true }) as any;
  const sections = pageContent.sections || [];

  return (
    <>
      <PageHeader titleKey={`${translationKey}.title`} subtitleKey={`${translationKey}.subtitle`} />
      <AnimatedSection>
        <section className="py-16 sm:py-20 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-brand-secondary/95 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
                <div className="prose dark:prose-invert prose-lg lg:prose-xl max-w-none">
                    {sections.map((section: { heading: string; content: string }, index: number) => (
                    <div key={index} className="mb-8">
                        <h2>{section.heading}</h2>
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                    ))}
                </div>
              </div>
            </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default LegalPageLayout;