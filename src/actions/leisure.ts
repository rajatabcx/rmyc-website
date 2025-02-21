'use server';
import { leisurePageQuery } from '@/lib/graphql';

export const getLeisurePageData = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: leisurePageQuery,
      variables: { id: process.env.LEISURE_PAGE_ID! },
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { leisure },
  } = await response.json();
  return leisure;
};
