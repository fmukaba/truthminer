import { createContext } from "react";
import { FirestoreData } from "./interfaces";


export const FirestoreContext = createContext<FirestoreData | any>(null);