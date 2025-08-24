export interface Drug {
  name: string;
  category: string;
  class: string;
  dosage: string;
  indications: string[];
  contraindications: string[];
  interactions: string[];
  sideEffects: string[];
  monitoring: string[];
  conditions: string[];
}

// Import drugs from both files
import { comprehensiveDrugs as drugsV1 } from './comprehensive-drugs';
import { comprehensiveDrugs as drugsV2 } from './comprehensive-drugs-v2';

// Combine and deduplicate drugs
export const combinedDrugs: Drug[] = (() => {
  const allDrugs = [...drugsV1, ...drugsV2];
  const uniqueDrugs = new Map<string, Drug>();
  
  // Keep the most comprehensive version of each drug
  allDrugs.forEach(drug => {
    const existing = uniqueDrugs.get(drug.name);
    if (!existing || 
        (drug.indications.length > existing.indications.length) ||
        (drug.conditions && drug.conditions.length > (existing.conditions?.length || 0))) {
      uniqueDrugs.set(drug.name, drug);
    }
  });
  
  // Convert back to array and sort alphabetically
  return Array.from(uniqueDrugs.values()).sort((a, b) => a.name.localeCompare(b.name));
})();

// Export the combined drugs as the main export
export const comprehensiveDrugs = combinedDrugs;
