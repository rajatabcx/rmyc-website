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
