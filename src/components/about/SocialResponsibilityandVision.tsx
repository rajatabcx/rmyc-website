import Markdown from 'react-markdown';
import { Sailboat2 } from '../common/Sailboat2';

export function SocialResponsibilityAndVision({
  socialResponsibilityHeading,
  socialResponsibilityPara,
  socialResponsibilitiesImages,
  visionHeading,
  visionPara,
  visionImages,
}: {
  socialResponsibilityHeading: string;
  socialResponsibilityPara: string;
  socialResponsibilitiesImages: { url: string }[];
  visionHeading: string;
  visionPara: { markdown: string };
  visionImages: { url: string }[];
}) {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='grid gap-8 lg:grid-cols-2  max-w-[1170px] relative z-20'>
        {/* Right Image Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row order-2 lg:order-1'>
          <img
            src={socialResponsibilitiesImages[0].url}
            alt='about 1'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src={socialResponsibilitiesImages[1].url}
              alt='about 2'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src={socialResponsibilitiesImages[2].url}
              alt='about 3'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>
        {/* First Text Block */}
        <div className='text-center lg:text-left order-1 lg:order-1'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>
            {socialResponsibilityHeading}
          </h1>
          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              {socialResponsibilityPara}
            </p>
          </div>
        </div>

        {/* Second Text Block */}
        <div className='text-center lg:text-left order-4 lg:order-1'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>
            {visionHeading}
          </h2>
          <div className='space-y-2'>
            <Markdown className='text-sm text-muted-foreground prose'>
              {visionPara.markdown}
            </Markdown>
          </div>
        </div>

        {/* Left img Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row order-3 lg:order-1'>
          <img
            src={visionImages[0].url}
            alt='about 2'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%] object-58%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src={visionImages[1].url}
              alt='about 5'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src={visionImages[2].url}
              alt='about 8'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>
      </div>

      <div className='absolute left-[0%] xl:left-0 bottom-[-2.5%] opacity-30 rotate-[-5deg]  scale-x-[-1] hidden lg:block z-10'>
        <Sailboat2 />
      </div>
    </div>
  );
}
