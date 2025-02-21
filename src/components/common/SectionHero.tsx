import { cn } from '@/lib/utils';
import React from 'react';

export function SectionHero({
  heading,
  bgImage,
}: {
  heading: string;
  bgImage: string;
}) {
  return (
    <section className='relative h-[350px] w-full'>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className={cn(
          'absolute inset-0 bg-cover bg-[position:0%_60%] bg-no-repeat'
        )}
      >
        <div className='absolute inset-0 bg-blue-950/50' />
      </div>

      <div className='relative flex justify-center items-end h-full'>
        <div className='px-4 md:px-8 py-12 max-w-[1170px] flex-1'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold tracking-wider text-white'>
            {heading}
          </h1>
        </div>
      </div>
    </section>
  );
}
