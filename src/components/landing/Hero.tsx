'use client';

import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';

export function Hero() {
  const scrollToNextSection = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section className='relative min-h-screen w-full'>
      <div className='absolute inset-0 bg-[url(/gallery_6.jpg)] bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-black/30' />
      </div>

      <div className='relative flex min-h-screen flex-col items-center justify-center text-center'>
        <div className='px-4 md:px-8'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold tracking-wider text-white'>
            A TRADITION OF YACHTING EXCELLENCE
          </h1>
          <p className='text-sm md:text-lg text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <button
            onClick={scrollToNextSection}
            className='animate-bounce rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20 mt-8'
            aria-label='Scroll to next section'
          >
            <ChevronDown className='h-6 w-6 text-white' />
          </button>
        </div>
      </div>
    </section>
  );
}
