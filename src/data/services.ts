/* ------------------------------------------------------------------ *
 *  Service definitions for Kreeta Nursing Service                     *
 * ------------------------------------------------------------------ */

export interface ServicePricing {
  label: string;
  price: number;
  unit: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // Lucide icon name
  category: string;
  description: string;
  longDescription: string;
  whoNeedsIt: string[];
  whatsIncluded: string[];
  process: string[];
  staffQualifications: string[];
  pricing: ServicePricing[];
  faqs: FAQ[];
  relatedSlugs: string[];
  image: string;
}

export const SERVICE_CATEGORIES = [
  "Nursing",
  "Therapy",
  "Medical Procedures",
  "Doctor & Lab",
  "Equipment",
  "Specialized Care",
] as const;

export const services: Service[] = [
  {
    id: "1",
    slug: "nursing-care",
    title: "Nursing Care at Home & Hospital",
    shortTitle: "Nursing Care",
    icon: "Heart",
    category: "Nursing",
    description:
      "Qualified nurses available round the clock for home and hospital care. Day, night, or 24-hour shifts tailored to your needs.",
    longDescription:
      "Our trained and experienced nurses provide comprehensive medical care in the comfort of your home or alongside you at the hospital. Whether you need post-surgical monitoring, chronic disease management, wound care, or medication administration, our nursing staff delivers compassionate, professional care. Every nurse is police-verified, clinically trained, and supervised by our care coordinators to ensure the highest standards.",
    whoNeedsIt: [
      "Post-surgery patients requiring wound care and monitoring",
      "Elderly family members needing daily medical attention",
      "Patients with chronic conditions like diabetes or COPD",
      "Hospital patients who need a dedicated attendant",
      "Bedridden patients requiring round-the-clock care",
    ],
    whatsIncluded: [
      "Vital signs monitoring (BP, temperature, SpO2, pulse)",
      "Medication administration and management",
      "Wound dressing and post-operative care",
      "Injection and IV management",
      "Catheter and RT tube care",
      "Patient hygiene and comfort",
      "Detailed daily progress reports",
      "Coordination with attending physician",
    ],
    process: [
      "Share your care requirements via our booking form or phone",
      "Our care coordinator assesses the patient's needs",
      "We match you with a nurse suited to the condition",
      "The nurse arrives at the scheduled time, fully equipped",
      "Ongoing supervision and seamless nurse replacement if needed",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "Minimum 1 year clinical experience",
      "Police verification and background check",
      "CPR and emergency response training",
      "Regular skill assessments by Kreeta",
    ],
    pricing: [
      { label: "12-Hour Day Shift", price: 1200, unit: "per day" },
      { label: "12-Hour Night Shift", price: 1400, unit: "per night" },
      { label: "24-Hour Care", price: 2200, unit: "per day" },
      { label: "Monthly (24-Hour)", price: 55000, unit: "per month" },
    ],
    faqs: [
      {
        question: "What qualifications do your nurses have?",
        answer:
          "All our nurses hold a GNM or B.Sc. Nursing degree with a minimum of one year of clinical experience. They undergo police verification, background checks, and regular skill assessments conducted by our clinical team.",
      },
      {
        question: "Can I choose between a male and female nurse?",
        answer:
          "Absolutely. You can specify your preference for a male or female nurse when booking, and we will match accordingly based on availability.",
      },
      {
        question: "What happens if the nurse doesn't suit our needs?",
        answer:
          "We offer a replacement guarantee. If you are not satisfied with the assigned nurse, contact us and we will arrange a suitable replacement at no extra cost.",
      },
      {
        question: "Do you provide nurses for hospital duty as well?",
        answer:
          "Yes, we provide nurses for both home and hospital settings across Delhi NCR. Our hospital-duty nurses are experienced in ICU, ward, and post-operative care.",
      },
    ],
    relatedSlugs: ["caretaker-elderly-care", "gda", "home-visits"],
    image: "/images/services/nursing-care.jpeg",
  },
  {
    id: "2",
    slug: "caretaker-elderly-care",
    title: "Caretaker & Elderly Patient Care",
    shortTitle: "Elderly Care",
    icon: "Users",
    category: "Nursing",
    description:
      "Compassionate caretakers for elderly, bedridden, and dependent patients. We ensure dignity, comfort, and daily support.",
    longDescription:
      "Ageing gracefully at home is possible with the right support. Our trained caretakers provide personal assistance, mobility help, companionship, and daily care to elderly and bedridden patients. From feeding and bathing to light physiotherapy exercises and emotional support, we treat your loved ones with the respect and warmth they deserve.",
    whoNeedsIt: [
      "Elderly individuals who need daily living assistance",
      "Bedridden patients requiring turning, feeding, and hygiene",
      "Patients recovering from a stroke or fall",
      "Families seeking a reliable companion for aging parents",
      "Patients with Alzheimer's or dementia",
    ],
    whatsIncluded: [
      "Assistance with bathing, grooming, and personal hygiene",
      "Feeding support and meal preparation oversight",
      "Mobility assistance and fall prevention",
      "Light exercises and range-of-motion activities",
      "Medication reminders",
      "Companionship and emotional support",
      "Bed sore prevention and basic skin care",
      "Daily activity and health reporting to family",
    ],
    process: [
      "Tell us about the patient's condition and daily needs",
      "Our coordinator visits the patient or conducts a video assessment",
      "We select a caretaker matched to the patient's requirements",
      "Care begins with a personalized daily routine",
      "Weekly check-ins and seamless caretaker rotation",
    ],
    staffQualifications: [
      "Certified caretaker training programme",
      "Experience with geriatric and bedridden patients",
      "Police verification and reference checks",
      "First aid and patient handling training",
      "Empathetic and patient temperament assessment",
    ],
    pricing: [
      { label: "12-Hour Day Shift", price: 900, unit: "per day" },
      { label: "12-Hour Night Shift", price: 1000, unit: "per night" },
      { label: "24-Hour Live-In", price: 1600, unit: "per day" },
      { label: "Monthly (24-Hour)", price: 40000, unit: "per month" },
    ],
    faqs: [
      {
        question: "What is the difference between a nurse and a caretaker?",
        answer:
          "A nurse is a qualified medical professional who can administer medications, injections, and perform clinical procedures. A caretaker provides personal care, daily living assistance, and companionship but does not perform medical procedures.",
      },
      {
        question: "Can a caretaker manage patients with dementia?",
        answer:
          "Yes. Our caretakers receive specialized training in managing patients with Alzheimer's and dementia, including behaviour management, safety protocols, and engaging activities.",
      },
    ],
    relatedSlugs: ["nursing-care", "physiotherapy-at-home", "home-visits"],
    image: "/images/services/elderly-care.jpeg",
  },
  {
    id: "3",
    slug: "gda",
    title: "GDA (General Duty Assistant)",
    shortTitle: "GDA",
    icon: "HandHelping",
    category: "Nursing",
    description:
      "Trained General Duty Assistants to support patients in hospitals and homes with basic medical and personal care tasks.",
    longDescription:
      "Our General Duty Assistants bridge the gap between nursing and caregiving. Trained under the Pradhan Mantri Kaushal Vikas Yojana standards, they handle patient transfers, vital monitoring, basic wound care, catheter bag management, and assist nursing staff. They are ideal for hospital accompaniment and home-based patient support.",
    whoNeedsIt: [
      "Patients who need hospital accompaniment",
      "Homes needing support between nursing visits",
      "Post-operative patients needing mobility and monitoring help",
      "Families looking for cost-effective trained assistance",
    ],
    whatsIncluded: [
      "Patient transfer and positioning",
      "Basic vital signs monitoring",
      "Catheter bag and oxygen cylinder management",
      "Assist with feeding and mobility",
      "Basic wound dressing under supervision",
      "Hospital errands and coordination",
    ],
    process: [
      "Share the patient's location and care requirements",
      "We assign a trained GDA with relevant experience",
      "The GDA reports on time with necessary supplies",
      "Daily reporting and coordination with family and nurses",
    ],
    staffQualifications: [
      "PMKVY-certified or hospital-trained GDA",
      "Minimum 6 months hands-on experience",
      "Police verification completed",
      "Patient handling and safety training",
    ],
    pricing: [
      { label: "12-Hour Day Shift", price: 800, unit: "per day" },
      { label: "12-Hour Night Shift", price: 900, unit: "per night" },
      { label: "24-Hour", price: 1400, unit: "per day" },
      { label: "Monthly (24-Hour)", price: 35000, unit: "per month" },
    ],
    faqs: [
      {
        question: "Is a GDA qualified to give injections?",
        answer:
          "No. GDAs are trained in basic patient care, monitoring, and assistance. For injections and clinical procedures, you need a qualified nurse.",
      },
    ],
    relatedSlugs: ["nursing-care", "caretaker-elderly-care"],
    image: "/images/services/gda.jpeg",
  },
  {
    id: "4",
    slug: "physiotherapy-at-home",
    title: "Physiotherapy at Home",
    shortTitle: "Physiotherapy",
    icon: "Activity",
    category: "Therapy",
    description:
      "Expert physiotherapists visit your home for post-surgery rehab, neuro recovery, ortho care, and geriatric mobility programmes.",
    longDescription:
      "Skip the commute and recover faster with in-home physiotherapy. Our licensed physiotherapists design personalized treatment plans for post-surgical rehabilitation, neurological recovery (stroke, paralysis), orthopaedic conditions (fractures, joint replacements), and age-related mobility challenges. Each session includes assessment, manual therapy, therapeutic exercises, and progress tracking.",
    whoNeedsIt: [
      "Post-surgery patients (knee/hip replacement, spinal surgery)",
      "Stroke and paralysis recovery",
      "Patients with frozen shoulder, back pain, or arthritis",
      "Elderly patients with reduced mobility",
      "Sports injury rehabilitation",
    ],
    whatsIncluded: [
      "Initial assessment and goal setting",
      "Manual therapy and joint mobilization",
      "Therapeutic and strengthening exercises",
      "Gait and balance training",
      "Pain management techniques",
      "Home exercise programme and education",
      "Progress reports shared with family and doctor",
    ],
    process: [
      "Book a session online or by phone",
      "A physiotherapist visits for an initial assessment",
      "Customized treatment plan is created",
      "Regular sessions at your home at scheduled times",
      "Progress reviews and plan adjustments",
    ],
    staffQualifications: [
      "BPT or MPT degree from a recognized university",
      "Registered with the physiotherapy council",
      "Experience in the relevant specialization",
      "Police verification completed",
    ],
    pricing: [
      { label: "Single Session (45 min)", price: 800, unit: "per session" },
      { label: "10 Sessions Package", price: 7000, unit: "package" },
      { label: "20 Sessions Package", price: 12000, unit: "package" },
      { label: "Monthly (Daily)", price: 18000, unit: "per month" },
    ],
    faqs: [
      {
        question: "How long is each physiotherapy session?",
        answer:
          "Each session typically lasts 45 minutes to 1 hour, depending on the treatment plan and patient's tolerance.",
      },
      {
        question: "Do you bring equipment for the sessions?",
        answer:
          "Yes, our physiotherapists carry necessary portable equipment like therabands, TENS machines, and exercise tools. For larger equipment, we can arrange rentals.",
      },
    ],
    relatedSlugs: ["nursing-care", "home-visits", "medical-equipment"],
    image: "/images/services/physiotherapy.jpeg",
  },
  {
    id: "5",
    slug: "injection-iv-drip",
    title: "Injection & IV Drip at Home",
    shortTitle: "Injection & IV",
    icon: "Syringe",
    category: "Medical Procedures",
    description:
      "Qualified nurses administer IV drips, subcutaneous, and intramuscular injections safely at your home.",
    longDescription:
      "No need to travel to a clinic for routine injections or IV therapy. Our qualified nurses come to your home to administer intravenous (IV) drips, subcutaneous (S/C) injections, and intramuscular (IM) injections as prescribed by your doctor. We follow strict aseptic protocols and monitor you throughout the procedure for any adverse reactions.",
    whoNeedsIt: [
      "Patients prescribed IV antibiotics or fluids",
      "Patients needing regular insulin or blood-thinner injections",
      "Post-chemotherapy supportive IV therapy",
      "Elderly patients who cannot visit a clinic",
      "Patients requiring vitamin or iron infusions",
    ],
    whatsIncluded: [
      "Nurse visit with sterile supplies",
      "Safe cannulation and IV setup",
      "Continuous monitoring during infusion",
      "Post-procedure observation",
      "Proper biomedical waste disposal",
      "Documentation for your records",
    ],
    process: [
      "Share the doctor's prescription via WhatsApp or the booking form",
      "We confirm the medication and schedule a nurse visit",
      "The nurse arrives with all necessary sterile supplies",
      "Injection or drip is administered with full monitoring",
      "Post-procedure check before the nurse departs",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "Trained in IV cannulation and infusion therapy",
      "Experience in emergency and adverse reaction management",
      "Police verification completed",
    ],
    pricing: [
      { label: "IM / S/C Injection", price: 300, unit: "per visit" },
      { label: "IV Drip (up to 1 hour)", price: 600, unit: "per visit" },
      { label: "IV Drip (1-3 hours)", price: 900, unit: "per visit" },
      { label: "Multiple Doses Package", price: 2500, unit: "5 visits" },
    ],
    faqs: [
      {
        question: "Do I need to provide the medicines?",
        answer:
          "Yes, you need to arrange the prescribed medicines. Our nurse will bring all other supplies like syringes, IV sets, and sterile swabs.",
      },
    ],
    relatedSlugs: ["home-visits", "nursing-care", "catheter-change"],
    image: "/images/services/injection-iv.jpeg",
  },
  {
    id: "6",
    slug: "catheter-change",
    title: "Urine Catheter (Foley's) Change",
    shortTitle: "Catheter Change",
    icon: "Droplets",
    category: "Medical Procedures",
    description:
      "Sterile Foley's catheter insertion, removal, and change by experienced nurses at your home.",
    longDescription:
      "Regular catheter changes are essential for patients with long-term urinary catheters. Our nurses perform Foley's catheter insertion, removal, and routine changes at your home following strict aseptic techniques. This eliminates the discomfort and risk of hospital visits, especially for bedridden or elderly patients.",
    whoNeedsIt: [
      "Patients with long-term urinary catheters",
      "Post-surgical patients with temporary catheterization",
      "Elderly or bedridden patients unable to visit a hospital",
      "Patients with urinary retention issues",
    ],
    whatsIncluded: [
      "Sterile catheter insertion or change",
      "Assessment of the urinary tract for infections",
      "Catheter bag change and cleaning guidance",
      "Patient and caregiver education on catheter care",
      "Proper biomedical waste disposal",
    ],
    process: [
      "Book online or call us with the patient's details",
      "We confirm the catheter size and schedule the visit",
      "A trained nurse arrives with sterile catheter kits",
      "Procedure performed with full aseptic precautions",
      "Care instructions provided to patient and family",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "Experienced in catheterization procedures",
      "Aseptic technique training",
      "Police verification completed",
    ],
    pricing: [
      { label: "Catheter Change", price: 500, unit: "per visit" },
      { label: "New Insertion", price: 700, unit: "per visit" },
      { label: "With Catheter Kit", price: 900, unit: "per visit" },
    ],
    faqs: [
      {
        question: "How often should a catheter be changed?",
        answer:
          "Typically, a Foley's catheter should be changed every 2 to 4 weeks, depending on the type of catheter and the doctor's recommendation.",
      },
    ],
    relatedSlugs: ["rt-tube-care", "injection-iv-drip", "home-visits"],
    image: "/images/services/catheter.jpeg",
  },
  {
    id: "7",
    slug: "rt-tube-care",
    title: "RT (Ryle's) Tube Insertion & Care",
    shortTitle: "RT Tube Care",
    icon: "Stethoscope",
    category: "Medical Procedures",
    description:
      "Professional Ryle's tube insertion, replacement, and feeding guidance by trained nurses at your home.",
    longDescription:
      "For patients who cannot eat orally, a Ryle's tube (nasogastric tube) is essential for nutrition and medication delivery. Our experienced nurses perform safe RT tube insertion, routine changes, and provide comprehensive feeding guidance to caregivers. We ensure patient comfort and tube position verification throughout the procedure.",
    whoNeedsIt: [
      "Patients unable to swallow due to stroke or neurological conditions",
      "Post-surgical patients requiring temporary tube feeding",
      "Patients with head, neck, or oesophageal conditions",
      "Elderly patients with advanced dementia and swallowing difficulties",
    ],
    whatsIncluded: [
      "RT tube insertion or replacement",
      "Tube position verification",
      "Feeding demonstration and caregiver training",
      "Tube flushing and maintenance guidance",
      "Assessment for tube-related complications",
    ],
    process: [
      "Share the doctor's prescription and patient details",
      "We schedule a nurse visit with appropriate tube sizes",
      "The nurse performs the procedure with minimal discomfort",
      "Feeding technique and tube care instructions are demonstrated",
      "Follow-up scheduling for tube changes",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "ICU or critical care experience",
      "Trained in nasogastric tube procedures",
      "Police verification completed",
    ],
    pricing: [
      { label: "RT Tube Insertion", price: 700, unit: "per visit" },
      { label: "RT Tube Change", price: 500, unit: "per visit" },
      { label: "With RT Tube Kit", price: 900, unit: "per visit" },
    ],
    faqs: [
      {
        question: "How often does an RT tube need to be changed?",
        answer:
          "RT tubes are typically changed every 2 to 4 weeks. Your doctor will advise the specific frequency based on the patient's condition and tube type.",
      },
    ],
    relatedSlugs: ["catheter-change", "nursing-care", "home-visits"],
    image: "/images/services/rt-tube.jpeg",
  },
  {
    id: "8",
    slug: "home-visits",
    title: "Home Visits — Vitals, Dressing & Wound Care",
    shortTitle: "Home Visits",
    icon: "Home",
    category: "Medical Procedures",
    description:
      "Scheduled nurse visits for vital checks, wound dressing, post-operative care, and routine health monitoring.",
    longDescription:
      "Our home visit service brings professional nursing care to your doorstep for routine health checks and wound management. Whether you need daily vitals monitoring after a hospital discharge, sterile wound dressing, or ongoing post-operative care, our nurses arrive punctually with all necessary supplies. This service is perfect for patients who need regular professional attention without the commitment of a full-day nurse.",
    whoNeedsIt: [
      "Post-surgical patients needing regular wound dressing",
      "Diabetic patients with chronic wounds or foot ulcers",
      "Patients recently discharged from the hospital",
      "Elderly patients requiring routine health monitoring",
      "Patients with pressure sores or bedsores",
    ],
    whatsIncluded: [
      "Vital signs check (BP, temperature, SpO2, pulse, blood sugar)",
      "Sterile wound dressing and cleaning",
      "Suture and staple removal",
      "Bedsore assessment and dressing",
      "Health status reporting to family and doctor",
    ],
    process: [
      "Book a visit online or by phone",
      "Specify the care needed and preferred timing",
      "Our nurse arrives with a fully stocked medical kit",
      "Procedure performed, vitals recorded, and notes shared",
      "Schedule follow-up visits as needed",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "Wound care and dressing expertise",
      "Police verification completed",
    ],
    pricing: [
      { label: "Single Visit", price: 400, unit: "per visit" },
      { label: "5 Visits Package", price: 1800, unit: "package" },
      { label: "10 Visits Package", price: 3200, unit: "package" },
    ],
    faqs: [
      {
        question: "How long does a typical home visit last?",
        answer:
          "A standard home visit lasts 20 to 45 minutes depending on the procedures required. Complex wound dressing may take longer.",
      },
    ],
    relatedSlugs: ["nursing-care", "injection-iv-drip", "catheter-change"],
    image: "/images/services/home-visits.jpeg",
  },
  {
    id: "9",
    slug: "doctor-visit-at-home",
    title: "Doctor Visit at Home",
    shortTitle: "Doctor at Home",
    icon: "UserCheck",
    category: "Doctor & Lab",
    description:
      "Experienced MBBS and specialist doctors visit your home for consultations, prescriptions, and follow-up care.",
    longDescription:
      "When mobility is limited or a clinic visit feels overwhelming, our qualified doctors come to you. From general consultations and prescription renewals to specialist assessments for elderly, paediatric, and chronic-disease patients, we bring the clinic experience home. All consultations include a prescription, basic examination, and follow-up recommendations.",
    whoNeedsIt: [
      "Elderly patients who find it difficult to travel",
      "Patients needing urgent non-emergency consultations",
      "Bedridden or post-surgical patients",
      "Parents seeking paediatric consultations at home",
      "Patients needing prescription renewals or follow-ups",
    ],
    whatsIncluded: [
      "Detailed patient history and examination",
      "Prescription and treatment recommendations",
      "Referral for tests or specialist consultations if needed",
      "Basic vital signs monitoring",
      "Follow-up guidance and report review",
    ],
    process: [
      "Book a doctor visit with patient details and concern",
      "We assign a doctor from our panel based on the requirement",
      "The doctor visits your home at the scheduled time",
      "Thorough consultation and examination performed",
      "Prescription provided and follow-up plan discussed",
    ],
    staffQualifications: [
      "MBBS degree from a recognized institution",
      "Valid medical council registration",
      "Minimum 3 years of clinical practice",
      "Background verification completed",
    ],
    pricing: [
      { label: "General Physician Visit", price: 1000, unit: "per visit" },
      { label: "Specialist Consultation", price: 1500, unit: "per visit" },
      { label: "Follow-up Visit", price: 700, unit: "per visit" },
    ],
    faqs: [
      {
        question: "Can the doctor prescribe medicines during the visit?",
        answer:
          "Yes, our doctors provide a complete prescription after examination. You can then order medicines from any pharmacy or ask us to help arrange delivery.",
      },
    ],
    relatedSlugs: ["home-visits", "lab-tests-at-home", "nursing-care"],
    image: "/images/services/doctor-visit.jpeg",
  },
  {
    id: "10",
    slug: "lab-tests-at-home",
    title: "Lab Tests at Home",
    shortTitle: "Lab Tests",
    icon: "FlaskConical",
    category: "Doctor & Lab",
    description:
      "NABL-accredited lab sample collection from your home. Get digital reports within 24 hours.",
    longDescription:
      "Get your blood tests, urine tests, and other diagnostics done without stepping out. Our trained phlebotomists visit your home for sample collection, maintaining cold-chain protocols for accurate results. Reports are delivered digitally within 24 hours from NABL-accredited partner laboratories. We offer individual tests, comprehensive health packages, and doctor-prescribed panels.",
    whoNeedsIt: [
      "Patients needing routine blood tests (CBC, sugar, thyroid)",
      "Elderly patients who cannot visit a lab",
      "Patients monitoring chronic conditions regularly",
      "Corporate health check-ups at offices",
      "Pre-surgical blood work",
    ],
    whatsIncluded: [
      "Trained phlebotomist home visit",
      "Sample collection with proper cold-chain handling",
      "NABL-accredited lab processing",
      "Digital report delivery via email or WhatsApp",
      "Doctor consultation for abnormal reports (on request)",
    ],
    process: [
      "Select tests or upload your prescription",
      "Choose a date and time slot for collection",
      "Our phlebotomist visits your home",
      "Samples are transported to partner labs",
      "Reports delivered digitally within 24 hours",
    ],
    staffQualifications: [
      "Certified phlebotomy training",
      "Experience in home sample collection",
      "Cold-chain handling certification",
      "Police verification completed",
    ],
    pricing: [
      { label: "CBC (Complete Blood Count)", price: 250, unit: "per test" },
      { label: "Full Body Checkup", price: 1499, unit: "package" },
      { label: "Diabetes Panel", price: 599, unit: "package" },
      { label: "Thyroid Profile", price: 499, unit: "package" },
    ],
    faqs: [
      {
        question: "Do I need to fast before sample collection?",
        answer:
          "For certain tests like fasting blood sugar, lipid profile, and liver function tests, you need to fast for 8 to 12 hours. We will inform you about fasting requirements when you book.",
      },
    ],
    relatedSlugs: ["doctor-visit-at-home", "home-visits"],
    image: "/images/services/lab-tests.jpeg",
  },
  {
    id: "11",
    slug: "medical-equipment",
    title: "Medical Equipment on Rent & Sale",
    shortTitle: "Equipment",
    icon: "Package",
    category: "Equipment",
    description:
      "Rent or buy hospital beds, oxygen concentrators, BiPAP, wheelchairs, walkers, and more. Delivery and setup included.",
    longDescription:
      "Setting up a home ICU or recovery room is now easy and affordable. We offer a wide range of medical equipment for rent and purchase — from hospital beds and oxygen concentrators to BiPAP/CPAP machines, wheelchairs, walkers, air mattresses, suction machines, nebulizers, and pulse oximeters. All equipment is sanitized, tested, and delivered with installation support. Our technicians provide a usage demonstration for every delivery.",
    whoNeedsIt: [
      "Patients discharged from the hospital needing home recovery setup",
      "Families setting up home care for elderly or bedridden patients",
      "Patients with respiratory conditions (COPD, sleep apnoea)",
      "Post-surgical patients needing temporary mobility aids",
      "Healthcare facilities needing equipment on short-term rental",
    ],
    whatsIncluded: [
      "Sanitized and quality-checked equipment",
      "Free delivery and installation within Delhi NCR",
      "Usage demonstration by a trained technician",
      "24x7 technical support during rental period",
      "Free pickup after rental period ends",
      "Flexible rental durations (daily, weekly, monthly)",
    ],
    process: [
      "Browse our equipment catalogue or tell us what you need",
      "Choose rental or purchase and select your duration",
      "We confirm availability and delivery time",
      "Equipment is delivered, installed, and demonstrated",
      "Enjoy 24x7 technical support throughout your rental",
    ],
    staffQualifications: [
      "Biomedical equipment technicians",
      "Trained in equipment setup and patient safety",
      "Customer service and troubleshooting expertise",
    ],
    pricing: [
      { label: "Hospital Bed (Manual)", price: 500, unit: "per day" },
      { label: "Oxygen Concentrator (5L)", price: 600, unit: "per day" },
      { label: "BiPAP Machine", price: 800, unit: "per day" },
      { label: "Wheelchair", price: 200, unit: "per day" },
    ],
    faqs: [
      {
        question: "Is there a security deposit for rentals?",
        answer:
          "Yes, a refundable security deposit is required for equipment rentals. The amount varies by equipment and is fully refunded upon return of the equipment in good condition.",
      },
      {
        question: "Do you deliver across all of Delhi NCR?",
        answer:
          "Yes, we deliver to all major areas in Delhi, Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad. Delivery is free for orders above a minimum value.",
      },
    ],
    relatedSlugs: ["nursing-care", "physiotherapy-at-home", "home-visits"],
    image: "/images/services/medical-equipment.jpeg",
  },
  {
    id: "12",
    slug: "ecg-at-home",
    title: "ECG at Home",
    shortTitle: "ECG at Home",
    icon: "HeartPulse",
    category: "Medical Procedures",
    description:
      "12-lead ECG recording at your home by trained technicians. Report reviewed by a cardiologist.",
    longDescription:
      "Our trained cardiac technicians perform a standard 12-lead ECG at your home using portable, hospital-grade equipment. The recording is reviewed by a qualified cardiologist, and you receive the interpreted report digitally within hours. Ideal for routine cardiac screening, chest pain evaluation, and post-treatment monitoring.",
    whoNeedsIt: [
      "Patients with chest pain or palpitations",
      "Routine cardiac health screening for elderly",
      "Post-cardiac procedure follow-up",
      "Patients on cardiac medications needing monitoring",
    ],
    whatsIncluded: [
      "12-lead ECG recording at home",
      "Portable hospital-grade equipment",
      "Cardiologist report interpretation",
      "Digital report delivery",
    ],
    process: [
      "Book an ECG test online or by phone",
      "A cardiac technician visits your home",
      "12-lead ECG recording performed in 15 minutes",
      "Report reviewed by a cardiologist",
      "Interpreted report delivered digitally",
    ],
    staffQualifications: [
      "Certified cardiac technician",
      "Experience in ECG recording and equipment handling",
      "Police verification completed",
    ],
    pricing: [
      { label: "ECG at Home", price: 500, unit: "per test" },
      { label: "ECG + Cardiologist Report", price: 800, unit: "per test" },
    ],
    faqs: [
      {
        question: "How long does the ECG procedure take?",
        answer: "The ECG recording itself takes about 10 to 15 minutes. The entire visit, including setup and patient preparation, typically takes 20 to 30 minutes.",
      },
    ],
    relatedSlugs: ["doctor-visit-at-home", "home-visits", "lab-tests-at-home"],
    image: "/images/services/ecg.jpeg",
  },
  {
    id: "13",
    slug: "bedsore-care",
    title: "Bedsore Prevention & Care",
    shortTitle: "Bedsore Care",
    icon: "ShieldCheck",
    category: "Specialized Care",
    description:
      "Specialized wound care for pressure ulcers, including assessment, dressing, and prevention strategies.",
    longDescription:
      "Pressure ulcers (bedsores) are a common and painful complication for bedridden patients. Our wound-care-trained nurses provide comprehensive bedsore management — from initial assessment and staging to advanced dressing, infection control, and prevention strategies. We also guide caregivers on repositioning schedules, nutrition, and skin care to prevent recurrence.",
    whoNeedsIt: [
      "Bedridden patients with existing pressure sores",
      "Patients at risk of developing bedsores",
      "Post-ICU patients with skin integrity concerns",
      "Caregivers seeking guidance on pressure sore prevention",
    ],
    whatsIncluded: [
      "Bedsore assessment and staging",
      "Sterile wound dressing and debridement",
      "Infection monitoring and management",
      "Repositioning schedule guidance",
      "Nutrition and skin care counselling",
      "Air mattress recommendation if needed",
    ],
    process: [
      "Share photos and details of the wound via WhatsApp or booking form",
      "Our wound care nurse assesses the bedsore",
      "A treatment plan is created with dressing frequency",
      "Regular nurse visits for dressing and monitoring",
      "Prevention strategies taught to the caregiver",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "Specialized wound care and dressing training",
      "Experience with advanced wound management",
    ],
    pricing: [
      { label: "Bedsore Dressing Visit", price: 500, unit: "per visit" },
      { label: "5 Visits Package", price: 2200, unit: "package" },
      { label: "10 Visits Package", price: 4000, unit: "package" },
    ],
    faqs: [
      {
        question: "Can bedsores be fully healed at home?",
        answer: "Yes, with proper wound care, nutrition, and repositioning, most bedsores can be managed and healed at home. Severe cases (Stage 3 or 4) may require a doctor's evaluation.",
      },
    ],
    relatedSlugs: ["nursing-care", "home-visits", "caretaker-elderly-care"],
    image: "/images/services/bedsore-care.jpeg",
  },
  {
    id: "14",
    slug: "palliative-care",
    title: "Palliative & End-of-Life Care",
    shortTitle: "Palliative Care",
    icon: "Flower2",
    category: "Specialized Care",
    description:
      "Compassionate palliative care focused on comfort, pain management, and dignity for seriously ill patients.",
    longDescription:
      "Our palliative care programme supports patients with serious, life-limiting illnesses. We focus on comfort, pain management, symptom control, and emotional well-being — for both the patient and the family. Our team includes nurses, doctors, and counsellors who work together to ensure that the patient's remaining time is spent with dignity, comfort, and love at home.",
    whoNeedsIt: [
      "Patients with advanced cancer",
      "End-stage organ failure patients",
      "Patients with advanced neurological conditions",
      "Families seeking comfort-focused care at home",
    ],
    whatsIncluded: [
      "Pain and symptom management",
      "Comfort nursing care",
      "Emotional and psychological support",
      "Family counselling and guidance",
      "Coordination with the treating physician",
      "Medication and equipment management",
    ],
    process: [
      "Initial consultation with our palliative care coordinator",
      "Assessment of the patient's needs and family's wishes",
      "Customized care plan with nursing and doctor visits",
      "Ongoing care with 24x7 support line",
      "Regular reviews and plan adjustments",
    ],
    staffQualifications: [
      "Nurses trained in palliative and hospice care",
      "Doctors experienced in pain management",
      "Counsellors for emotional and family support",
    ],
    pricing: [
      { label: "Palliative Nursing (12-Hour)", price: 1400, unit: "per day" },
      { label: "Palliative Nursing (24-Hour)", price: 2400, unit: "per day" },
      { label: "Doctor + Nurse Package", price: 3500, unit: "per visit" },
    ],
    faqs: [
      {
        question: "Is palliative care only for terminal patients?",
        answer: "No, palliative care benefits anyone with a serious illness, regardless of prognosis. It can run alongside curative treatment to manage symptoms and improve quality of life.",
      },
    ],
    relatedSlugs: ["nursing-care", "caretaker-elderly-care", "bedsore-care"],
    image: "/images/services/palliative-care.jpeg",
  },
  {
    id: "15",
    slug: "mother-baby-care",
    title: "Mother & Baby Care",
    shortTitle: "Mother & Baby",
    icon: "Baby",
    category: "Specialized Care",
    description:
      "Post-delivery care for mothers and newborns, including breastfeeding support, baby massage, and recovery assistance.",
    longDescription:
      "The first few weeks after childbirth are precious and demanding. Our trained mother-and-baby care specialists provide postpartum support — from breastfeeding guidance and newborn care to mother's recovery assistance, nutrition planning, and baby massage. We help new mothers rest and recover while ensuring the baby's health and comfort.",
    whoNeedsIt: [
      "New mothers recovering from normal or cesarean delivery",
      "Families needing newborn care support",
      "Mothers experiencing breastfeeding difficulties",
      "Families without immediate support from extended family",
    ],
    whatsIncluded: [
      "Mother's postpartum health monitoring",
      "Breastfeeding support and lactation guidance",
      "Newborn care (bathing, feeding, diaper change)",
      "Baby massage and sponge bath",
      "Cesarean wound care if applicable",
      "Nutrition guidance for the mother",
      "Baby's health and growth monitoring",
    ],
    process: [
      "Book during pregnancy or immediately after delivery",
      "Our care coordinator assesses your needs",
      "A trained caretaker or nurse is assigned",
      "Daily care routine established for mother and baby",
      "Ongoing support for the first 4 to 8 weeks",
    ],
    staffQualifications: [
      "Trained in postpartum and neonatal care",
      "Experience with newborn handling and breastfeeding support",
      "Police verification and background check",
      "First aid and infant CPR trained",
    ],
    pricing: [
      { label: "Day Care (12 Hours)", price: 1200, unit: "per day" },
      { label: "24-Hour Live-In", price: 2000, unit: "per day" },
      { label: "Monthly Package", price: 45000, unit: "per month" },
    ],
    faqs: [
      {
        question: "When should I book mother and baby care?",
        answer: "We recommend booking during the third trimester so we can plan and assign the right caretaker in advance. However, we also accommodate last-minute requests based on availability.",
      },
    ],
    relatedSlugs: ["nursing-care", "home-visits", "doctor-visit-at-home"],
    image: "/images/services/mother-baby.jpeg",
  },
  {
    id: "16",
    slug: "post-discharge-care",
    title: "Post-Discharge & Recovery Care",
    shortTitle: "Post-Discharge",
    icon: "ArrowUpFromLine",
    category: "Specialized Care",
    description:
      "Smooth hospital-to-home transition with nursing, physiotherapy, and monitoring tailored to your recovery plan.",
    longDescription:
      "Coming home from the hospital can feel overwhelming. Our post-discharge care programme ensures a smooth recovery at home by combining nursing visits, physiotherapy, wound care, medication management, and doctor follow-ups into a single, coordinated package. We work closely with your discharging hospital to continue the care plan seamlessly.",
    whoNeedsIt: [
      "Patients discharged after major surgery",
      "ICU step-down patients transitioning to home care",
      "Patients recovering from cardiac events or stroke",
      "Orthopaedic patients needing rehab support at home",
    ],
    whatsIncluded: [
      "Post-discharge nursing visits",
      "Wound care and dressing",
      "Medication management and monitoring",
      "Physiotherapy sessions",
      "Doctor follow-up coordination",
      "Equipment arrangement if needed",
      "Diet and lifestyle guidance",
    ],
    process: [
      "Share the discharge summary before or on the day of discharge",
      "Our coordinator creates a home recovery plan",
      "Nursing, physio, and equipment arranged as per the plan",
      "Coordinated care begins from the day of discharge",
      "Progress tracking and regular reporting to the family",
    ],
    staffQualifications: [
      "Multi-disciplinary team: nurses, physiotherapists, and coordinators",
      "All police-verified and trained",
      "Experience in post-surgical and critical care",
    ],
    pricing: [
      { label: "Basic Package (7 days)", price: 8000, unit: "package" },
      { label: "Standard Package (14 days)", price: 14000, unit: "package" },
      { label: "Comprehensive (30 days)", price: 25000, unit: "package" },
    ],
    faqs: [
      {
        question: "Can you coordinate with my hospital's discharge team?",
        answer: "Yes, we regularly coordinate with hospitals across Delhi NCR to ensure continuity of care. Share the discharge summary with us, and we will plan accordingly.",
      },
    ],
    relatedSlugs: ["nursing-care", "physiotherapy-at-home", "home-visits"],
    image: "/images/services/post-discharge.jpeg",
  },
  {
    id: "17",
    slug: "tracheostomy-care",
    title: "Tracheostomy Care at Home",
    shortTitle: "Tracheostomy",
    icon: "Wind",
    category: "Specialized Care",
    description:
      "Expert tracheostomy tube care, suctioning, and cleaning by ICU-experienced nurses at your home.",
    longDescription:
      "Managing a tracheostomy at home requires skilled nursing care. Our ICU-experienced nurses provide tracheostomy tube cleaning, inner cannula changes, stoma care, suctioning, and caregiver training. We ensure that the patient's airway remains clear, the stoma is healthy, and the family feels confident managing the tracheostomy between nurse visits.",
    whoNeedsIt: [
      "Patients discharged with a tracheostomy tube",
      "Long-term tracheostomy patients",
      "Patients on home ventilators",
      "Caregivers needing tracheostomy management training",
    ],
    whatsIncluded: [
      "Tracheostomy tube cleaning and inner cannula change",
      "Stoma care and skin assessment",
      "Suctioning of secretions",
      "Tube change assistance (with doctor supervision if needed)",
      "Caregiver training on emergency protocols",
    ],
    process: [
      "Share the patient's tracheostomy details and discharge summary",
      "An ICU-experienced nurse is assigned",
      "Regular visits for tube care and suctioning",
      "Caregiver trained on daily maintenance and emergency signs",
      "24x7 phone support for urgent queries",
    ],
    staffQualifications: [
      "GNM or B.Sc. Nursing degree",
      "ICU or critical care experience (minimum 1 year)",
      "Tracheostomy and ventilator care training",
      "Police verification completed",
    ],
    pricing: [
      { label: "Single Visit", price: 600, unit: "per visit" },
      { label: "5 Visits Package", price: 2700, unit: "package" },
      { label: "Daily Nursing (12-Hour)", price: 1400, unit: "per day" },
    ],
    faqs: [
      {
        question: "Can your nurses handle tracheostomy emergencies?",
        answer: "Our nurses are trained in tracheostomy emergency protocols, including tube dislodgement and airway obstruction. They also train caregivers on what to do in an emergency before the nurse or ambulance arrives.",
      },
    ],
    relatedSlugs: ["nursing-care", "rt-tube-care", "medical-equipment"],
    image: "/images/services/tracheostomy.jpeg",
  },
];
