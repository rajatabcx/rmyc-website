import { Achievements } from '@/components/about/Achievements';
import { CommitteeMembers } from '@/components/about/CommitteeMembers';
import { SailingAndSportsActivity } from '@/components/about/SailingAndSportsActivity';
import { SocialResponsibilityAndVision } from '@/components/about/SocialResponsibilityandVision';
import { Footer } from '@/components/common/Footer';
import Gallery from '@/components/common/Gallery';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/landing/Hero';
import { galleryImages } from '@/lib/const';
import React from 'react';

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <SailingAndSportsActivity />
      <Achievements />
      <SocialResponsibilityAndVision />
      <CommitteeMembers />
      <Gallery
        heading='Our Gallery'
        subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        images={galleryImages}
      />
      <Footer />
    </>
  );
}
