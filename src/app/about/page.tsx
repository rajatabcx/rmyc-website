import React from 'react';

import { Achievements } from '@/components/about/Achievements';
import { Boats } from '@/components/about/Boats';
import { CommitteeMembers } from '@/components/about/CommitteeMembers';
import History from '@/components/about/History';
import { SailingAndSportsActivity } from '@/components/about/SailingAndSportsActivity';
import { SocialResponsibilityAndVision } from '@/components/about/SocialResponsibilityandVision';
import { Footer } from '@/components/common/Footer';
import Gallery from '@/components/common/Gallery';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { galleryImages } from '@/lib/const';
import { AboutImages } from '@/components/about/AboutImages';

export default function About() {
  return (
    <>
      <Header />
      <SectionHero heading='About Us' />
      <AboutImages />
      <History />
      <SailingAndSportsActivity />
      <Achievements />
      <SocialResponsibilityAndVision />
      <Boats />
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
