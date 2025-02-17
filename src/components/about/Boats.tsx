import React from 'react';

import { boatsData } from '@/lib/const';
import { BoatCard } from './BoatCard';

export function Boats() {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            Boats available
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            Join us to explore the freedom of the open sea, connect with a
            passionate community, and create memories that will last a lifetime.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {boatsData.map((boat) => (
            <BoatCard key={boat.name} item={boat} />
          ))}
        </div>
      </div>
    </div>
  );
}
