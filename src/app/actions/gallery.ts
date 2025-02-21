import { galleryQuery } from '@/lib/graphql';

export const getGalleryData = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: galleryQuery,
      variables: { id: process.env.GALLERY_PAGE_ID! },
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { gallery },
  } = await response.json();
  return gallery;
};
