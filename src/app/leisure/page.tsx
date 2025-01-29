import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/landing/Hero';
import { LeisureSailing } from '@/components/LeisureSailing';
import React from 'react';

export default function Leisure() {
  return (
    <>
      <Header />
      <Hero />
      <LeisureSailing />
      <Footer />
    </>
  );
}
