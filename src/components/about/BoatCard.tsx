'use client';

import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Props {
  item: {
    name: string;
    description: string;
    images: string[];
  };
}

export function BoatCard({ item }: Props) {
  return (
    <Card className='w-full max-w-md mx-auto overflow-hidden bg-background shadow-lg'>
      <CardContent className='p-0'>
        <Carousel
          className='w-full'
          plugins={[Autoplay({ delay: 3000 * (Math.random() * 10) })]}
        >
          <CarouselContent>
            {item.images.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image || '/placeholder.svg'}
                    alt={`${item.name} - Image ${index + 1}`}
                    className='object-cover w-full h-full'
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-2' />
          <CarouselNext className='right-2' />
        </Carousel>
        <div className='p-4'>
          <h2 className='text-xl font-semibold text-primary mb-2'>
            {item.name}
          </h2>
          <p className='text-sm text-muted-foreground'>{item.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
