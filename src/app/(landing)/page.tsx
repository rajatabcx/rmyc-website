import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { Header } from '@/components/common/Header';
import { About } from '@/components/landing/About';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { Footer } from '@/components/common/Footer';
import Gallery from '@/components/common/Gallery';
import { Cta } from '@/components/common/CTA';
import { galleryImages } from '@/lib/const';

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Gallery
        heading='Our Gallery'
        subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        images={galleryImages}
      />
      <Cta />
      <Footer />
    </>
  );
}
