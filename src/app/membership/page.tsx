import { getMembershipPageData } from '@/actions/membership';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { MembershipSection } from '@/components/membership/MembershipSection';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function Membership() {
  const membership = await getMembershipPageData();
  return (
    <>
      <Header />
      <SectionHero
        heading={membership.pageHeading}
        bgImage={membership.pageBg.url}
      />
      <MembershipSection
        heading={membership.membershipHeading}
        description={membership.membershipDescription}
        benefitsHeading={membership.benefitHeading}
        benefits={membership.benefits}
        categoriesHeading={membership.categoriesHeading}
        categories={membership.categories}
        whyJoinHeading={membership.whyJoinHeading}
        whyJoin={membership.whyJoin}
        howToJoinHeading={membership.howToJoinHeading}
        howToJoinDescription={membership.howToJoinDescription}
        tagLine={membership.tagLine}
      />
      <Footer />
    </>
  );
}
