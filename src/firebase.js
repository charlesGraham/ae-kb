
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAep3cv0HIeMxj8Qcy4uoCT2kzr6XXndKE",
  authDomain: "agentelite-knowledgebase.firebaseapp.com",
  projectId: "agentelite-knowledgebase",
  storageBucket: "agentelite-knowledgebase.appspot.com",
  messagingSenderId: "329902172100",
  appId: "1:329902172100:web:b0a673806ee0ac41f6e691"
};

// firestore
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAep3cv0HIeMxj8Qcy4uoCT2kzr6XXndKE",
    authDomain: 'agentelite-knowledgebase.firebaseapp.com',
    projectId: 'agentelite-knowledgebase'
  });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();