'use client';

import { Card } from '@/components/ui/card';

export function WhyChooseUs() {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>Why Choose Us</h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            Join us to explore the freedom of the open sea, connect with a
            passionate community, and create memories that will last a lifetime.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
          {/* Top Banner Section */}
          <Card className='col-span-full p-8 relative min-h-[240px] flex justify-between sm:flex-row flex-col-reverse gap-4'>
            <div className='w-full sm:w-[50%]'>
              <h2 className='text-2xl font-semibold mb-2'>
                National-Level Coaches and Trainers
              </h2>
              <p className='text-muted-foreground'>
                Learn from some of the best in the country—our expert trainers
                are seasoned sailors with national-level accolades.
              </p>
            </div>
            <div className='relative sm:w-[50%] w-full'>
              <img
                src='/why_2.jpg'
                alt='why 1'
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </Card>

          <Card className='md:col-span-2 p-8 relative flex flex-col sm:flex-row md:flex-col justify-between gap-4'>
            <img
              src='/why_3.jpg'
              alt='why 3'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                Access to Club Boats and Facilities
              </h2>
              <p className='text-muted-foreground'>
                Members enjoy access to a diverse fleet of well-maintained boats
                and top-notch facilities, making every sailing experience
                unforgettable.
              </p>
            </div>
          </Card>

          <Card className='md:col-span-1 p-8 relative flex flex-col justify-between sm:flex-row-reverse md:flex-col gap-4'>
            <img
              src='/why_6.jpg'
              alt='why 6'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-4'>
                YAI-Accredited Training Center
              </h2>
              <p className='text-muted-foreground'>
                Our programs meet the highest standards, ensuring safety and
                quality training at every level.
              </p>
            </div>
          </Card>

          <Card className='md:col-span-1 p-8 relative min-h-[360px] flex flex-col justify-between sm:flex-row md:flex-col gap-4'>
            <img
              src='/gallery_4.jpg'
              alt='why 7'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Open to All Age</h2>
              <p className='text-muted-foreground'>
                Whether you’re 7 or 70, sailing with us is a rewarding
                experience. We welcome kids, adults, and families to join our
                vibrant community.
              </p>
            </div>
          </Card>

          <Card className='md:col-span-2 p-8 relative min-h-[360px] flex flex-col justify-between sm:flex-row-reverse md:flex-col gap-4'>
            <img
              src='/why_5.jpg'
              alt='why 5'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                No Prior Experience Required
              </h2>
              <p className='text-muted-foreground'>
                Sailing at RMYC is for everyone! No swimming knowledge or prior
                experience is needed, and safety is always our top priority.
              </p>
            </div>
          </Card>

          <Card className='col-span-full p-8 relative flex flex-col justify-between'>
            <div className='flex flex-col-reverse sm:flex-row gap-4'>
              <div className='w-full sm:w-[50%] md:w-full'>
                <h2 className='text-2xl font-semibold mb-2'>Rich Legacy</h2>
                <p className='text-muted-foreground'>
                  Established decades ago, RMYC proudly carsries the legacy of
                  being South India’s first sailing club, blending heritage with
                  modern sailing practices.
                </p>
              </div>
              <img
                src='/why_4.jpg'
                alt='why 4'
                className='object-cover mb-4 rounded-lg w-full sm:w-[50%]'
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
