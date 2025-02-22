import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { LearningProgramsSection } from '@/components/learning/LearningProgramSection';
import { getLearningPageData } from '@/actions/learning';
import React from 'react';

export default async function Learning() {
  const learning = await getLearningPageData();
  return (
    <>
      <Header />
      <SectionHero
        heading={learning.pageHeading}
        bgImage={learning.pageBg.url}
      />
      <LearningProgramsSection
        heading={learning.learningHeading}
        description={learning.learningDescription}
        data={learning.learningData}
        cardTitle={learning.cardTitle}
        cardDescription={learning.cardDescription}
        tagLine={learning.tagLine}
      />
      <Footer />
    </>
  );
}
