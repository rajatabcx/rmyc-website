import { sportActivity } from '@/lib/const';
import { SailingBoat } from '../common/SailingBoat';

export const SailingAndSportsActivity = () => {
  return (
    <section className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>
            SAILING AND WATER SPORTS ACTIVITY
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            RMYC is affiliated to the apex body-{' '}
            <b>Yachting Association of India (YAI)</b> and is their first{' '}
            <b>Accredited Training Centre in South India</b>. The Club has
            certified coaches and an excellent training facility replete with
            radio station, emergency radios, AIS based tracking solutions,
            rescue boats, life jackets and a modern class room. The Club has a
            variety of boats for all age groups like the{' '}
            <b>
              Optimist, Laser, 29er, Enterprise, Omega, Seabird, contemporary
              J/80 class of boats, as also kayaks, row boats and motor boats.
            </b>
          </p>
        </div>

        <div className='mt-6 grid gap-3 md:grid-cols-2 lg:mt-10 lg:grid-cols-4'>
          <div className='col-span-full'>
            <h2 className='text-lg md:text-xl font-medium mb-4 text-center'>
              Apart from training members the Club also carries out the
              following
            </h2>
          </div>
          {sportActivity.map((feature) => (
            <div
              key={feature.title}
              className='relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5'
            >
              <span className='md:mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-foreground md:size-12'>
                <feature.icon className='size-5 md:size-6 text-secondary' />
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
      <div className='absolute bottom-[-10%]  sm:right-[-12%] opacity-20 pointer-events-none scale-[.7]'>
        <SailingBoat />
      </div>
    </section>
  );
};
