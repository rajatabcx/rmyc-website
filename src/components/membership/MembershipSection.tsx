'use client';

import { ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  membershipBenefits,
  membershipCategories,
  membershipReasons,
} from '@/lib/const';
import { SailingBoat } from '../common/SailingBoat';

export function MembershipSection() {
  return (
    <section className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='max-w-[1170px] space-y-6 relative z-20'>
        {/* Header Section */}
        <div className='text-center'>
          <h2 className='text-2xl md:text-4xl font-bold mb-2'>
            MEMBERSHIP AT THE ROYAL MADRAS YACHT CLUB
          </h2>
          <p className='text-sm md:text-base text-muted-foreground'>
            Becoming a member of the Royal Madras Yacht Club (RMYC) means{' '}
            <span className='font-medium'>joining an exclusive community</span>{' '}
            of sailing enthusiasts while gaining access to premier facilities,
            training programs, and unforgettable experiences on the water.
          </p>
        </div>

        {/* Benefits Section */}
        <div>
          <h3 className='text-2xl font-bold mb-6'>MEMBERSHIP BENEFITS</h3>
          <div className='grid gap-6 md:grid-cols-2'>
            {membershipBenefits.map((benefit) => (
              <Card
                key={benefit.title}
                className='group hover:shadow-lg transition-all duration-300'
              >
                <CardHeader>
                  <div className='flex items-center gap-4'>
                    <benefit.icon className='h-6 w-6' />
                    <CardTitle className='text-lg'>{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='mt-16'>
          <h3 className='text-2xl font-bold mb-6'>MEMBERSHIP CATEGORIES</h3>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {membershipCategories.map((category) => (
              <Card
                key={category.title}
                className='group relative overflow-hidden flex flex-col justify-between'
              >
                <CardHeader>
                  <div className='flex items-center gap-4 mb-2'>
                    <category.icon className='h-6 w-6' />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <p className='text-muted-foreground'>
                    {category.description}
                  </p>
                </CardHeader>
                <CardFooter>
                  <Link
                    href='/contact'
                    className={cn(buttonVariants(), 'w-full')}
                  >
                    Get Started
                    <ChevronRight className='ml-2 h-4 w-4' />
                  </Link>
                </CardFooter>
                <div className='absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
              </Card>
            ))}
          </div>
        </div>

        {/* Why Join Section */}
        <div className='mt-16'>
          <h3 className='text-2xl font-bold mb-6'>WHY JOIN RMYC?</h3>
          <div className='grid gap-4'>
            {membershipReasons.map((reason) => (
              <div
                key={reason.title}
                className='flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors'
              >
                <reason.icon className='h-6 w-6 mt-1' />
                <div>
                  <h4 className='font-semibold'>{reason.title}</h4>
                  <p className='text-muted-foreground'>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Join Section */}
        <div className='mt-16'>
          <Card>
            <CardHeader>
              <CardTitle>HOW TO JOIN?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Becoming a member is easy! Simply fill out the membership
                application form, and our team will guide you through the
                process.{' '}
                <a href='/contact' className='underline hover:text-primary'>
                  For more details about membership plans and fees
                </a>
                , get in touch with us today.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <p className='text-sm md:text-base mb-6 text-muted-foreground'>
            Start your sailing adventure with the Royal Madras Yacht Club—where
            the sea meets your passion!
          </p>
          <Link
            href='/contact'
            className={cn(buttonVariants({ size: 'lg' }), 'group')}
          >
            Contact Now
            <ChevronRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300' />
          </Link>
        </div>
      </div>
      <div className='absolute right-[-20%] sm:right-0 bottom-[-3%] sm:bottom-0 opacity-30 z-10 scale-[.7] sm:scale-100'>
        <SailingBoat />
      </div>
    </section>
  );
}
