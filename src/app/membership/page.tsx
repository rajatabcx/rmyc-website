import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { MembershipSection } from '@/components/membership/MembershipSection';
import React from 'react';

export default function Membership() {
  return (
    <>
      <Header />
      <SectionHero heading='Membership' />
      <MembershipSection />
      <Footer />
    </>
  );
}
