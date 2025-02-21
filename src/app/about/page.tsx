import React from 'react';

import { Achievements } from '@/components/about/Achievements';
import { Boats } from '@/components/about/Boats';
import { CommitteeMembers } from '@/components/about/CommitteeMembers';
import History from '@/components/about/History';
import { SailingAndSportsActivity } from '@/components/about/SailingAndSportsActivity';
import { SocialResponsibilityAndVision } from '@/components/about/SocialResponsibilityandVision';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SectionHero } from '@/components/common/SectionHero';
import { AboutImages } from '@/components/about/AboutImages';
import GalleryWrapper from '@/components/common/GalleryWrapper';
import { getAboutPageData } from '../../actions/about';

export default async function About() {
  const about = await getAboutPageData();
  return (
    <>
      <Header />
      <SectionHero heading={about.pageHeading} bgImage={about.pageBg.url} />
      <AboutImages
        heading={about.aboutClubHeading}
        description={about.aboutClubDescription}
        data={about.aboutClubData}
      />
      <History
        historyHeading={about.clubHistoryHeading}
        historyDescription={about.clubHistoryData}
      />
      <SailingAndSportsActivity
        sailingData={about.sailingData}
        sailingHeading={about.sailingHeading}
        sailingSubheading={about.sailingSubheading}
        sailingDescription={about.sailingDescription}
      />
      <Achievements
        achievementHeading={about.achievementHeading}
        achievementSubtext={about.achievementSubtext}
        achievementDescription={about.achievementDescription}
        achievements={about.achievements}
      />
      <SocialResponsibilityAndVision
        socialResponsibilityHeading={about.socialResponsibilityHeading}
        socialResponsibilityPara={about.socialResponsibilityPara}
        socialResponsibilitiesImages={about.socialResponsibilitiesImages}
        visionHeading={about.visionHeading}
        visionPara={about.visionPara}
        visionImages={about.visionImages}
      />
      <Boats
        boatsHeading={about.boatsHeading}
        boatsDescription={about.boatsDescription}
        boatsData={about.boatsData}
      />
      <CommitteeMembers
        committeeHeading={about.comitteeHeading}
        committeeDescription={about.comitteeDescription}
        committeeData={about.comitteeData}
      />
      <GalleryWrapper />
      <Footer />
    </>
  );
}
