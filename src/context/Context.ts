import { collection, getDocs, Timestamp, doc, getDoc, setDoc, deleteDoc } from "@firebase/firestore";
import { createContext } from "react";
import { db } from "../firebase";
import { FirestoreData } from "../interfaces";
import { Article, Lyrical } from "../interfaces/models";

export const getArticles = async () => {
  const articles: Article[] = [];
  (await getDocs(collection(db, "articles"))).forEach((doc) => {
    const article: Article = {
      id: doc.id,
      content: doc.data().content,
      description: doc.data().description,
      title: doc.data().title,
      date_published: new Timestamp(
        doc.data().date_published.seconds,
        doc.data().date_published.nanoseconds
      ),
      isFavorite: doc.data().isFavorite,
    };
    articles.push(article);
  });
  return articles;
};

export const getLyricals = async () => {
  const lyricals: Lyrical[] = [];
  (await getDocs(collection(db, "lyricals"))).forEach((doc) => {
    const lyrical: Lyrical = {
      id: doc.id,
      content: doc.data().content,
      title: doc.data().title,
      type: doc.data().type,
      html: doc.data().html,
      date_published: new Timestamp(
        doc.data().date_published.seconds,
        doc.data().date_published.nanoseconds
      ),
    };
    lyricals.push(lyrical);
  });
  return lyricals;
};

export const renameDoc = async (collection:string, oldName:string, newName:string): Promise<void> => {

  try {
    // get old doc
    const docRef = doc(db, collection, oldName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data exists")
      const data = docSnap.data();
      const newDocRef = doc(db, collection, newName);

      // Save the data to 'new name'
      await setDoc(newDocRef, data);

      // Delete the old document
      await deleteDoc(docRef);
    }
  } catch (error) {
    console.error("Error renaming document: ", error);
  }
};

export const awaitFirestoreData = async () => {
  const articles = await getArticles();
  const lyricals = await getLyricals();

  const data: FirestoreData = {
    articles: articles,
    lyricals: lyricals,
  };
  return data;
};

let data: FirestoreData = {
  articles: [],
  lyricals: [],
};
export const FirestoreContext = createContext<FirestoreData>(data);
