import { collection, getDocs } from "@firebase/firestore";
import { FC, useEffect } from "react";
import { db } from "../../firebase";

const Article: FC = () => {
  const articlesCollectionRef = collection(db, "articles");
  useEffect(() => {
    console.log("started");
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      console.log(data);
    };

    getArticles();
  });

  return <div> List of all articles </div>;
};

export default Article;
