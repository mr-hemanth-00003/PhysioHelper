
'use server';

import { db } from '@/lib/firebase';
import { SiteSettings } from '@/lib/types';
import {
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const settingsDocRef = doc(db, 'settings', 'general');

const defaultSettings: SiteSettings = {
    siteTitle: 'PhysioHelper - Your Guide to a Healthier Life',
    siteDescription: 'A minimal medical blog for physiotherapy, wellness, and injury prevention.',
    keywords: 'physiotherapy, wellness, injury prevention, health, fitness',
    contactEmail: 'hello@physiohelper.com',
    contactPhone: '+1 (234) 567-890',
    officeAddress: '123 Wellness Ave, Suite 100\nHealthville, USA 12345'
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const docSnap = await getDoc(settingsDocRef);

    if (docSnap.exists()) {
      return docSnap.data() as SiteSettings;
    } else {
      // If the document doesn't exist, create it with default values
      try {
        await setDoc(settingsDocRef, defaultSettings);
      } catch (writeError) {
        console.warn('Could not create settings document:', writeError);
        // Continue with default settings even if we can't write
      }
      return defaultSettings;
    }
  } catch (error) {
    console.error('Error fetching site settings:', error);
    // Return default settings as a fallback on error
    return defaultSettings;
  }
}

export async function updateSiteSettings(settingsData: Partial<SiteSettings>) {
    try {
        // Use setDoc with merge: true to create the document if it doesn't exist, 
        // or update it if it does. This is more robust than using updateDoc.
        await setDoc(settingsDocRef, settingsData, { merge: true });
    } catch (error) {
        console.error("Error updating site settings: ", error);
        throw new Error("Failed to update site settings.");
    }
}
