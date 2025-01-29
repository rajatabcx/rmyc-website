'use client';

import { Shield, ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { learningPrograms } from '@/lib/const';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function LearningProgramsSection() {
  return (
    <section className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[1170px] space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl md:text-4xl font-bold mb-2'>
            LEARNING PROGRAMS
          </h2>
          <p className='text-sm md:text-base text-muted-foreground'>
            At the Royal Madras Yacht Club, our learning programs provide a
            structured, safe, and engaging way to immerse yourself in the world
            of sailing. Whether you&apos;re looking to{' '}
            <a href='/contact' className='font-medium hover:underline'>
              develop a new skill or refine your techniques
            </a>
            , our courses cater to all levels of sailing enthusiasts.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          {learningPrograms.map((program) => (
            <div key={program.title}>
              <Card className='h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group'>
                <CardHeader>
                  <program.icon className='h-8 w-8 text-blue-600 mb-2' />
                  <CardTitle className='text-lg'>{program.title}</CardTitle>
                  <CardDescription className='text-sm'>
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-xs sm:text-sm'>
                    {program.features.map((feature, i) => (
                      <li key={i} className='flex items-start gap-2'>
                        <ChevronRight className='h-5 w-5 text-blue-600 shrink-0 mt-0.5' />
                        <span className='text-gray-600'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className='absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
              </Card>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-6 p-6 py-20 rounded-xl bg-primary text-white relative overflow-hidden'>
          <Shield className='absolute right-4 top-1/2 -translate-y-1/2 h-48 w-48 opacity-20' />
          <div className='flex items-center gap-4'>
            <h3 className='text-xl font-semibold'>Safety First at RMYC</h3>
          </div>
          <p className='text-muted text-sm'>
            At RMYC, safety is at the heart of everything we do. Our
            YAI-accredited training center follows strict safety protocols.
            Lifejackets are provided, and all sessions are supervised by our
            expert coaches, who are national-level sailors with years of
            experience. You&apos;ll learn in a secure environment, equipped with
            the best safety gear.
          </p>
        </div>

        <div className='mt-10 text-center'>
          <Link
            href='/contact'
            className={cn(buttonVariants({ size: 'lg' }), 'group')}
          >
            Join our learning programs
            <ChevronRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </Link>
          <p className='mt-4 text-muted-foreground text-sm'>
            Develop your sailing skills while enjoying the peace of mind that
            comes from being in safe, experienced hands.
          </p>
        </div>
      </div>
    </section>
  );
}
