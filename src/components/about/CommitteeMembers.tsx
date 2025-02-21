import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserRound } from 'lucide-react';

export const CommitteeMembers = ({
  committeeHeading,
  committeeDescription,
  committeeData,
}: {
  committeeHeading: string;
  committeeDescription: string;
  committeeData: {
    name: string;
    description: string;
    image: { url: string };
  }[];
}) => {
  return (
    <section className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center bg-secondary'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            {committeeHeading}
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {committeeDescription}
          </p>
        </div>
      </div>
      <div className='mt-6 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4'>
        {committeeData.map((member) => (
          <Card
            key={member.name}
            className='hover:shadow-xl transition-shadow duration-300 border-none bg-white'
          >
            <CardContent className='flex flex-col items-center p-6 text-center'>
              <div className='bg-blue-100 rounded-full p-4 mb-4'>
                <UserRound className='w-10 h-10 text-blue-600' />
              </div>
              <h3 className='font-bold text-xl mb-1 text-blue-900'>
                {member.name}
              </h3>
              <p className='text-lg text-gray-700'>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
