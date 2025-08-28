'use client'
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DrugSearch } from '@/components/drug-search';

// Comprehensive drug database with condition-based categorization
const commonDrugs = [
  // Fever & Pain Management
  {
    name: "Paracetamol (Acetaminophen)",
    category: "Analgesic",
    class: "Acetaminophen",
    dosage: "500-1000mg every 4-6 hours as needed",
    indications: ["Pain relief", "Fever reduction", "Headache", "Toothache"],
    contraindications: ["Liver disease", "Alcohol abuse", "Allergy to paracetamol"],
    interactions: ["Warfarin", "Alcohol", "Other paracetamol products"],
    sideEffects: ["Liver damage (overdose)", "Allergic reactions", "Skin rash"],
    monitoring: ["Liver function", "Dosage compliance", "Allergic symptoms"],
    conditions: ["Fever", "Pain", "Headache", "Toothache", "Body aches"]
  },
  {
    name: "Ibuprofen",
    category: "NSAID",
    class: "Non-steroidal anti-inflammatory drug",
    dosage: "200-800mg every 4-6 hours as needed",
    indications: ["Pain relief", "Fever reduction", "Inflammation", "Headache", "Muscle pain"],
    contraindications: ["Peptic ulcer", "Kidney disease", "Pregnancy (3rd trimester)", "Allergy to NSAIDs"],
    interactions: ["Warfarin", "ACE inhibitors", "Diuretics", "Lithium", "Methotrexate"],
    sideEffects: ["Stomach upset", "Bleeding", "Kidney problems", "High blood pressure"],
    monitoring: ["Kidney function", "Blood pressure", "Stomach symptoms", "Bleeding signs"],
    conditions: ["Fever", "Pain", "Inflammation", "Headache", "Muscle pain", "Arthritis"]
  },
  {
    name: "Aspirin",
    category: "Analgesic",
    class: "Salicylate",
    dosage: "325-650mg every 4-6 hours as needed",
    indications: ["Pain relief", "Fever reduction", "Cardiovascular protection", "Anti-inflammatory"],
    contraindications: ["Peptic ulcer", "Bleeding disorders", "Pregnancy (3rd trimester)", "Children with viral illness"],
    interactions: ["Warfarin", "NSAIDs", "ACE inhibitors", "Diuretics"],
    sideEffects: ["Stomach upset", "Bleeding", "Tinnitus", "Reye's syndrome"],
    monitoring: ["Bleeding time", "Stomach symptoms", "Hearing", "Liver function"],
    conditions: ["Fever", "Pain", "Inflammation", "Headache", "Cardiovascular protection"]
  },

  // Cold & Cough
  {
    name: "Dextromethorphan",
    category: "Antitussive",
    class: "NMDA receptor antagonist",
    dosage: "15-30mg every 4-6 hours as needed",
    indications: ["Dry cough", "Cough suppression", "Upper respiratory symptoms"],
    contraindications: ["MAO inhibitors", "Pregnancy", "Severe liver disease"],
    interactions: ["MAO inhibitors", "SSRIs", "Alcohol", "Sedatives"],
    sideEffects: ["Drowsiness", "Dizziness", "Nausea", "Confusion"],
    monitoring: ["Mental status", "Sedation level", "Cough improvement"],
    conditions: ["Cough", "Cold", "Upper respiratory infection", "Dry cough"]
  },
  {
    name: "Guaifenesin",
    category: "Expectorant",
    class: "Mucolytic agent",
    dosage: "200-400mg every 4 hours as needed",
    indications: ["Chest congestion", "Productive cough", "Mucus thinning"],
    contraindications: ["Hypersensitivity", "Severe kidney disease"],
    interactions: ["Cough suppressants", "Decongestants"],
    sideEffects: ["Nausea", "Vomiting", "Dizziness", "Headache"],
    monitoring: ["Cough improvement", "Mucus production", "Side effects"],
    conditions: ["Cough", "Cold", "Chest congestion", "Productive cough"]
  },
  {
    name: "Pseudoephedrine",
    category: "Decongestant",
    class: "Alpha-adrenergic agonist",
    dosage: "30-60mg every 4-6 hours as needed",
    indications: ["Nasal congestion", "Sinus pressure", "Ear pressure"],
    contraindications: ["Hypertension", "Heart disease", "Glaucoma", "Pregnancy"],
    interactions: ["MAO inhibitors", "Beta-blockers", "Antihypertensives"],
    sideEffects: ["Insomnia", "Nervousness", "High blood pressure", "Palpitations"],
    monitoring: ["Blood pressure", "Heart rate", "Sleep patterns"],
    conditions: ["Cold", "Nasal congestion", "Sinus pressure", "Ear pressure"]
  },

  // Allergy & Hay Fever
  {
    name: "Cetirizine",
    category: "Antihistamine",
    class: "Second-generation H1 antagonist",
    dosage: "5-10mg daily",
    indications: ["Allergic rhinitis", "Urticaria", "Allergic conjunctivitis"],
    contraindications: ["Hypersensitivity", "Severe liver disease", "Pregnancy"],
    interactions: ["Erythromycin", "Ketoconazole", "Cimetidine", "Grapefruit juice"],
    sideEffects: ["Drowsiness", "Headache", "Dry mouth", "Fatigue"],
    monitoring: ["Liver function", "Allergic response", "Sedation level"],
    conditions: ["Allergies", "Hay fever", "Hives", "Allergic rhinitis", "Itching"]
  },
  {
    name: "Loratadine",
    category: "Antihistamine",
    class: "Second-generation H1 antagonist",
    dosage: "10mg daily",
    indications: ["Allergic rhinitis", "Urticaria", "Allergic conjunctivitis", "Seasonal allergies"],
    contraindications: ["Hypersensitivity", "Severe liver disease", "Pregnancy"],
    interactions: ["Erythromycin", "Ketoconazole", "Cimetidine", "Grapefruit juice"],
    sideEffects: ["Drowsiness", "Headache", "Dry mouth", "Fatigue"],
    monitoring: ["Liver function", "Allergic response", "Sedation level"],
    conditions: ["Allergies", "Hay fever", "Hives", "Allergic rhinitis", "Seasonal allergies"]
  },
  {
    name: "Fexofenadine",
    category: "Antihistamine",
    class: "Second-generation H1 antagonist",
    dosage: "60-180mg daily",
    indications: ["Allergic rhinitis", "Urticaria", "Seasonal allergies"],
    contraindications: ["Hypersensitivity", "Severe kidney disease"],
    interactions: ["Aluminum/magnesium antacids", "Fruit juices", "Grapefruit juice"],
    sideEffects: ["Headache", "Drowsiness", "Nausea", "Dizziness"],
    monitoring: ["Allergic response", "Side effects", "Efficacy"],
    conditions: ["Allergies", "Hay fever", "Hives", "Allergic rhinitis", "Seasonal allergies"]
  },

  // Stomach & Digestive Issues
  {
    name: "Omeprazole",
    category: "Proton Pump Inhibitor",
    class: "PPI",
    dosage: "20-40mg daily",
    indications: ["Gastroesophageal reflux disease", "Peptic ulcer", "Zollinger-Ellison syndrome"],
    contraindications: ["Hypersensitivity", "Pregnancy", "Lactation"],
    interactions: ["Iron salts", "Vitamin B12", "Clopidogrel", "Methotrexate"],
    sideEffects: ["Headache", "Diarrhea", "Abdominal pain", "Vitamin B12 deficiency"],
    monitoring: ["Gastric pH", "Vitamin B12 levels", "Bone density", "Renal function"],
    conditions: ["Acid reflux", "Heartburn", "Stomach ulcer", "GERD", "Stomach acid"]
  },
  {
    name: "Ranitidine",
    category: "H2 Blocker",
    class: "Histamine H2 receptor antagonist",
    dosage: "150mg twice daily or 300mg at bedtime",
    indications: ["Peptic ulcer", "GERD", "Heartburn", "Stomach acid"],
    contraindications: ["Hypersensitivity", "Pregnancy", "Severe kidney disease"],
    interactions: ["Antacids", "Iron salts", "Ketoconazole", "Warfarin"],
    sideEffects: ["Headache", "Dizziness", "Constipation", "Diarrhea"],
    monitoring: ["Stomach symptoms", "Ulcer healing", "Side effects"],
    conditions: ["Acid reflux", "Heartburn", "Stomach ulcer", "GERD", "Stomach acid"]
  },
  {
    name: "Simethicone",
    category: "Antiflatulent",
    class: "Silicone derivative",
    dosage: "40-125mg up to 4 times daily",
    indications: ["Gas", "Bloating", "Flatulence", "Colic"],
    contraindications: ["Hypersensitivity", "Intestinal obstruction"],
    interactions: ["Minimal interactions"],
    sideEffects: ["Rare", "Generally well tolerated"],
    monitoring: ["Symptom improvement", "Gas relief"],
    conditions: ["Gas", "Bloating", "Flatulence", "Stomach discomfort", "Colic"]
  },

  // Nausea & Vomiting
  {
    name: "Dimenhydrinate",
    category: "Antiemetic",
    class: "Antihistamine",
    dosage: "25-50mg every 4-6 hours as needed",
    indications: ["Motion sickness", "Nausea", "Vomiting", "Dizziness"],
    contraindications: ["Hypersensitivity", "Pregnancy", "Glaucoma", "Prostatic hypertrophy"],
    interactions: ["Alcohol", "Sedatives", "Anticholinergics"],
    sideEffects: ["Drowsiness", "Dry mouth", "Blurred vision", "Dizziness"],
    monitoring: ["Sedation level", "Nausea improvement", "Side effects"],
    conditions: ["Nausea", "Vomiting", "Motion sickness", "Dizziness", "Travel sickness"]
  },
  {
    name: "Ondansetron",
    category: "Antiemetic",
    class: "5-HT3 receptor antagonist",
    dosage: "4-8mg every 8 hours as needed",
    indications: ["Chemotherapy-induced nausea", "Post-operative nausea", "Severe nausea"],
    contraindications: ["Hypersensitivity", "Pregnancy", "Severe liver disease"],
    interactions: ["Apomorphine", "Tramadol", "Serotonergic drugs"],
    sideEffects: ["Headache", "Constipation", "Dizziness", "Fatigue"],
    monitoring: ["Nausea control", "Side effects", "Liver function"],
    conditions: ["Nausea", "Vomiting", "Chemotherapy side effects", "Post-operative nausea"]
  },

  // Diarrhea
  {
    name: "Loperamide",
    category: "Antidiarrheal",
    class: "Opioid receptor agonist",
    dosage: "2-4mg initially, then 2mg after each loose stool",
    indications: ["Acute diarrhea", "Traveler's diarrhea", "Chronic diarrhea"],
    contraindications: ["Bloody diarrhea", "Fever", "Severe abdominal pain", "Pregnancy"],
    interactions: ["Quinidine", "Ritonavir", "Itraconazole"],
    sideEffects: ["Constipation", "Drowsiness", "Dizziness", "Abdominal pain"],
    monitoring: ["Diarrhea improvement", "Bowel function", "Side effects"],
    conditions: ["Diarrhea", "Traveler's diarrhea", "Loose stools", "Bowel urgency"]
  },

  // Constipation
  {
    name: "Bisacodyl",
    category: "Laxative",
    class: "Stimulant laxative",
    dosage: "5-15mg orally or 10mg rectally",
    indications: ["Constipation", "Bowel preparation", "Occasional constipation"],
    contraindications: ["Intestinal obstruction", "Appendicitis", "Severe abdominal pain"],
    interactions: ["Antacids", "Milk", "Dairy products"],
    sideEffects: ["Abdominal cramps", "Diarrhea", "Nausea", "Rectal irritation"],
    monitoring: ["Bowel function", "Side effects", "Effectiveness"],
    conditions: ["Constipation", "Bowel irregularity", "Hard stools", "Bowel preparation"]
  },
  {
    name: "Psyllium",
    category: "Laxative",
    class: "Bulk-forming laxative",
    dosage: "1-2 teaspoons in 8oz water 1-3 times daily",
    indications: ["Constipation", "Irritable bowel syndrome", "Fiber supplement"],
    contraindications: ["Intestinal obstruction", "Fecal impaction", "Hypersensitivity"],
    interactions: ["Other medications", "Take 2 hours apart"],
    sideEffects: ["Bloating", "Gas", "Abdominal discomfort"],
    monitoring: ["Bowel function", "Fiber intake", "Side effects"],
    conditions: ["Constipation", "Irritable bowel syndrome", "Fiber deficiency", "Bowel irregularity"]
  },

  // Sleep & Insomnia
  {
    name: "Diphenhydramine",
    category: "Antihistamine",
    class: "First-generation H1 antagonist",
    dosage: "25-50mg at bedtime",
    indications: ["Insomnia", "Allergies", "Sleep aid", "Itching"],
    contraindications: ["Glaucoma", "Prostatic hypertrophy", "Pregnancy", "Breastfeeding"],
    interactions: ["Alcohol", "Sedatives", "Anticholinergics"],
    sideEffects: ["Drowsiness", "Dry mouth", "Blurred vision", "Dizziness"],
    monitoring: ["Sleep quality", "Sedation level", "Side effects"],
    conditions: ["Insomnia", "Sleep problems", "Allergies", "Itching", "Sleep aid"]
  },
  {
    name: "Melatonin",
    category: "Sleep Aid",
    class: "Hormone supplement",
    dosage: "0.5-5mg 30-60 minutes before bedtime",
    indications: ["Insomnia", "Jet lag", "Sleep cycle regulation", "Shift work"],
    contraindications: ["Hypersensitivity", "Autoimmune disease", "Pregnancy"],
    interactions: ["Blood thinners", "Diabetes medications", "Immunosuppressants"],
    sideEffects: ["Drowsiness", "Headache", "Dizziness", "Nausea"],
    monitoring: ["Sleep quality", "Side effects", "Effectiveness"],
    conditions: ["Insomnia", "Sleep problems", "Jet lag", "Sleep cycle issues", "Shift work"]
  },

  // Anxiety & Stress
  {
    name: "Valerian Root",
    category: "Herbal Supplement",
    class: "Natural sedative",
    dosage: "300-600mg extract 1-2 times daily",
    indications: ["Anxiety", "Insomnia", "Stress", "Sleep problems"],
    contraindications: ["Pregnancy", "Liver disease", "Allergy to valerian"],
    interactions: ["Sedatives", "Alcohol", "Antidepressants"],
    sideEffects: ["Drowsiness", "Dizziness", "Headache", "Stomach upset"],
    monitoring: ["Anxiety levels", "Sleep quality", "Side effects"],
    conditions: ["Anxiety", "Stress", "Insomnia", "Sleep problems", "Nervousness"]
  },
  {
    name: "Lavender Oil",
    category: "Aromatherapy",
    class: "Essential oil",
    dosage: "2-4 drops in diffuser or 1-2 drops topically",
    indications: ["Anxiety", "Stress", "Sleep problems", "Relaxation"],
    contraindications: ["Pregnancy", "Allergy to lavender", "Skin sensitivity"],
    interactions: ["Sedatives", "Blood pressure medications"],
    sideEffects: ["Skin irritation", "Allergic reactions", "Headache"],
    monitoring: ["Anxiety levels", "Skin reactions", "Effectiveness"],
    conditions: ["Anxiety", "Stress", "Sleep problems", "Relaxation", "Nervousness"]
  },

  // Skin Conditions
  {
    name: "Hydrocortisone",
    category: "Corticosteroid",
    class: "Topical glucocorticoid",
    dosage: "0.5-2.5% cream/ointment 2-4 times daily",
    indications: ["Eczema", "Dermatitis", "Rash", "Itching", "Skin inflammation"],
    contraindications: ["Viral skin infections", "Fungal infections", "Open wounds"],
    interactions: ["Other topical medications", "Occlusive dressings"],
    sideEffects: ["Skin thinning", "Stretch marks", "Acne", "Skin color changes"],
    monitoring: ["Skin improvement", "Side effects", "Long-term use"],
    conditions: ["Eczema", "Dermatitis", "Rash", "Itching", "Skin inflammation", "Skin irritation"]
  },
  {
    name: "Calamine Lotion",
    category: "Topical Treatment",
    class: "Astringent and protectant",
    dosage: "Apply to affected area as needed",
    indications: ["Poison ivy", "Chickenpox", "Sunburn", "Itching", "Skin irritation"],
    contraindications: ["Hypersensitivity", "Open wounds", "Severe burns"],
    interactions: ["Other topical medications"],
    sideEffects: ["Skin dryness", "Temporary staining", "Rare allergic reactions"],
    monitoring: ["Symptom improvement", "Skin reactions", "Effectiveness"],
    conditions: ["Poison ivy", "Chickenpox", "Sunburn", "Itching", "Skin irritation", "Rash"]
  },

  // Eye Conditions
  {
    name: "Artificial Tears",
    category: "Ophthalmic",
    class: "Lubricating eye drops",
    dosage: "1-2 drops in each eye as needed",
    indications: ["Dry eyes", "Eye irritation", "Contact lens discomfort", "Eye fatigue"],
    contraindications: ["Hypersensitivity", "Eye infection", "Severe eye pain"],
    interactions: ["Other eye medications", "Contact lenses"],
    sideEffects: ["Temporary blurring", "Eye irritation", "Allergic reactions"],
    monitoring: ["Eye comfort", "Vision clarity", "Side effects"],
    conditions: ["Dry eyes", "Eye irritation", "Contact lens discomfort", "Eye fatigue", "Computer eye strain"]
  },

  // Ear Conditions
  {
    name: "Hydrogen Peroxide",
    category: "Ear Care",
    class: "Antiseptic and cerumenolytic",
    dosage: "3-5 drops in affected ear, let sit for 5-10 minutes",
    indications: ["Earwax removal", "Ear cleaning", "Mild ear infections"],
    contraindications: ["Ear drum perforation", "Severe ear pain", "Active ear infection"],
    interactions: ["Other ear medications"],
    sideEffects: ["Temporary hearing changes", "Ear irritation", "Dizziness"],
    monitoring: ["Earwax removal", "Hearing improvement", "Side effects"],
    conditions: ["Earwax buildup", "Ear cleaning", "Mild ear discomfort", "Ear hygiene"]
  },

  // Oral Health
  {
    name: "Benzocaine",
    category: "Local Anesthetic",
    class: "Topical anesthetic",
    dosage: "Apply to affected area as needed",
    indications: ["Toothache", "Mouth sores", "Gum pain", "Dental pain"],
    contraindications: ["Hypersensitivity", "Children under 2", "Severe pain"],
    interactions: ["Other topical medications"],
    sideEffects: ["Temporary numbness", "Allergic reactions", "Skin irritation"],
    monitoring: ["Pain relief", "Side effects", "Effectiveness"],
    conditions: ["Toothache", "Mouth sores", "Gum pain", "Dental pain", "Oral discomfort"]
  },

  // Muscle & Joint Pain
  {
    name: "Menthol Cream",
    category: "Topical Analgesic",
    class: "Counterirritant",
    dosage: "Apply to affected area 3-4 times daily",
    indications: ["Muscle pain", "Joint pain", "Back pain", "Sports injuries"],
    contraindications: ["Hypersensitivity", "Open wounds", "Severe pain"],
    interactions: ["Other topical medications"],
    sideEffects: ["Skin irritation", "Burning sensation", "Allergic reactions"],
    monitoring: ["Pain relief", "Skin reactions", "Effectiveness"],
    conditions: ["Muscle pain", "Joint pain", "Back pain", "Sports injuries", "Muscle soreness"]
  },

  // Headache & Migraine
  {
    name: "Sumatriptan",
    category: "Triptan",
    class: "Serotonin receptor agonist",
    dosage: "25-100mg at onset of migraine",
    indications: ["Migraine", "Cluster headache", "Severe headache"],
    contraindications: ["Heart disease", "Uncontrolled hypertension", "Pregnancy"],
    interactions: ["MAO inhibitors", "SSRIs", "Ergotamines"],
    sideEffects: ["Chest tightness", "Dizziness", "Nausea", "Fatigue"],
    monitoring: ["Headache relief", "Side effects", "Cardiac symptoms"],
    conditions: ["Migraine", "Cluster headache", "Severe headache", "Vascular headache"]
  },

  // Menstrual Pain
  {
    name: "Mefenamic Acid",
    category: "NSAID",
    class: "Fenamate NSAID",
    dosage: "500mg three times daily during menstruation",
    indications: ["Menstrual pain", "Heavy periods", "Dysmenorrhea"],
    contraindications: ["Peptic ulcer", "Kidney disease", "Pregnancy", "Allergy to NSAIDs"],
    interactions: ["Warfarin", "ACE inhibitors", "Diuretics"],
    sideEffects: ["Stomach upset", "Dizziness", "Headache", "Diarrhea"],
    monitoring: ["Pain relief", "Side effects", "Menstrual symptoms"],
    conditions: ["Menstrual pain", "Heavy periods", "Dysmenorrhea", "Period cramps"]
  },

  // Urinary Tract
  {
    name: "Cranberry Extract",
    category: "Herbal Supplement",
    class: "Natural urinary antiseptic",
    dosage: "400-500mg capsule twice daily",
    indications: ["UTI prevention", "Urinary health", "Bladder health"],
    contraindications: ["Pregnancy", "Kidney stones", "Allergy to cranberries"],
    interactions: ["Blood thinners", "Diabetes medications"],
    sideEffects: ["Stomach upset", "Diarrhea", "Allergic reactions"],
    monitoring: ["UTI prevention", "Side effects", "Effectiveness"],
    conditions: ["UTI prevention", "Urinary health", "Bladder health", "Recurrent UTIs"]
  },

  // Weight Loss Support
  {
    name: "Green Tea Extract",
    category: "Herbal Supplement",
    class: "Natural metabolism booster",
    dosage: "250-500mg capsule 1-3 times daily",
    indications: ["Weight loss support", "Metabolism boost", "Antioxidant"],
    contraindications: ["Pregnancy", "Heart disease", "Liver disease"],
    interactions: ["Blood thinners", "Stimulants", "Iron supplements"],
    sideEffects: ["Nervousness", "Insomnia", "Stomach upset", "Headache"],
    monitoring: ["Weight changes", "Side effects", "Effectiveness"],
    conditions: ["Weight loss support", "Metabolism boost", "Energy boost", "Antioxidant support"]
  },

  // Energy & Fatigue
  {
    name: "B-Complex Vitamins",
    category: "Vitamin Supplement",
    class: "B vitamin complex",
    dosage: "1 tablet daily with food",
    indications: ["Energy support", "Fatigue", "Vitamin deficiency", "Stress support"],
    contraindications: ["Hypersensitivity", "Certain medical conditions"],
    interactions: ["Other medications", "Alcohol"],
    sideEffects: ["Bright yellow urine", "Stomach upset", "Allergic reactions"],
    monitoring: ["Energy levels", "Side effects", "Effectiveness"],
    conditions: ["Fatigue", "Low energy", "Vitamin deficiency", "Stress", "Energy support"]
  },

  // Immune Support
  {
    name: "Vitamin C",
    category: "Vitamin Supplement",
    class: "Ascorbic acid",
    dosage: "500-1000mg daily",
    indications: ["Immune support", "Cold prevention", "Antioxidant", "Collagen support"],
    contraindications: ["Kidney stones", "Iron overload", "Certain medical conditions"],
    interactions: ["Iron supplements", "Blood thinners", "Chemotherapy"],
    sideEffects: ["Stomach upset", "Diarrhea", "Kidney stones (high doses)"],
    monitoring: ["Immune function", "Side effects", "Effectiveness"],
    conditions: ["Immune support", "Cold prevention", "Antioxidant support", "Vitamin deficiency"]
  },

  // Probiotics
  {
    name: "Lactobacillus",
    category: "Probiotic",
    class: "Beneficial bacteria",
    dosage: "1-10 billion CFU daily",
    indications: ["Digestive health", "Gut flora balance", "Diarrhea prevention"],
    contraindications: ["Severe immune deficiency", "Allergy to dairy"],
    interactions: ["Antibiotics", "Immunosuppressants"],
    sideEffects: ["Gas", "Bloating", "Stomach upset"],
    monitoring: ["Digestive symptoms", "Side effects", "Effectiveness"],
    conditions: ["Digestive health", "Gut flora balance", "Diarrhea prevention", "Digestive discomfort"]
  }
];

export default function DrugSearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <DrugSearch />
      </main>
      <Footer />
    </div>
  );
}
