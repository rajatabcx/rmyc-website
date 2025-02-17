import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import Markdown from 'react-markdown';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Competition } from '@/lib/types';
import { cn } from '@/lib/utils';

export function CompetitionCard({
  title,
  slug,
  competitionStatus,
  fromDate,
  toDate,
  coverImage,
  content,
}: Competition) {
  const statusColors = {
    completed:
      'bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800',
    upcoming: 'bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800',
    ongoing:
      'bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800',
  };

  return (
    <Link href={`/competition/${slug}`}>
      <Card className='overflow-hidden transition-all hover:shadow-lg h-full'>
        <div className='relative h-48 w-full'>
          <Image
            src={coverImage.url || '/placeholder.svg'}
            alt={coverImage.altText || title}
            fill
            className='object-cover'
          />
        </div>
        <CardContent className='p-4'>
          <h3 className='mb-2 text-xl font-semibold line-clamp-2'>{title}</h3>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center text-sm text-gray-600'>
              <CalendarDays className='mr-1 h-4 w-4' />
              <span>
                {new Date(fromDate).toLocaleDateString()} -{' '}
                {new Date(toDate).toLocaleDateString()}
              </span>
            </div>
            <Badge className={cn(statusColors[competitionStatus])}>
              {competitionStatus.charAt(0).toUpperCase() +
                competitionStatus.slice(1)}
            </Badge>
          </div>
          <div className='text-sm text-muted-foreground inline'>
            <Markdown className='prose prose-sm max-w-none'>
              {content.markdown.slice(0, 250) +
                (content.markdown.length > 250 ? ' ...' : '')}
            </Markdown>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
