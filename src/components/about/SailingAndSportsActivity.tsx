import { SailingBoat } from '../common/SailingBoat';
import Markdown from 'react-markdown';
import { DynamicIcon } from 'lucide-react/dynamic';

export const SailingAndSportsActivity = ({
  sailingData,
  sailingHeading,
  sailingSubheading,
  sailingDescription,
}: {
  sailingData: {
    title: string;
    description: string;
    iconName: string;
  }[];
  sailingHeading: string;
  sailingSubheading: string;
  sailingDescription: {
    markdown: string;
  };
}) => {
  return (
    <section className='px-4 md:px-8 py-12 flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            {sailingHeading}
          </h1>
          <Markdown className='prose prose-sm md:prose-base text-muted-foreground max-w-none'>
            {sailingDescription.markdown}
          </Markdown>
        </div>

        <div className='mt-6 grid gap-3 md:grid-cols-2 lg:mt-10 lg:grid-cols-4'>
          <div className='col-span-full'>
            <h2 className='text-lg md:text-xl font-medium mb-4 text-center'>
              {sailingSubheading}
            </h2>
          </div>
          {sailingData.map((feature) => (
            <div
              key={feature.title}
              className='relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5'
            >
              <span className='md:mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-foreground md:size-12'>
                <DynamicIcon
                  name={feature.iconName as any}
                  className='size-5 md:size-6 text-secondary'
                />
              </span>
              <div className='flex items-center'>
                <h3 className='font-medium md:mb-2 text-base md:text-lg'>
                  {feature.title}
                  <span className='absolute -left-px hidden h-6 w-px bg-primary md:inline-block'></span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute bottom-[-10%] lg:bottom-[-16%] right-[-20%]  sm:right-[-12%] xl:right-0 opacity-20 pointer-events-none scale-[.7]'>
        <SailingBoat />
      </div>
    </section>
  );
};
