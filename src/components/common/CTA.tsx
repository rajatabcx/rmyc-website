import { Sailboat2 } from './Sailboat2';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
export const Cta = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <section className='py-10 bg-secondary/50 relative overflow-hidden'>
      <div>
        <div className='flex items-center justify-center rounded-2xl px-8 py-20 text-center md:p-20'>
          <div className='mx-auto max-w-screen-md'>
            <h1 className='mb-4 text-balance text-3xl font-semibold md:text-5xl'>
              {heading}
            </h1>
            <p className='text-muted-foreground text-sm md:text-base'>
              {description}
            </p>
            <div className='mt-11 flex flex-col justify-center gap-2 sm:flex-row'>
              <Link
                href='/contact'
                className={buttonVariants({ variant: 'default', size: 'lg' })}
              >
                Contact Us
              </Link>
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
