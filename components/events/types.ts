export type EventSpeaker = {
  id: number;
  image?: string;
  name: string;
  company?: string;
  designation?: string;
  bio?: string;
};

export type EventRecord = {
  id: number;
  name: string;
  headerImage?: string;
  logo?: string;
  date?: string;
  venue?: string;
  overview?: string;
  photogallery?: string;
  speakers?: EventSpeaker[];
};

export type EventCard = {
  id: number;
  title: string;
  image: string;
  date: string;
  venue: string;
  overview: string;
};
