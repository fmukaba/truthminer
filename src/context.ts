import { collection, getDocs, Timestamp } from "@firebase/firestore";
import { createContext } from "react";
import { db } from "./firebase";
import { FirestoreData } from "./interfaces";
import { Article, Theme, Lyrical } from "./interfaces/models";

export const getArticles = async () => {
  const articles: Article[] = [];
  (await getDocs(collection(db, "articles"))).forEach((doc) => {
    const article: Article = {
      id: doc.id,
      content: doc.data().content,
      title: doc.data().title,
      date_published: new Timestamp(
        doc.data().date_published.seconds,
        doc.data().date_published.nanoseconds
      ),
    };
    articles.push(article);
  });
  return articles;
};

export const getThemes = async () => {
  const themes: Theme[] = [];
  (await getDocs(collection(db, "themes"))).forEach((doc) => {
    const theme: Theme = {
      id: doc.id,
      content: doc.data().content,
      title: doc.data().title,
      date_published: new Timestamp(
        doc.data().date_published.seconds,
        doc.data().date_published.nanoseconds
      ),
    };
    themes.push(theme);
  });
  return themes;
};

export const getLyricals = async () => {
  const lyricals: Lyrical[] = [];
  (await getDocs(collection(db, "lyricals"))).forEach((doc) => {
    const lyrical: Lyrical = {
      id: doc.id,
      content: doc.data().content,
      title: doc.data().title,
      type: doc.data().type,
      date_published: new Timestamp(
        doc.data().date_published.seconds,
        doc.data().date_published.nanoseconds
      ),
    };
    lyricals.push(lyrical);
  });
  return lyricals;
};

export const awaitFirestoreData = async () => {
  const articles = await getArticles();
  const lyricals = await getLyricals();
  const themes = await getThemes();

  const data: FirestoreData = {
    articles: articles,
    lyricals: lyricals,
    themes: themes,
  };
  return data;
};

export const FirestoreContext = createContext<FirestoreData | null>(null);
