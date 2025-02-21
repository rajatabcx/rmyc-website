import Image from 'next/image';
import React from 'react';

export function AboutImages({
  heading,
  data,
  description,
}: {
  heading: string;
  description: string;
  data: {
    name: string;
    image: {
      url: string;
    };
  }[];
}) {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>{heading}</h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {description}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          {data.map((about) => (
            <div
              key={about.name}
              className='group relative overflow-hidden rounded-xl border h-[300px]'
            >
              <div className='absolute inset-0'>
                <Image
                  src={about.image.url}
                  alt={about.name}
                  width={600}
                  height={500}
                  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-black/0' />
              </div>
              <div className='relative p-6 flex flex-col h-full justify-end'>
                <h3 className='font-semibold text-xl text-white mb-2'>
                  {about.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
