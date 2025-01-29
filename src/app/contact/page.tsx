import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { ContactSection } from '@/components/contact/ContactSection';
import { Hero } from '@/components/landing/Hero';
import React from 'react';

export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <ContactSection />
      <Footer />
    </>
  );
}
