import { Timestamp } from "@firebase/firestore";

export interface Article {
    title: string;
    content: string;
    date_published: Timestamp;
}

export interface Theme {
    title: string;
    content: string;
    date_published: Timestamp;
}

export interface Lyrical {
    title: string;
    type: string;
    content: string;
    date_published: Timestamp;
}