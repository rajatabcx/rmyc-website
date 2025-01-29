import { Button } from '@/components/ui/button';
import { Sailboat2 } from './Sailboat2';

export const Cta = () => {
  return (
    <section className='py-10 bg-secondary/50 relative overflow-hidden'>
      <div>
        <div className='flex items-center justify-center rounded-2xl px-8 py-20 text-center md:p-20'>
          <div className='mx-auto max-w-screen-md'>
            <h1 className='mb-4 text-balance text-3xl font-semibold md:text-5xl'>
              Join Our Royal Madras Yacht Club
            </h1>
            <p className='text-muted-foreground text-sm md:text-base'>
              We are a community of sailors who are passionate about sailing and
              the sport of sailing. We are a community of sailors who are
              passionate about sailing and the sport of sailing.
            </p>
            <div className='mt-11 flex flex-col justify-center gap-2 sm:flex-row'>
              <Button size='lg'>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-12%] right-0 opacity-30 scale-90 rotate-[5deg]'>
        <Sailboat2 />
      </div>
    </section>
  );
};
