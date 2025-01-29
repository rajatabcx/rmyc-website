'use client';

import { SailingBoat } from '../common/SailingBoat';

export function About() {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center bg-secondary relative overflow-hidden'>
      <div className='grid gap-8 lg:grid-cols-2  max-w-[1170px]'>
        <div className='text-center col-span-full'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>About Us</h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        {/* First Text Block */}
        <div className='text-center lg:text-left'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>
            Welcome to Royal Madras Yacht Club
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            Located in Chennai (formerly known as Madras), the Royal Madras
            Yacht Club (RMYC) holds the distinction of being the first sailing
            club in South India. Established in 1911 by Mr. Francis Spring, the
            then Chairman of the Madras Port Trust, the club was originally
            based in the Timber Pond area of the Madras harbor.
          </p>
        </div>

        {/* Right Image Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row'>
          <img
            src='/about_1.jpg'
            alt='about 1'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src='/about_4.jpg'
              alt='about 2'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src='/about_3.jpg'
              alt='about 3'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>

        {/* Left img Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row'>
          <img
            src='/hero_bg.jpg'
            alt='about 2'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%] object-58%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src='/about_5.jpg'
              alt='about 5'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src='/about_8.jpg'
              alt='about 8'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>

        {/* Second Text Block */}
        <div className='text-center lg:text-left'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>
            Royal Madras Yacht Club
          </h2>
          <p className='text-sm md:text-base text-muted-foreground'>
            Discover the thrill of sailing at South India’s oldest sailing club,
            where tradition meets world-class training and facilities. At the
            Royal Madras Yacht Club (RMYC), we offer a unique blend of history,
            expertise, and inclusivity that makes sailing accessible and
            enjoyable for everyone.
          </p>
        </div>
      </div>
      <div className='absolute opacity-20 pointer-events-none bottom-0 right-0 hidden lg:block'>
        <SailingBoat />
      </div>
    </div>
  );
}
