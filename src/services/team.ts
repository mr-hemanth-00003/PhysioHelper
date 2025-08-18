
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
