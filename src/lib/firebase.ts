
'use client';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, OAuthProvider, PhoneAuthProvider, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTTFhL_rHbxwhr7Ou63FZh6movPsFEy6M",
  authDomain: "physiohelper-giggw.firebaseapp.com",
  projectId: "physiohelper-giggw",
  storageBucket: "physiohelper-giggw.firebasestorage.app",
  messagingSenderId: "882233083966",
  appId: "1:882233083966:web:46111067f7b93960ea296f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Initialize OAuth providers
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const phoneProvider = new PhoneAuthProvider(auth);

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
googleProvider.addScope('email');
googleProvider.addScope('profile');

// Configure Microsoft provider
microsoftProvider.setCustomParameters({
  prompt: 'select_account'
});
microsoftProvider.addScope('email');
microsoftProvider.addScope('profile');
microsoftProvider.addScope('openid');

// Development mode - connect to emulator if needed
if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099');
  } catch (error) {
    console.log('Firebase emulator already connected or not available');
  }
}

export default app;
