export type Competition = {
  id: string;
  title: string;
  slug: string;
  content: {
    markdown: string;
  };
  competitionStatus: 'completed' | 'upcoming' | 'ongoing';
  fromDate: string;
  toDate: string;
  coverImage: {
    altText: string | null;
    url: string;
  };
};

export type CompetitionDetails = {
  id: string;
  title: string;
  slug: string;
  content: {
    markdown: string;
  };
  competitionStatus: 'completed' | 'upcoming' | 'ongoing';
  fromDate: string;
  toDate: string;
  coverImage: {
    altText: string | null;
    url: string;
  };
  details: {
    markdown: string;
  };
};
