import { FC, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Themes: FC = () => {
  const getArticles = async () => {
    (await getDocs(collection(db, "themes"))).forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
  useEffect(() => {
    getArticles();
  });

  return <div> List of all biblical themes </div>;
};

export default Themes;
