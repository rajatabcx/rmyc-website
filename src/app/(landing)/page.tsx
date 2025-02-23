import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { Header } from '@/components/common/Header';
import { About } from '@/components/landing/About';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { Footer } from '@/components/common/Footer';
import { Cta } from '@/components/common/CTA';
import CompetitionWrapper from '@/components/common/CompetitionWrapper';
import { getHomePageData } from '../../actions/home';
import GalleryWrapper from '@/components/common/GalleryWrapper';

export const dynamic = 'force-dynamic';

export default async function page() {
  const homePageData = await getHomePageData();

  return (
    <>
      <Header />
      <Hero
        heading={homePageData.mainTitle}
        subHeading={homePageData.mainDescription}
        bgImage={homePageData.heroBg}
      />
      <About
        aboutTitle={homePageData.aboutTitle}
        aboutDescription={homePageData.aboutDescription}
        aboutPara1Heading={homePageData.aboutPara1Heading}
        aboutPara2Heading={homePageData.aboutPara2Heading}
        aboutPara1={homePageData.aboutPara1}
        aboutPara2={homePageData.aboutPara2}
        aboutPara1Images={homePageData.aboutPara1Images}
        aboutPara2Images={homePageData.aboutPara2Images}
      />
      <WhyChooseUs
        whyChooseHeading={homePageData.whyChooseHeading}
        whyCHooseDescription={homePageData.whyCHooseDescription}
        whyChooseData={homePageData.whyChooseData}
      />
      <CompetitionWrapper />
      <GalleryWrapper />
      <Cta
        heading={homePageData.ctaHeading}
        description={homePageData.ctaDescription}
      />
      <Footer />
    </>
  );
}
