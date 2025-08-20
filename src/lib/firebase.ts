
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "physiohelper-giggw",
  "appId": "1:882233083966:web:46111067f7b93960ea296f",
  "storageBucket": "physiohelper-giggw.firebasestorage.app",
  "apiKey": "AIzaSyDTTFhL_rHbxwhr7Ou63FZh6movPsFEy6M",
  "authDomain": "physiohelper-giggw.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "882233083966"
};

// Initialize Firebase
let app;
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

// Initialize Firestore
let db;
try {
  db = getFirestore(app);
  
  // Connect to emulator in development if needed
  if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true') {
    try {
      connectFirestoreEmulator(db, 'localhost', 8080);
    } catch (error) {
      console.warn('Firebase emulator connection failed:', error);
    }
  }
} catch (error) {
  console.error('Error initializing Firestore:', error);
  throw error;
}

export { app, db };
