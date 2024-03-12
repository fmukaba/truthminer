import { Timestamp } from "@firebase/firestore";

export interface Article {
  id: string;
  title: string;
  content: string;
  description: string;
  date_published: Timestamp;
  isFavorite?: boolean;
}

export interface Lyrical {
  id: string;
  title: string;
  type: string;
  content: string;
  date_published: Timestamp;
}
