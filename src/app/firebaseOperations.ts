// firebaseOperations.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const fetchDocuments = async (selectedProject: string) => {
  const querySnapshot = await getDocs(collection(db, selectedProject));
  const docsArray = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const docsObject: { [key: string]: any } = docsArray.reduce<{
    [key: string]: any;
  }>((obj, doc) => {
    obj[doc.id] = doc;
    return obj;
  }, {});
  return docsObject;
};
