import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/landing/Hero';
import { LearningProgramsSection } from '@/components/learning/LearningProgramSection';
import React from 'react';

export default function Learning() {
  return (
    <>
      <Header />
      <Hero />
      <LearningProgramsSection />
      <Footer />
    </>
  );
}
