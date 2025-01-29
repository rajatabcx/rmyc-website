import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { LeisureSailing } from '@/components/LeisureSailing';
import React from 'react';

export default function Leisure() {
  return (
    <>
      <Header />
      <SectionHero heading='Leisure Sailing' />
      <LeisureSailing />
      <Footer />
    </>
  );
}
