import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { getCompetition } from '@/actions/competetions';
import { CompetitionDetails } from '@/lib/types';
import Image from 'next/image';
import { CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const dynamic = 'force-dynamic';

export default async function CompetitionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const statusColors = {
    completed:
      'bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800',
    upcoming: 'bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800',
    ongoing:
      'bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800',
  };

  const { slug } = await params;
  const competition: CompetitionDetails = await getCompetition(slug);

  return (
    <div>
      <Header />
      <article className='min-h-screen bg-background max-w-[1170px] mx-auto px-4 py-8 '>
        <div className='relative h-[40vh] w-full mb-6'>
          <Image
            src={competition.coverImage.url}
            alt={competition.title}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/50' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
              {competition.title}
            </h1>
            <div className='flex items-center mb-4 gap-4'>
              <div className='flex items-center text-sm text-secondary'>
                <CalendarDays className='mr-1 h-4 w-4' />
                <span>
                  {new Date(competition.fromDate).toLocaleDateString()} -{' '}
                  {new Date(competition.toDate).toLocaleDateString()}
                </span>
              </div>
              <Badge
                className={cn(statusColors[competition.competitionStatus])}
              >
                {competition.competitionStatus.charAt(0).toUpperCase() +
                  competition.competitionStatus.slice(1)}
              </Badge>
            </div>
          </div>
        </div>

        <Markdown
          remarkPlugins={[remarkGfm]}
          className='prose prose-md w-full !max-w-none'
          components={{
            p: ({ children }) => (
              <p className='my-2 text-sm text-muted-foreground text-justify'>
                {children}
              </p>
            ),
            h1: ({ children }) => (
              <h1 className='text-2xl font-bold text-center mb-4'>
                {children}
              </h1>
            ),
            h4: ({ children }) => (
              <h3 className='text-base font-semibold text-center mb-2'>
                {children}
              </h3>
            ),
            strong: ({ children }) => (
              <strong className='text-primary text-center'>{children}</strong>
            ),
            img: ({ src, alt }) => (
              <img src={src} alt={alt} className='mx-auto' />
            ),
          }}
        >
          {competition.details.markdown}
        </Markdown>
      </article>
      <Footer />
    </div>
  );
}
