import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { Header } from '@/components/common/Header';
import { About } from '@/components/landing/About';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { Footer } from '@/components/common/Footer';
import Gallery from '@/components/common/Gallery';
import { Cta } from '@/components/common/CTA';
import { galleryImages } from '@/lib/const';
import { getCompetitions } from '@/app/actions/competetions';
import { Competition } from '@/lib/types';
import { CompetitionCard } from '@/components/competetion/CompetetionCard';

export default async function page() {
  const competitions: Competition[] = await getCompetitions();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center'>
        <div className='max-w-[1170px] space-y-6'>
          <div className='text-center'>
            <h1 className='text-2xl md:text-4xl font-bold mb-2'>
              Competitions
            </h1>
            <p className='text-sm md:text-base text-muted-foreground'>
              Join us to explore the freedom of the open sea, connect with a
              passionate community, and create memories that will last a
              lifetime.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {competitions.map((competition) => (
              <CompetitionCard key={competition.id} {...competition} />
            ))}
          </div>
        </div>
      </div>
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
