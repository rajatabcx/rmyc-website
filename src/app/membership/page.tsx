import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Membership as MembershipComponent } from '@/components/membership/Membership';
import { MembershipBenefit } from '@/components/membership/MembershipBenefit';
import React from 'react';

export default function Membership() {
  return (
    <>
      <Header />
      <MembershipComponent />
      <MembershipBenefit />
      <Footer />
    </>
  );
}
