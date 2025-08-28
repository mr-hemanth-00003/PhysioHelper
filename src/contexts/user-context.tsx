'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Firebase types (will be imported dynamically)
type FirebaseUser = any;
type RecaptchaVerifier = any;

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'student' | 'professional' | 'instructor' | 'admin';
  specialization?: string;
  institution?: string;
  experience?: number;
  bio?: string;
  phone?: string;
  location?: string;
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    darkMode: boolean;
    language: string;
  };
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'expired' | 'cancelled';
    startDate: string;
    endDate: string;
  };
  createdAt: string;
  lastLogin: string;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  // Email/Password authentication
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  // OAuth authentication
  loginWithGoogle: () => Promise<void>;
  loginWithMicrosoft: () => Promise<void>;
  loginWithPhone: (phoneNumber: string, recaptchaVerifier: RecaptchaVerifier) => Promise<void>;
  verifyPhoneCode: (verificationId: string, code: string) => Promise<void>;
  // General
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  updatePreferences: (preferences: Partial<User['preferences']>) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Convert Firebase user to our User interface
  const convertFirebaseUser = async (firebaseUser: FirebaseUser): Promise<User> => {
    try {
      const { db } = await import('@/lib/firebase');
      const { getDoc, doc, setDoc } = await import('firebase/firestore');
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      
      if (userDoc.exists()) {
        return userDoc.data() as User;
      }

      // Create new user profile if doesn't exist
      const newUser: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        firstName: firebaseUser.displayName?.split(' ')[0] || '',
        lastName: firebaseUser.displayName?.split(' ').slice(1).join(' ') || '',
        avatar: firebaseUser.photoURL || '',
        role: 'student',
        preferences: {
          notifications: true,
          emailUpdates: true,
          darkMode: false,
          language: 'en'
        },
        subscription: {
          plan: 'free',
          status: 'active',
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        },
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      // Save to Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), newUser);
      return newUser;
    } catch (error) {
      console.error('Error converting Firebase user:', error);
      throw error;
    }
  };

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initAuth = async () => {
      try {
        const { auth } = await import('@/lib/firebase');
        const { onAuthStateChanged } = await import('firebase/auth');
        unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          console.log('Auth state changed:', firebaseUser ? 'User logged in' : 'User logged out');
          if (firebaseUser) {
            try {
              console.log('Converting Firebase user to app user...');
              const userData = await convertFirebaseUser(firebaseUser);
              console.log('User data converted:', userData);
              setUser(userData);
            } catch (error) {
              console.error('Error converting Firebase user:', error);
              setUser(null);
            }
          } else {
            setUser(null);
          }
          setIsLoading(false);
        });
      } catch (error) {
        console.error('Error initializing Firebase auth:', error);
        setIsLoading(false);
      }
    };

    initAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Email/Password Authentication
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { auth } = await import('@/lib/firebase');
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true);
    try {
      const { auth } = await import('@/lib/firebase');
      const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
      const { password, ...profileData } = userData;
      const credential = await createUserWithEmailAndPassword(auth, userData.email!, password);
      
      // Update profile with display name
      if (credential.user) {
        await updateProfile(credential.user, {
          displayName: `${userData.firstName} ${userData.lastName}`.trim()
        });
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { auth } = await import('@/lib/firebase');
      const { sendPasswordResetEmail } = await import('firebase/auth');
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  };

  // OAuth Authentication
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { auth, googleProvider } = await import('@/lib/firebase');
      const { signInWithPopup } = await import('firebase/auth');
      await signInWithPopup(auth, googleProvider);
      // Don't reset loading here - let onAuthStateChanged handle it
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const loginWithMicrosoft = async () => {
    setIsLoading(true);
    try {
      const { auth, microsoftProvider } = await import('@/lib/firebase');
      const { signInWithPopup } = await import('firebase/auth');
      await signInWithPopup(auth, microsoftProvider);
      // Don't reset loading here - let onAuthStateChanged handle it
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const loginWithPhone = async (phoneNumber: string, recaptchaVerifier: RecaptchaVerifier) => {
    setIsLoading(true);
    try {
      const { auth } = await import('@/lib/firebase');
      const { signInWithPhoneNumber } = await import('firebase/auth');
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      // Store confirmation result for verification
      (window as any).confirmationResult = confirmationResult;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyPhoneCode = async (verificationId: string, code: string) => {
    setIsLoading(true);
    try {
      const confirmationResult = (window as any).confirmationResult;
      if (confirmationResult) {
        await confirmationResult.confirm(code);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { auth } = await import('@/lib/firebase');
      const { signOut } = await import('firebase/auth');
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) throw new Error('No user logged in');
    
    setIsLoading(true);
    try {
      const { db } = await import('@/lib/firebase');
      const { updateDoc, doc } = await import('firebase/firestore');
      const updatedUser = { ...user, ...updates };
      
      // Update Firestore
      await updateDoc(doc(db, 'users', user.id), updates);
      
      // Update local state
      setUser(updatedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePreferences = async (preferences: Partial<User['preferences']>) => {
    if (!user) throw new Error('No user logged in');
    
    setIsLoading(true);
    try {
      const { db } = await import('@/lib/firebase');
      const { updateDoc, doc } = await import('firebase/firestore');
      const updatedPreferences = { ...user.preferences, ...preferences };
      const updatedUser = { ...user, preferences: updatedPreferences };
      
      // Update Firestore
      await updateDoc(doc(db, 'users', user.id), {
        preferences: updatedPreferences
      });
      
      // Update local state
      setUser(updatedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    // This would require re-authentication and password update
    // For now, we'll throw an error as it's complex to implement
    throw new Error('Password change not implemented yet');
  };

  const deleteAccount = async () => {
    // This would require re-authentication and account deletion
    // For now, we'll throw an error as it's complex to implement
    throw new Error('Account deletion not implemented yet');
  };

  const value: UserContextType = {
    user,
    isLoading,
    login,
    register,
    resetPassword,
    loginWithGoogle,
    loginWithMicrosoft,
    loginWithPhone,
    verifyPhoneCode,
    logout,
    updateProfile,
    updatePreferences,
    changePassword,
    deleteAccount
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
