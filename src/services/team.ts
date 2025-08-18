
'use server';

import { db } from '@/lib/firebase';
import { TeamMember } from '@/lib/types';
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const teamCollection = collection(db, 'teamMembers');

// Mock data to ensure the page works even if Firestore isn't populated yet or during build.
function getMockTeamMembers(): TeamMember[] {
    return [
        { id: "1", name: "Dr. Emily Carter", role: "Lead Physiotherapist", avatar: "https://placehold.co/100x100.png" },
        { id: "2", name: "John Davis", role: "Wellness Coach", avatar: "https://placehold.co/100x100.png" },
        { id: "3", name: "Dr. Sarah Lee", role: "Injury Prevention Specialist", avatar: "https://placehold.co/100x100.png" },
        { id: "4", name: "Maria Rodriguez, R.D.", role: "Nutritionist", avatar: "https://placehold.co/100x100.png" },
    ];
}


export async function getTeamMembers(): Promise<TeamMember[]> {
  // During the build process, process.env.NODE_ENV is 'production', but we can check for VERCEL env
  // to determine if we are in a build environment vs. runtime.
  if (process.env.VERCEL) {
    return getMockTeamMembers();
  }
  
  try {
    const q = query(teamCollection, orderBy('name'));
    const snapshot = await getDocs(q);
    const teamMembers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TeamMember));
    
    // Fallback to mock data if Firestore is empty
    if (teamMembers.length === 0) {
        return getMockTeamMembers();
    }

    return teamMembers;
  } catch (error) {
    console.error('Error fetching team members:', error);
    // On error (e.g. permissions), return mock data to prevent crashes.
    return getMockTeamMembers();
  }
}

export async function getTeamMember(id: string): Promise<TeamMember | null> {
  try {
    const docRef = doc(db, 'teamMembers', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as TeamMember;
    } else {
      console.log('No such team member!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching team member:', error);
    return null;
  }
}

export async function createTeamMember(data: Omit<TeamMember, 'id'>) {
    try {
        const docRef = await addDoc(teamCollection, data);
        return docRef.id;
    } catch (error) {
        console.error("Error creating team member: ", error);
        throw new Error("Failed to create team member.");
    }
}

export async function updateTeamMember(id: string, data: Partial<Omit<TeamMember, 'id'>>) {
    try {
        const docRef = doc(db, 'teamMembers', id);
        await updateDoc(docRef, data);
    } catch (error) {
        console.error("Error updating team member: ", error);
        throw new Error("Failed to update team member.");
    }
}

export async function deleteTeamMember(id: string) {
    try {
        const docRef = doc(db, 'teamMembers', id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting team member: ", error);
        throw new Error("Failed to delete team member.");
    }
}
