'use server';
import { learningPageQuery } from '@/lib/graphql';

export const getLearningPageData = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: learningPageQuery,
      variables: { id: process.env.LEARNING_PAGE_ID! },
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { learning },
  } = await response.json();
  return learning;
};
