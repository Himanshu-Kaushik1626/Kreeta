/* ------------------------------------------------------------------ *
 *  Lab test packages and home sample collection data                 *
 * ------------------------------------------------------------------ */

export interface LabPackage {
  id: string;
  name: string;
  slug: string;
  category: "Full Body" | "Essential" | "Senior Citizen" | "Organ Specific" | "Specialized";
  price: number;
  originalPrice: number;
  parametersCount: number;
  fastingRequired: boolean;
  fastingHours?: number;
  sampleType: string;
  reportTurnaround: string;
  description: string;
  testsIncluded: string[];
  recommendedFor: string;
  popular?: boolean;
}

export const labPackages: LabPackage[] = [
  {
    id: "lp-full-body",
    name: "Kreeta Comprehensive Full Body Health Checkup",
    slug: "comprehensive-full-body-checkup",
    category: "Full Body",
    price: 1999,
    originalPrice: 4500,
    parametersCount: 68,
    fastingRequired: true,
    fastingHours: 10,
    sampleType: "Blood & Urine",
    reportTurnaround: "Within 24 Hours",
    description:
      "Our most recommended preventive package covering complete hemogram, liver, kidney, lipid, thyroid, diabetic screen, vitamins D3 & B12, and urine routine.",
    testsIncluded: [
      "Complete Hemogram (CBC + ESR - 24 params)",
      "Liver Function Test (LFT - 11 params)",
      "Kidney Function Test (KFT / RFT - 8 params)",
      "Lipid Profile (Cholesterol, Triglycerides, HDL, LDL - 8 params)",
      "Thyroid Profile (Total T3, Total T4, TSH)",
      "HbA1c & Average Blood Glucose",
      "Vitamin D 25-Hydroxy & Vitamin B12",
      "Urine Routine & Microscopic Examination (15 params)",
    ],
    recommendedFor: "Men & women aged 25+ for yearly preventive screening",
    popular: true,
  },
  {
    id: "lp-senior-citizen",
    name: "Senior Citizen Advanced Care Package",
    slug: "senior-citizen-health-package",
    category: "Senior Citizen",
    price: 2499,
    originalPrice: 5500,
    parametersCount: 74,
    fastingRequired: true,
    fastingHours: 10,
    sampleType: "Blood & Urine",
    reportTurnaround: "Within 24 Hours",
    description:
      "Designed specifically for seniors aged 55+. Evaluates cardiac risk, bone health (calcium & phosphorus), electrolyte balance, diabetes, and vital organ function.",
    testsIncluded: [
      "Complete Blood Count (CBC) with ESR",
      "High Sensitivity CRP (hs-CRP Cardiac Risk)",
      "Electrolytes Panel (Sodium, Potassium, Chloride)",
      "Calcium, Phosphorus & Uric Acid",
      "Kidney Function Test with eGFR",
      "Liver Function Test (LFT)",
      "Extended Lipid Profile",
      "HbA1c & Fasting Blood Sugar",
      "Thyroid Stimulating Hormone (TSH Ultrasensitive)",
      "Vitamin D3 & Vitamin B12",
    ],
    recommendedFor: "Elderly family members with hypertension, diabetes, or joint conditions",
    popular: true,
  },
  {
    id: "lp-diabetes-care",
    name: "Diabetes & Glycemic Monitor Package",
    slug: "diabetes-monitoring-package",
    category: "Organ Specific",
    price: 799,
    originalPrice: 1600,
    parametersCount: 12,
    fastingRequired: true,
    fastingHours: 8,
    sampleType: "Blood & Urine",
    reportTurnaround: "Same Day (12 Hours)",
    description:
      "Essential quarterly screening for diabetic and pre-diabetic patients to track long-term glucose management and detect early microalbuminuria.",
    testsIncluded: [
      "HbA1c (Glycated Hemoglobin by HPLC)",
      "Estimated Average Glucose (eAG)",
      "Fasting Blood Sugar (FBS)",
      "Post-Prandial Blood Sugar (PPBS)",
      "Urine Microalbumin / Creatinine Ratio (ACR)",
      "Serum Creatinine & eGFR",
    ],
    recommendedFor: "Quarterly monitoring for type 1 or type 2 diabetes",
  },
  {
    id: "lp-cardiac-risk",
    name: "Healthy Heart & Lipid Panel",
    slug: "cardiac-lipid-panel",
    category: "Organ Specific",
    price: 999,
    originalPrice: 2200,
    parametersCount: 16,
    fastingRequired: true,
    fastingHours: 12,
    sampleType: "Blood",
    reportTurnaround: "Same Day (12 Hours)",
    description:
      "Assesses atherosclerotic cardiovascular risk through advanced lipid ratios, hs-CRP, and homocysteine analysis.",
    testsIncluded: [
      "Total Cholesterol, HDL, LDL, VLDL",
      "Triglycerides & Non-HDL Cholesterol",
      "Cholesterol / HDL Ratio & LDL / HDL Ratio",
      "High Sensitivity C-Reactive Protein (hs-CRP)",
      "Homocysteine",
    ],
    recommendedFor: "Individuals with family history of cardiac events, stress, or high blood pressure",
  },
  {
    id: "lp-thyroid-vital",
    name: "Thyroid & Metabolic Function Test",
    slug: "thyroid-metabolic-panel",
    category: "Organ Specific",
    price: 499,
    originalPrice: 1100,
    parametersCount: 3,
    fastingRequired: false,
    sampleType: "Blood",
    reportTurnaround: "Same Day (8 Hours)",
    description:
      "Checks thyroid gland activity for hypothyroid or hyperthyroid symptoms like fatigue, sudden weight fluctuation, or mood changes.",
    testsIncluded: [
      "Total Triiodothyronine (T3)",
      "Total Thyroxine (T4)",
      "Thyroid Stimulating Hormone (TSH Ultrasensitive)",
    ],
    recommendedFor: "Patients with fatigue, weight gain/loss, hair loss, or metabolic issues",
  },
  {
    id: "lp-cbc-routine",
    name: "Complete Blood Count (CBC) with ESR",
    slug: "cbc-esr-test",
    category: "Essential",
    price: 349,
    originalPrice: 700,
    parametersCount: 24,
    fastingRequired: false,
    sampleType: "Blood (EDTA)",
    reportTurnaround: "Within 6 Hours",
    description:
      "Vital test for fever, viral infections, dengue platelet check, anemia, and general weakness.",
    testsIncluded: [
      "Hemoglobin, RBC, Hematocrit (PCV)",
      "Total Leukocyte Count (TLC / WBC)",
      "Differential Count (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)",
      "Platelet Count & Platelet Indices",
      "Erythrocyte Sedimentation Rate (ESR)",
    ],
    recommendedFor: "Fever diagnosis, infection check, pre-op clearance",
  },
  {
    id: "lp-vitamin-duo",
    name: "Vitamin D3 & Vitamin B12 Duo Panel",
    slug: "vitamin-d-b12-duo",
    category: "Specialized",
    price: 1199,
    originalPrice: 2800,
    parametersCount: 2,
    fastingRequired: false,
    sampleType: "Blood",
    reportTurnaround: "Within 24 Hours",
    description:
      "Diagnoses chronic bone pain, muscle weakness, nerve tingling, fatigue, and low immunity commonly associated with deficiency in Indian diets.",
    testsIncluded: [
      "Vitamin D 25-Hydroxy (25-OH)",
      "Vitamin B12 (Cyanocobalamin)",
    ],
    recommendedFor: "Chronic joint ache, vegetarian diets, numbness, fatigue",
  },
  {
    id: "lp-liver-kidney",
    name: "Liver & Kidney Vital Duo (LFT + KFT)",
    slug: "liver-kidney-duo",
    category: "Organ Specific",
    price: 999,
    originalPrice: 2100,
    parametersCount: 19,
    fastingRequired: true,
    fastingHours: 8,
    sampleType: "Blood",
    reportTurnaround: "Same Day (12 Hours)",
    description:
      "Crucial organ monitoring for patients taking long-term medications, post-chemotherapy, or managing chronic liver/renal conditions.",
    testsIncluded: [
      "Bilirubin Total, Direct & Indirect",
      "SGOT (AST), SGPT (ALT), Alkaline Phosphatase",
      "Total Protein, Albumin, Globulin & A:G Ratio",
      "Blood Urea Nitrogen (BUN) & Blood Urea",
      "Serum Creatinine, Uric Acid & eGFR",
    ],
    recommendedFor: "Patients on chronic drugs, jaundice history, swelling in feet",
  },
];
