import { competitionQuery, competitionsQuery } from '@/lib/graphql';

export const getCompetitions = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({ query: competitionsQuery }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { competitions },
  } = await response.json();
  return competitions;
};

export const getCompetition = async (slug: string) => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({ query: competitionQuery, variables: { slug } }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { competitions },
  } = await response.json();
  return competitions[0];
};
