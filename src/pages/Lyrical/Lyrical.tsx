import { FC, useContext } from "react";
import { FirestoreContext } from "../../context";

const Lyrical: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data?.lyricals);
  return <div> List of all poems/text </div>;
};

export default Lyrical;
