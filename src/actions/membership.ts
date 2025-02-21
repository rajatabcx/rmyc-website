'use server';
import { membershipPageQuery } from '@/lib/graphql';

export const getMembershipPageData = async () => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: membershipPageQuery,
      variables: { id: process.env.MEMBERSHIP_PAGE_ID! },
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });
  const {
    data: { membership },
  } = await response.json();
  return membership;
};
