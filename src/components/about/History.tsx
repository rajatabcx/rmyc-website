import React from 'react';

export default function History({
  historyHeading,
  historyDescription,
}: {
  historyHeading: string;
  historyDescription: string;
}) {
  return (
    <section className='px-4 md:px-8 py-12 lg:py-20 flex flex-col items-center justify-center relative overflow-hidden bg-secondary/50'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            {historyHeading}
          </h1>
          <p className='text-xs sm:text-sm md:text-base text-muted-foreground text-justify whitespace-pre-wrap'>
            {historyDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
