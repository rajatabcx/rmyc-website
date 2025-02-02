import { Sailboat2 } from '../common/Sailboat2';

export function SocialResponsibilityAndVision() {
  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='grid gap-8 lg:grid-cols-2  max-w-[1170px] relative z-20'>
        {/* Right Image Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row order-2 lg:order-1'>
          <img
            src='/social_1.jpg'
            alt='about 1'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src='/social_3.jpg'
              alt='about 2'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src='/social_4.jpg'
              alt='about 3'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
          </div>
        </div>
        {/* First Text Block */}
        <div className='text-center lg:text-left order-1 lg:order-1'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>
            Social Responsibility
          </h1>
          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              he Club regularly conducts annual beach cleaning drives, planting
              saplings and sea turtle conservation activity. During the Chennai
              floods in 2015, the RMYC coordinated a massive rescue and relief
              operation along with the Indian Air Force, Indian Army, Indian
              Navy, Indian Coast Guard, Coastal Security Group and the
              Government of Tamil Nadu. The Club boats were on the streets of
              Chennai along with the staff rescuing affected people.
            </p>
            <p className='text-sm text-muted-foreground'>
              In the aftermath of the oil spill in Ennore in 2017, the Club
              immediately organised 900 volunteers through marine colleges who
              painstakingly cleaned the beaches and surrounding areas thereby
              minimising the damage to the marine environment and the beaches.
            </p>
            <p className='text-sm text-muted-foreground'>
              After the severe cyclone Michaung devastated Chennai in Dec 2023,
              the Club boats and members helped in rescue and relief operations.
            </p>
          </div>
        </div>

        {/* Second Text Block */}
        <div className='text-center lg:text-left order-4 lg:order-1'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>Vision</h2>
          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              Tamil Nadu is blessed with a great coastline, ports and
              waterbodies. The weather conditions are suitable for sailing and
              water sports throughout the year. The sea conditions are ideal to
              practice and enhance skills, comparable to the best in the world.
              The Committee has a vision to make sailing and all water sports
              more popular in Tamil Nadu and to create world class sailing
              facilities so that our sailors win more medals making Tamil Nadu
              and India proud.
            </p>
            <p className='text-sm text-muted-foreground'>
              The Club has expanded and has Centres namely
            </p>
            <ul className='list-disc list-inside text-primary space-y-1 my-2 text-sm'>
              <li>
                {' '}
                RMYC Ennore Centre located inside the Kamarajar Port Limited.
              </li>
              <li>
                RMYC Mysore Centre located on the backwaters of the KRS Dam,
                Mysuru.
              </li>
            </ul>
            <p className='text-sm text-muted-foreground'>
              Over the last hundred years having FUN on the waters and opening
              RMYC Centres to promote sailing and water sports has been our
              motto and will continue to be so as we sail passionately beyond
              the Centenary mark.
            </p>
          </div>
        </div>

        {/* Left img Group */}
        <div className='flex gap-4 items-center flex-col md:flex-row order-3 lg:order-1'>
          <img
            src='/social_2.jpg'
            alt='about 2'
            className='md:w-1/2 object-cover rounded-lg aspect-[0.9] h-[70%] object-58%]'
          />
          <div className='md:w-1/2 space-y-4'>
            <img
              src='/social_5.jpg'
              alt='about 5'
              className='w-full object-cover rounded-lg aspect-[0.9]'
            />
            <img
              src='/social_6.jpg'
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
