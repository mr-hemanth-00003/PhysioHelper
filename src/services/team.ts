
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

// TODO: Replace this with your actual authentication check.
// This function should verify that the current user is authenticated and has admin privileges.
// For now, it returns true to allow functionality during development.
async function isAdmin() {
  // In a real application, you would check the user's session.
  // For example:
  // const user = await getAuthenticatedUser();
  // return user?.role === 'admin';
  return true;
}


export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const q = query(teamCollection, orderBy('name'));
    const snapshot = await getDocs(q);
    const teamMembers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TeamMember));
    return teamMembers;
  } catch (error) {
    console.error('Error fetching team members:', error);
    // On error (e.g. permissions), return an empty array to prevent crashes.
    return [];
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
    const authorized = await isAdmin();
    if (!authorized) {
        throw new Error("Unauthorized: You do not have permission to perform this action.");
    }
    try {
        const newMember = {
            name: data.name,
            role: data.role,
            avatar: data.avatar,
        };
        const docRef = await addDoc(teamCollection, newMember);
        return docRef.id;
    } catch (error) {
        console.error("Error creating team member: ", error);
        throw new Error("Failed to create team member.");
    }
}

export async function updateTeamMember(id: string, data: Partial<Omit<TeamMember, 'id'>>) {
    const authorized = await isAdmin();
    if (!authorized) {
        throw new Error("Unauthorized: You do not have permission to perform this action.");
    }
    try {
        const docRef = doc(db, 'teamMembers', id);
        await updateDoc(docRef, data);
    } catch (error) {
        console.error("Error updating team member: ", error);
        throw new Error("Failed to update team member.");
    }
}

export async function deleteTeamMember(id: string) {
    const authorized = await isAdmin();
    if (!authorized) {
        throw new Error("Unauthorized: You do not have permission to perform this action.");
    }
    try {
        const docRef = doc(db, 'teamMembers', id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting team member: ", error);
        throw new Error("Failed to delete team member.");
    }
}
