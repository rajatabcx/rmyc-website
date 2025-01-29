'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { leisureSailingFeatures, packages } from '@/lib/const';
import { ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export function LeisureSailing() {
  return (
    <section className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center bg-secondary'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl md:text-4xl font-bold mb-2'>
            LEISURE SAILING
          </h2>
          <p className='text-sm md:text-base text-muted-foreground'>
            Sailing with the Royal Madras Yacht Club is the perfect way to
            unwind, connect with nature, and explore the beauty of
            Chennai&apos;s waters. Whether you&apos;re a seasoned sailor or
            stepping aboard for the first time, we have something for everyone.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {leisureSailingFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                'group relative overflow-hidden rounded-xl border bg-white p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
                i === leisureSailingFeatures.length - 1 &&
                  'md:col-span-2 lg:col-span-1'
              )}
            >
              <div className='flex flex-col gap-4'>
                <feature.icon className='h-6 w-6 text-blue-600' />
                <h3 className='font-semibold text-xl text-gray-900'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {feature.description}
                </p>
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className='group relative overflow-hidden rounded-xl border'
            >
              <div className='absolute inset-0'>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={600}
                  height={400}
                  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/0' />
              </div>
              <div className='relative p-6 flex flex-col h-full justify-end'>
                <pkg.icon className='h-6 w-6 text-white mb-4' />
                <h3 className='font-semibold text-xl text-white mb-2'>
                  {pkg.title}
                </h3>
                <p className='text-white text-sm'>{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='text-base text-muted-foreground mb-6'>
            Set sail with RMYC for an experience that combines adventure,
            relaxation, and the joy of being on the water!
          </p>
          <Link
            href='/contact'
            className={cn(buttonVariants({ size: 'lg' }), 'group')}
          >
            Contact Now
            <span className='ml-2 group-hover:translate-x-1 transition-transform'>
              <ChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
