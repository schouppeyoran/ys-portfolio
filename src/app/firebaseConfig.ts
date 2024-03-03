// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRd7fu0FfDlaqKuT4WcvPRg1YX_1kc7xY",
  authDomain: "yoranschouppe-cms.firebaseapp.com",
  projectId: "yoranschouppe-cms",
  storageBucket: "yoranschouppe-cms.appspot.com",
  messagingSenderId: "64440534800",
  appId: "1:64440534800:web:ddc2544b6b8843efc90795",
  measurementId: "G-8X7K590GT3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
