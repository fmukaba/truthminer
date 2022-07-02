import { FC, useContext } from "react";
import { FirestoreContext } from "../../context";

const Articles: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data?.articles);
  return <div> List of all articles </div>;
};

export default Articles;
