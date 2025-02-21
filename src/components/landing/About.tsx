'use client';

import { SailingBoat } from '../common/SailingBoat';

export function About({
  aboutTitle,
  aboutDescription,
  aboutPara1Heading,
  aboutPara1,
  aboutPara2Heading,
  aboutPara2,
  aboutPara1Images,
  aboutPara2Images,
}: {
  aboutTitle: string;
  aboutDescription: string;
  aboutPara1Heading: string;
  aboutPara1: string;
  aboutPara2Heading: string;
  aboutPara2: string;
  aboutPara1Images: { url: string }[];
  aboutPara2Images: { url: string }[];
}) {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center bg-secondary relative overflow-hidden'>
      <div className='grid gap-8 lg:grid-cols-2  max-w-[1170px] relative z-20'>
        <div className='text-center col-span-full'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>{aboutTitle}</h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {aboutDescription}
          </p>
        </div>
        {/* First Text Block */}
        <div className='text-center lg:text-left'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>
            {aboutPara1Heading}
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {aboutPara1}
          </p>
        </div>

        {/* Right Image Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row'>
          <img
            src={aboutPara1Images[0].url}
            alt='about 1'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src={aboutPara1Images[1].url}
              alt='about 2'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src={aboutPara1Images[2].url}
              alt='about 3'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>

        {/* Left img Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row'>
          <img
            src={aboutPara2Images[0].url}
            alt='about 2'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%] object-58%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src={aboutPara2Images[1].url}
              alt='about 5'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src={aboutPara2Images[2].url}
              alt='about 8'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>

        {/* Second Text Block */}
        <div className='text-center lg:text-left'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>
            {aboutPara2Heading}
          </h2>
          <p className='text-sm md:text-base text-muted-foreground'>
            {aboutPara2}
          </p>
        </div>
      </div>
      <div className='absolute opacity-20 pointer-events-none bottom-0 right-0 hidden lg:block z-10'>
        <SailingBoat />
      </div>
    </div>
  );
}
