import { aboutPageQuery } from '@/lib/graphql';

export const getAboutPageData = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: aboutPageQuery,
      variables: { id: process.env.ABOUT_PAGE_ID! },
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { about },
  } = await response.json();
  return about;
};
