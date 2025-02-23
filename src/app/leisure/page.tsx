import { getLeisurePageData } from '@/actions/leisure';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { LeisureSailing } from '@/components/LeisureSailing';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function Leisure() {
  const leisure = await getLeisurePageData();
  return (
    <>
      <Header />
      <SectionHero heading={leisure.pageHeading} bgImage={leisure.pageBg.url} />
      <LeisureSailing
        heading={leisure.leisureHeading}
        description={leisure.leisureDescription}
        data={leisure.leisureData}
        packages={leisure.packageData}
        tagLine={leisure.tagLine}
      />
      <Footer />
    </>
  );
}
