import { Button } from '@/components/ui/button';

export const Cta = () => {
  return (
    <section className='py-10 bg-secondary/50'>
      <div>
        <div className='flex items-center justify-center rounded-2xl bg-[url("/circle.svg")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
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
    </section>
  );
};
