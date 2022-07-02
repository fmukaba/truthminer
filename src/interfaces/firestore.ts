import { Article, Lyrical, Theme } from "./models";
export interface FirestoreData {
    articles: Article[];
    lyricals: Lyrical[];
    themes: Theme[];
}