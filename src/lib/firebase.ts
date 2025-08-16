
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "physiohelper-giggw",
  "appId": "1:882233083966:web:46111067f7b93960ea296f",
  "storageBucket": "physiohelper-giggw.firebasestorage.app",
  "apiKey": "AIzaSyDTTFhL_rHbxwhr7Ou63FZh6movPsFEy6M",
  "authDomain": "physiohelper-giggw.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "882233083966"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
