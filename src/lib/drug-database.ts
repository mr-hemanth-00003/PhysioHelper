// Comprehensive drug database with condition-based categorization
export const commonDrugs = [
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
    indications: ["Dry cough suppression", "Non-productive cough"],
    contraindications: ["Cough with mucus", "Pregnancy", "Children under 4 years", "MAOI use"],
    interactions: ["MAOIs", "SSRIs", "Alcohol", "Sedatives"],
    sideEffects: ["Drowsiness", "Dizziness", "Nausea", "Constipation"],
    monitoring: ["Cough pattern", "Respiratory function", "Side effects"],
    conditions: ["Dry cough", "Non-productive cough", "Cough suppression"]
  },
  {
    name: "Guaifenesin",
    category: "Expectorant",
    class: "Mucolytic",
    dosage: "200-400mg every 4 hours as needed",
    indications: ["Chest congestion", "Thick mucus", "Productive cough"],
    contraindications: ["Dry cough", "Pregnancy", "Children under 4 years"],
    interactions: ["Cough suppressants", "Antihistamines"],
    sideEffects: ["Nausea", "Vomiting", "Dizziness", "Headache"],
    monitoring: ["Cough pattern", "Mucus consistency", "Side effects"],
    conditions: ["Chest congestion", "Thick mucus", "Productive cough"]
  },
  {
    name: "Pseudoephedrine",
    category: "Decongestant",
    class: "Sympathomimetic",
    dosage: "30-60mg every 4-6 hours as needed",
    indications: ["Nasal congestion", "Sinus pressure", "Eustachian tube dysfunction"],
    contraindications: ["High blood pressure", "Heart disease", "Diabetes", "Thyroid disease"],
    interactions: ["MAOIs", "Beta-blockers", "Antihypertensives"],
    sideEffects: ["Insomnia", "Nervousness", "Increased blood pressure", "Dry mouth"],
    monitoring: ["Blood pressure", "Heart rate", "Sleep patterns"],
    conditions: ["Nasal congestion", "Sinus pressure", "Eustachian tube dysfunction"]
  },

  // Gastrointestinal
  {
    name: "Omeprazole",
    category: "Proton Pump Inhibitor",
    class: "PPI",
    dosage: "20-40mg once daily",
    indications: ["GERD", "Peptic ulcer", "Zollinger-Ellison syndrome", "Erosive esophagitis"],
    contraindications: ["Hypersensitivity", "Severe liver disease"],
    interactions: ["Warfarin", "Phenytoin", "Diazepam", "Clopidogrel"],
    sideEffects: ["Headache", "Nausea", "Diarrhea", "Abdominal pain"],
    monitoring: ["Symptom relief", "Endoscopy", "Bone density"],
    conditions: ["GERD", "Peptic ulcer", "Acid reflux", "Heartburn"]
  },
  {
    name: "Ranitidine",
    category: "H2 Blocker",
    class: "Histamine H2 antagonist",
    dosage: "150mg twice daily or 300mg once daily",
    indications: ["Peptic ulcer", "GERD", "Zollinger-Ellison syndrome"],
    contraindications: ["Hypersensitivity", "Porphyria"],
    interactions: ["Warfarin", "Phenytoin", "Procainamide"],
    sideEffects: ["Headache", "Dizziness", "Constipation", "Diarrhea"],
    monitoring: ["Symptom relief", "Endoscopy", "Liver function"],
    conditions: ["Peptic ulcer", "GERD", "Acid reflux", "Heartburn"]
  },
  {
    name: "Loperamide",
    category: "Antidiarrheal",
    class: "Opioid receptor agonist",
    dosage: "4mg initially, then 2mg after each loose stool",
    indications: ["Acute diarrhea", "Traveler's diarrhea", "Chronic diarrhea"],
    contraindications: ["Bloody diarrhea", "Fever", "Severe abdominal pain", "Children under 2 years"],
    interactions: ["Quinidine", "Ritonavir", "Itraconazole"],
    sideEffects: ["Constipation", "Drowsiness", "Dizziness", "Nausea"],
    monitoring: ["Bowel movements", "Hydration status", "Side effects"],
    conditions: ["Diarrhea", "Traveler's diarrhea", "Chronic diarrhea"]
  },

  // Respiratory
  {
    name: "Albuterol",
    category: "Bronchodilator",
    class: "Beta-2 agonist",
    dosage: "2-4 puffs every 4-6 hours as needed",
    indications: ["Asthma", "COPD", "Bronchospasm", "Exercise-induced asthma"],
    contraindications: ["Hypersensitivity", "Cardiac arrhythmias", "Hyperthyroidism"],
    interactions: ["Beta-blockers", "MAOIs", "Tricyclic antidepressants"],
    sideEffects: ["Tremor", "Nervousness", "Headache", "Palpitations"],
    monitoring: ["Peak flow", "Respiratory function", "Heart rate", "Blood pressure"],
    conditions: ["Asthma", "COPD", "Bronchospasm", "Shortness of breath"]
  },
  {
    name: "Prednisone",
    category: "Corticosteroid",
    class: "Glucocorticoid",
    dosage: "5-60mg daily depending on condition",
    indications: ["Inflammation", "Allergic reactions", "Autoimmune diseases", "Asthma exacerbation"],
    contraindications: ["Systemic fungal infections", "Live vaccines", "Severe infections"],
    interactions: ["Warfarin", "Phenytoin", "Rifampin", "Ketoconazole"],
    sideEffects: ["Weight gain", "Mood changes", "Insomnia", "Increased blood sugar"],
    monitoring: ["Blood sugar", "Blood pressure", "Weight", "Mood"],
    conditions: ["Inflammation", "Allergic reactions", "Autoimmune diseases", "Asthma"]
  },

  // Cardiovascular
  {
    name: "Lisinopril",
    category: "ACE Inhibitor",
    class: "Angiotensin converting enzyme inhibitor",
    dosage: "5-40mg once daily",
    indications: ["Hypertension", "Heart failure", "Post-MI", "Diabetic nephropathy"],
    contraindications: ["Pregnancy", "Bilateral renal artery stenosis", "Angioedema history"],
    interactions: ["Potassium supplements", "NSAIDs", "Lithium", "Aliskiren"],
    sideEffects: ["Dry cough", "Dizziness", "Hyperkalemia", "Angioedema"],
    monitoring: ["Blood pressure", "Kidney function", "Potassium levels", "Cough"],
    conditions: ["Hypertension", "Heart failure", "Post-MI", "Diabetic nephropathy"]
  },
  {
    name: "Metoprolol",
    category: "Beta Blocker",
    class: "Beta-1 selective antagonist",
    dosage: "25-200mg twice daily",
    indications: ["Hypertension", "Angina", "Heart failure", "Post-MI", "Arrhythmias"],
    contraindications: ["Severe bradycardia", "Heart block", "Severe heart failure", "Asthma"],
    interactions: ["Verapamil", "Diltiazem", "Digoxin", "Insulin"],
    sideEffects: ["Fatigue", "Dizziness", "Bradycardia", "Depression"],
    monitoring: ["Heart rate", "Blood pressure", "Heart function", "Mood"],
    conditions: ["Hypertension", "Angina", "Heart failure", "Arrhythmias"]
  },

  // Endocrine
  {
    name: "Metformin",
    category: "Antidiabetic",
    class: "Biguanide",
    dosage: "500-2000mg daily in divided doses",
    indications: ["Type 2 diabetes", "Prediabetes", "PCOS"],
    contraindications: ["Severe kidney disease", "Liver disease", "Heart failure", "Contrast dye use"],
    interactions: ["Alcohol", "Contrast dye", "Cimetidine", "Furosemide"],
    sideEffects: ["Nausea", "Diarrhea", "Metallic taste", "Lactic acidosis"],
    monitoring: ["Blood sugar", "Kidney function", "B12 levels", "Lactic acid"],
    conditions: ["Type 2 diabetes", "Prediabetes", "PCOS", "Insulin resistance"]
  },
  {
    name: "Levothyroxine",
    category: "Thyroid Hormone",
    class: "T4 replacement",
    dosage: "25-200mcg daily",
    indications: ["Hypothyroidism", "Thyroid cancer", "Goiter"],
    contraindications: ["Hyperthyroidism", "Adrenal insufficiency", "Heart disease"],
    interactions: ["Calcium", "Iron", "Soy", "Fiber", "Antacids"],
    sideEffects: ["Palpitations", "Weight loss", "Insomnia", "Anxiety"],
    monitoring: ["TSH", "T4", "T3", "Heart rate", "Weight"],
    conditions: ["Hypothyroidism", "Thyroid cancer", "Goiter", "Low thyroid function"]
  },

  // Neurological
  {
    name: "Gabapentin",
    category: "Anticonvulsant",
    class: "GABA analogue",
    dosage: "300-3600mg daily in divided doses",
    indications: ["Neuropathic pain", "Epilepsy", "Fibromyalgia", "Restless legs syndrome"],
    contraindications: ["Hypersensitivity", "Severe kidney disease"],
    interactions: ["Morphine", "Hydrocodone", "Antacids"],
    sideEffects: ["Drowsiness", "Dizziness", "Weight gain", "Peripheral edema"],
    monitoring: ["Kidney function", "Mood", "Weight", "Side effects"],
    conditions: ["Neuropathic pain", "Epilepsy", "Fibromyalgia", "Restless legs syndrome"]
  },
  {
    name: "Amitriptyline",
    category: "Tricyclic Antidepressant",
    class: "TCA",
    dosage: "10-150mg daily at bedtime",
    indications: ["Depression", "Neuropathic pain", "Migraine prevention", "Insomnia"],
    contraindications: ["Recent MI", "Heart block", "MAOI use", "Glaucoma"],
    interactions: ["MAOIs", "SSRIs", "Anticholinergics", "CNS depressants"],
    sideEffects: ["Dry mouth", "Drowsiness", "Constipation", "Blurred vision"],
    monitoring: ["Mood", "Heart function", "Blood pressure", "Side effects"],
    conditions: ["Depression", "Neuropathic pain", "Migraine", "Insomnia"]
  },

  // Musculoskeletal
  {
    name: "Methotrexate",
    category: "DMARD",
    class: "Folate antagonist",
    dosage: "7.5-25mg weekly",
    indications: ["Rheumatoid arthritis", "Psoriasis", "Cancer", "Autoimmune diseases"],
    contraindications: ["Pregnancy", "Liver disease", "Kidney disease", "Alcohol abuse"],
    interactions: ["NSAIDs", "Sulfonamides", "Phenytoin", "Folic acid"],
    sideEffects: ["Nausea", "Mouth sores", "Hair loss", "Liver toxicity"],
    monitoring: ["Liver function", "Blood counts", "Kidney function", "Folic acid"],
    conditions: ["Rheumatoid arthritis", "Psoriasis", "Autoimmune diseases", "Inflammation"]
  },
  {
    name: "Cyclobenzaprine",
    category: "Muscle Relaxant",
    class: "Tricyclic muscle relaxant",
    dosage: "5-10mg three times daily",
    indications: ["Muscle spasms", "Back pain", "Neck pain", "Fibromyalgia"],
    contraindications: ["Heart failure", "Heart block", "MAOI use", "Hyperthyroidism"],
    interactions: ["MAOIs", "CNS depressants", "Tramadol", "Alcohol"],
    sideEffects: ["Drowsiness", "Dry mouth", "Dizziness", "Blurred vision"],
    monitoring: ["Muscle function", "Side effects", "Heart function"],
    conditions: ["Muscle spasms", "Back pain", "Neck pain", "Fibromyalgia"]
  },

  // Dermatological
  {
    name: "Hydrocortisone",
    category: "Topical Corticosteroid",
    class: "Low potency steroid",
    dosage: "Apply 2-4 times daily",
    indications: ["Eczema", "Psoriasis", "Contact dermatitis", "Insect bites"],
    contraindications: ["Viral infections", "Fungal infections", "Bacterial infections"],
    interactions: ["Other topical medications"],
    sideEffects: ["Skin thinning", "Stretch marks", "Acne", "Skin irritation"],
    monitoring: ["Skin condition", "Side effects", "Infection signs"],
    conditions: ["Eczema", "Psoriasis", "Contact dermatitis", "Skin inflammation"]
  },
  {
    name: "Clotrimazole",
    category: "Antifungal",
    class: "Imidazole",
    dosage: "Apply 2-3 times daily for 2-4 weeks",
    indications: ["Athlete's foot", "Ringworm", "Jock itch", "Yeast infections"],
    contraindications: ["Hypersensitivity", "Pregnancy (first trimester)"],
    interactions: ["Other topical medications"],
    sideEffects: ["Skin irritation", "Burning", "Itching", "Rash"],
    monitoring: ["Skin condition", "Infection clearance", "Side effects"],
    conditions: ["Athlete's foot", "Ringworm", "Jock itch", "Yeast infections"]
  },

  // Psychiatric
  {
    name: "Sertraline",
    category: "SSRI",
    class: "Selective serotonin reuptake inhibitor",
    dosage: "50-200mg daily",
    indications: ["Depression", "Anxiety", "PTSD", "OCD", "Panic disorder"],
    contraindications: ["MAOI use", "Pimozide", "Severe liver disease"],
    interactions: ["MAOIs", "Warfarin", "Digoxin", "Tricyclic antidepressants"],
    sideEffects: ["Nausea", "Insomnia", "Sexual dysfunction", "Weight changes"],
    monitoring: ["Mood", "Suicidal thoughts", "Side effects", "Weight"],
    conditions: ["Depression", "Anxiety", "PTSD", "OCD", "Panic disorder"]
  },
  {
    name: "Lorazepam",
    category: "Benzodiazepine",
    class: "GABA agonist",
    dosage: "0.5-2mg 2-3 times daily",
    indications: ["Anxiety", "Insomnia", "Seizures", "Alcohol withdrawal"],
    contraindications: ["Severe respiratory insufficiency", "Sleep apnea", "Pregnancy"],
    interactions: ["Alcohol", "CNS depressants", "Cimetidine", "Probenecid"],
    sideEffects: ["Drowsiness", "Dizziness", "Memory problems", "Dependence"],
    monitoring: ["Mood", "Sleep patterns", "Dependence signs", "Side effects"],
    conditions: ["Anxiety", "Insomnia", "Seizures", "Alcohol withdrawal"]
  },

  // Urological
  {
    name: "Tamsulosin",
    category: "Alpha Blocker",
    class: "Alpha-1A selective antagonist",
    dosage: "0.4mg daily",
    indications: ["BPH", "Prostatic hyperplasia", "Urinary retention"],
    contraindications: ["Hypersensitivity", "Severe liver disease"],
    interactions: ["Cimetidine", "Warfarin", "Sildenafil"],
    sideEffects: ["Dizziness", "Headache", "Retrograde ejaculation", "Nasal congestion"],
    monitoring: ["Urinary function", "Blood pressure", "Side effects"],
    conditions: ["BPH", "Prostatic hyperplasia", "Urinary retention", "Difficulty urinating"]
  },
  {
    name: "Oxybutynin",
    category: "Anticholinergic",
    class: "Muscarinic antagonist",
    dosage: "5-15mg daily",
    indications: ["Overactive bladder", "Urinary incontinence", "Neurogenic bladder"],
    contraindications: ["Glaucoma", "Severe constipation", "Myasthenia gravis"],
    interactions: ["Other anticholinergics", "CNS depressants", "Alcohol"],
    sideEffects: ["Dry mouth", "Constipation", "Blurred vision", "Drowsiness"],
    monitoring: ["Urinary function", "Side effects", "Eye pressure"],
    conditions: ["Overactive bladder", "Urinary incontinence", "Neurogenic bladder"]
  },

  // Ophthalmic
  {
    name: "Timolol",
    category: "Beta Blocker",
    class: "Non-selective beta antagonist",
    dosage: "1 drop twice daily",
    indications: ["Glaucoma", "Ocular hypertension", "High eye pressure"],
    contraindications: ["Asthma", "COPD", "Heart block", "Heart failure"],
    interactions: ["Oral beta-blockers", "Calcium channel blockers", "Digoxin"],
    sideEffects: ["Burning", "Stinging", "Blurred vision", "Dry eyes"],
    monitoring: ["Eye pressure", "Vision", "Side effects"],
    conditions: ["Glaucoma", "Ocular hypertension", "High eye pressure"]
  },
  {
    name: "Artificial Tears",
    category: "Lubricant",
    class: "Ocular lubricant",
    dosage: "1-2 drops as needed",
    indications: ["Dry eyes", "Eye irritation", "Contact lens discomfort"],
    contraindications: ["Hypersensitivity", "Eye infection"],
    interactions: ["Other eye medications"],
    sideEffects: ["Temporary blurring", "Eye irritation", "Allergic reactions"],
    monitoring: ["Eye comfort", "Vision", "Side effects"],
    conditions: ["Dry eyes", "Eye irritation", "Contact lens discomfort"]
  }
];

// Drug categories for filtering
export const drugCategories = [
  "Analgesic", "NSAID", "Antitussive", "Expectorant", "Decongestant",
  "Proton Pump Inhibitor", "H2 Blocker", "Antidiarrheal", "Bronchodilator",
  "Corticosteroid", "ACE Inhibitor", "Beta Blocker", "Antidiabetic",
  "Thyroid Hormone", "Anticonvulsant", "Tricyclic Antidepressant",
  "DMARD", "Muscle Relaxant", "Topical Corticosteroid", "Antifungal",
  "SSRI", "Benzodiazepine", "Alpha Blocker", "Anticholinergic",
  "Lubricant"
];

// Common conditions for filtering
export const commonConditions = [
  "Fever", "Pain", "Headache", "Toothache", "Body aches", "Inflammation",
  "Dry cough", "Non-productive cough", "Chest congestion", "Thick mucus",
  "Productive cough", "Nasal congestion", "Sinus pressure",
  "Eustachian tube dysfunction", "GERD", "Peptic ulcer", "Acid reflux",
  "Heartburn", "Diarrhea", "Traveler's diarrhea", "Chronic diarrhea",
  "Asthma", "COPD", "Bronchospasm", "Shortness of breath",
  "Hypertension", "Angina", "Heart failure", "Arrhythmias",
  "Type 2 diabetes", "Prediabetes", "PCOS", "Insulin resistance",
  "Hypothyroidism", "Thyroid cancer", "Goiter", "Low thyroid function",
  "Neuropathic pain", "Epilepsy", "Fibromyalgia", "Restless legs syndrome",
  "Depression", "Migraine", "Insomnia", "Rheumatoid arthritis",
  "Psoriasis", "Autoimmune diseases", "Muscle spasms", "Back pain",
  "Neck pain", "Eczema", "Contact dermatitis", "Skin inflammation",
  "Athlete's foot", "Ringworm", "Jock itch", "Yeast infections",
  "Anxiety", "PTSD", "OCD", "Panic disorder", "Seizures",
  "Alcohol withdrawal", "BPH", "Prostatic hyperplasia", "Urinary retention",
  "Difficulty urinating", "Overactive bladder", "Urinary incontinence",
  "Neurogenic bladder", "Glaucoma", "Ocular hypertension", "High eye pressure",
  "Dry eyes", "Eye irritation", "Contact lens discomfort"
];
