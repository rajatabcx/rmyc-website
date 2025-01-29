import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { LearningProgramsSection } from '@/components/learning/LearningProgramSection';
import React from 'react';

export default function Learning() {
  return (
    <>
      <Header />
      <SectionHero heading='Learning Programs' />
      <LearningProgramsSection />
      <Footer />
    </>
  );
}
