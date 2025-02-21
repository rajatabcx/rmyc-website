'use client';

import { Card } from '@/components/ui/card';

export function WhyChooseUs({
  whyChooseHeading,
  whyCHooseDescription,
  whyChooseData,
}: {
  whyChooseHeading: string;
  whyCHooseDescription: string;
  whyChooseData: {
    name: string;
    description: string;
    image: { url: string };
  }[];
}) {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            {whyChooseHeading}
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {whyCHooseDescription}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
          {/* Top Banner Section */}
          <Card className='col-span-full p-8 relative min-h-[240px] flex justify-between sm:flex-row flex-col-reverse gap-4'>
            <div className='w-full sm:w-[50%]'>
              <h2 className='text-2xl font-semibold mb-2'>
                {whyChooseData[0].name}
              </h2>
              <p className='text-muted-foreground'>
                {whyChooseData[0].description}
              </p>
            </div>
            <div className='relative sm:w-[50%] w-full'>
              <img
                src={whyChooseData[0].image.url}
                alt='why 1'
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </Card>

          <Card className='md:col-span-2 p-8 relative flex flex-col sm:flex-row md:flex-col justify-between gap-4'>
            <img
              src={whyChooseData[1].image.url}
              alt='why 3'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                {whyChooseData[1].name}
              </h2>
              <p className='text-muted-foreground'>
                {whyChooseData[1].description}
              </p>
            </div>
          </Card>

          <Card className='md:col-span-1 p-8 relative flex flex-col justify-between sm:flex-row-reverse md:flex-col gap-4'>
            <img
              src={whyChooseData[2].image.url}
              alt='why 6'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-4'>
                {whyChooseData[2].name}
              </h2>
              <p className='text-muted-foreground'>
                {whyChooseData[2].description}
              </p>
            </div>
          </Card>

          <Card className='md:col-span-1 p-8 relative min-h-[360px] flex flex-col justify-between sm:flex-row md:flex-col gap-4'>
            <img
              src={whyChooseData[3].image.url}
              alt='why 7'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                {whyChooseData[3].name}
              </h2>
              <p className='text-muted-foreground'>
                {whyChooseData[3].description}
              </p>
            </div>
          </Card>

          <Card className='md:col-span-2 p-8 relative min-h-[360px] flex flex-col justify-between sm:flex-row-reverse md:flex-col gap-4'>
            <img
              src={whyChooseData[4].image.url}
              alt='why 5'
              className='object-cover mb-4 rounded-lg w-full sm:w-[50%] md:w-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-2'>
                {whyChooseData[4].name}
              </h2>
              <p className='text-muted-foreground'>
                {whyChooseData[4].description}
              </p>
            </div>
          </Card>

          <Card className='col-span-full p-8 relative flex flex-col justify-between'>
            <div className='flex flex-col-reverse sm:flex-row gap-4'>
              <div className='w-full sm:w-[50%] md:w-full'>
                <h2 className='text-2xl font-semibold mb-2'>
                  {whyChooseData[5].name}
                </h2>
                <p className='text-muted-foreground'>
                  {whyChooseData[5].description}
                </p>
              </div>
              <img
                src={whyChooseData[5].image.url}
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
