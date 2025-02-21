import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { ContactSection } from '@/components/contact/ContactSection';
import React from 'react';
import { SectionHero } from '@/components/common/SectionHero';

export default function Contact() {
  return (
    <>
      <Header />
      <SectionHero heading='Contact Us' bgImage='/section_hero_bg.jpg' />
      <ContactSection />
      <Footer />
    </>
  );
}
