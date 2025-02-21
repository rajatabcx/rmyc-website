import { Trophy } from 'lucide-react';

export const Achievements = ({
  achievementHeading,
  achievementSubtext,
  achievementDescription,
  achievements,
}: {
  achievementHeading: string;
  achievementSubtext: string;
  achievementDescription: string;
  achievements: string[];
}) => {
  return (
    <section className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center bg-secondary'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            {achievementHeading}
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {achievementDescription}
          </p>
        </div>

        <div className='mt-6 grid gap-3 md:grid-cols-2 lg:mt-10 lg:grid-cols-4'>
          {achievements.map((feature) => (
            <div
              key={feature}
              className='relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5'
            >
              <span className='md:mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-foreground md:size-12 bg-yellow-500'>
                <Trophy className='size-5 md:size-6' />
              </span>
              <div className='flex items-center'>
                <h3 className='font-medium md:mb-2 text-base md:text-lg'>
                  {feature}
                  <span className='absolute -left-px hidden h-6 w-px bg-primary md:inline-block'></span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className='text-sm text-muted-foreground text-center'>
            {achievementSubtext}
          </p>
        </div>
      </div>
    </section>
  );
};
