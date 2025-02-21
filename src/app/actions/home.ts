import { homePageQuery } from '@/lib/graphql';

export const getHomePageData = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: homePageQuery,
      variables: { id: process.env.HOME_PAGE_ID! },
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { home },
  } = await response.json();
  return home;
};
