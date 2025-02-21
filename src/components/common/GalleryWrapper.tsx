import { getGalleryData } from '@/actions/gallery';
import React from 'react';
import Gallery from './Gallery';

export default async function GalleryWrapper() {
  const galleryData = await getGalleryData();
  return (
    <Gallery
      heading={galleryData.heading}
      subHeading={galleryData.subHeading}
      images={galleryData.galleryImages}
    />
  );
}
