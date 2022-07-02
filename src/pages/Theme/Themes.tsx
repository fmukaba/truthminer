import { FC, useContext } from "react";
import { FirestoreContext } from "../../context";

const Themes: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data?.themes);
  return <div> List of all biblical theme </div>;
};

export default Themes;
