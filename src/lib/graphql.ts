export const competitionsQuery = `
query CompetitionsQuery {
  competitions(skip: 0) {
    stage
    id
    title
    slug
    content {
      markdown
    }
    competitionStatus
    fromDate
    toDate
    coverImage {
      altText
      url
    }
  }
}
`;

export const competitionQuery = `
query CompetitionQuery($slug: String!) {
  competitions(
    where:{slug:$slug}
  ) {
    stage
    id
    title
    slug
    content {
      markdown
    }
    details{
      markdown
    }
    competitionStatus
    fromDate
    toDate
    coverImage {
      altText
      url
    }
  }
}
`;

export const homePageQuery = `
query HomeQuery ($id: ID!) {
  home(
    where:{id:$id}
  ) {
    mainTitle
    mainDescription
    aboutTitle
    aboutDescription
    aboutPara1Heading
    aboutPara1
    aboutPara1Images{
      url
    }
    aboutPara2Heading
    aboutPara2
    aboutPara2Images{
      url
    }
    whyChooseHeading
    whyCHooseDescription
    whyChooseData{
      name
      description
      image{
        url
      }
    }
    ctaHeading
    ctaDescription
  }
}
`;

export const galleryQuery = `
query GalleryQuery ($id: ID!) {
  gallery(
   where:{id:$id}
  ) {
    galleryImages{
      url
    }
  }
}
`;

export const aboutPageQuery = `
query AboutQuery ($id: ID!) {
  about(
    where:{id:$id}
  ) {
  	pageBg{
      url
    }
    pageHeading
    aboutClubHeading
    aboutClubDescription
    aboutClubData{
      name
      image{
        url
      }
    }
    clubHistoryHeading
    clubHistoryData
    sailingHeading
    sailingSubheading
    sailingDescription{
      markdown
    }
    achievementHeading
    achievementSubtext
    achievementDescription
    achievements
    socialResponsibilityHeading
    socialResponsibilityPara
    socialResponsibilitiesImages{
      url
    }
    visionHeading
    visionPara{
      markdown
    }
    visionImages{
      url
    }
    boatsHeading
    boatsDescription
    boatsData{
      name
      description
      images{
        url
      }
    }
    comitteeHeading
    comitteeDescription
    comitteeData{
      name
      description
    }
    
  }
}
`;
