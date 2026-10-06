/* ------------------------------------------------------------------ *
 *  Original healthcare blog articles for Kreeta Nursing Service      *
 * ------------------------------------------------------------------ */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "how-to-choose-home-nurse-delhi-ncr",
    title: "How to Choose the Right Home Nurse in Delhi NCR: A Complete Family Guide",
    excerpt:
      "Bringing medical personnel into your home requires trust, credential checks, and clinical matching. Here is what families in Delhi, Noida, and Gurgaon must verify before hiring.",
    content: `When a loved one is discharged from a hospital or requires round-the-clock medical attention, finding a qualified and compassionate home nurse is one of the most critical decisions a family will make. With hundreds of unverified local agencies operating across Delhi NCR, making an informed choice is essential to ensure patient safety and peace of mind.

### 1. Verify Professional Nursing Qualifications
There is a vast difference between a certified nurse and a patient attendant. A Registered Staff Nurse holds a diploma in General Nursing and Midwifery (GNM) or a Bachelor of Science in Nursing (B.Sc Nursing), registered with the State Nursing Council or Indian Nursing Council. For clinical procedures like IV cannulation, catheter care, tracheostomy suctioning, and wound dressing, you strictly require a qualified GNM or B.Sc nurse.

### 2. Demand 100% Police Verification & Identity Checks
Since a healthcare worker will spend 12 to 24 hours daily inside your private residence with vulnerable elderly family members, security is paramount. Professional home healthcare providers like Kreeta conduct stringent police background verification, Aadhaar authentication, and permanent address checks before any staff deployment.

### 3. Ensure Continuous Clinical Supervision
A reliable nursing agency doesn't simply place a nurse and step back. There must be an active care coordinator and clinical supervisor conducting weekly phone audits, reviewing vitals charts, and ensuring medical protocols set by your treating doctor are maintained.

### 4. Understand Replacement & Emergency Continuity
Caregivers may fall ill or require urgent personal leave. Ensure the agency offers a guaranteed replacement timeline within 12 to 24 hours so your patient's medication and hygiene routines are never interrupted.

At Kreeta Nursing Service, our team of verified nurses serves families across Noida, Greater Noida, Delhi, Gurgaon, Faridabad, and Ghaziabad with dedicated supervisor oversight.`,
    category: "Elderly Care",
    author: "Dr. Ananya Sen",
    authorRole: "Senior Clinical Advisor",
    publishedDate: "September 24, 2026",
    readTime: "5 min read",
    tags: ["Home Nursing", "Elderly Care", "Delhi NCR Healthcare", "Patient Safety"],
  },
  {
    id: "blog-2",
    slug: "post-surgical-care-at-home-guide",
    title: "Post-Surgical Care at Home: Essential Steps for a Smooth Recovery",
    excerpt:
      "From hip replacements to cardiac bypass discharges, discover how structured home nursing prevents hospital readmissions and speeds healing.",
    content: `The first two weeks following major surgery represent the most vulnerable window for surgical site infections, medication errors, and mobility setbacks. Transitioning safely from the tertiary hospital to the comfort of your home requires structured planning and clinical nursing assistance.

### Preventing Surgical Site Infections (SSI)
Surgical dressings must be inspected and changed using strict aseptic techniques. Qualified home nurses monitor wound edges for redness, swelling, unusual discharge, or localized heat, alerting the operating surgeon before a minor infection becomes critical.

### Pain Management & Medication Compliance
Post-operative pain regimens often combine oral analgesics, anticoagulant blood thinners, and antibiotics with precise timing. A trained nurse ensures that dosages, intervals, and side effects like dizziness or nausea are meticulously managed.

### Early Mobilization with Physiotherapy
Prolonged bed rest post-surgery dramatically increases the risk of deep vein thrombosis (DVT) and pulmonary embolism. Under professional supervision, gradual assisted walking, ankle pumps, and breathing exercises help restore mobility while preventing blood clots.

### When to Seek Immediate Attention
Notify your home care nurse or doctor immediately if you notice:
- Body temperature exceeding 100.4°F (38°C)
- Sudden shortness of breath or persistent chest discomfort
- Increasing pain unresponsive to prescribed painkillers
- Fresh blood soaking through surgical dressings

Kreeta Nursing Service provides specialized post-op surgical nursing and portable medical equipment across Delhi NCR to support your family through every milestone of healing.`,
    category: "Post-Operative",
    author: "Sister Sunita Rawat",
    authorRole: "Head Nursing Supervisor",
    publishedDate: "September 18, 2026",
    readTime: "6 min read",
    tags: ["Post-Surgery", "Wound Care", "Home Recovery", "Physiotherapy"],
  },
  {
    id: "blog-3",
    slug: "home-icu-setup-vs-hospital-stay",
    title: "Home ICU Setup vs Extended Hospital Stay: Cost, Safety & Comfort",
    excerpt:
      "A comprehensive comparison of long-term intensive care at home versus hospital ICU for chronic, comatose, and respiratory recovery patients.",
    content: `When a critically ill patient is medically stabilized but remains dependent on mechanical ventilation, tracheostomy suctioning, or BiPAP support, staying indefinitely in a hospital ICU can place enormous financial and psychological strain on the family. Setting up an ICU at home has emerged as a humane, sterile, and cost-effective alternative.

### The Cost Comparison
Hospital ICU stays in Delhi NCR typically range between ₹25,000 to ₹75,000 per day. In contrast, a comprehensive Home ICU setup with 24x7 critical care nurses, motorized hospital bed, ventilator or BiPAP, suction machine, oxygen concentrator, and multi-para monitor costs approximately 60% to 70% less over a monthly duration.

### Reduction in Hospital-Acquired Infections (HAI)
Tertiary hospital ICUs house multidrug-resistant pathogens (such as MRSA and Pseudomonas). Transitioning a chronic tracheostomy or stroke patient to a sanitized, private home environment significantly lowers exposure to opportunistic hospital-acquired superbugs.

### Psychological & Emotional Benefits
Being surrounded by family, familiar home voices, and comfortable surroundings provides profound cognitive stimulation for neurological and geriatric recovery.

### What is Required for a Safe Home ICU?
1. **Certified Critical Care Nurses:** Experienced in ventilator circuit management, emergency resuscitation, and arterial line monitoring.
2. **Dedicated Power Backup:** Uninterrupted power supply (inverter / generator) for life support equipment.
3. **Daily Doctor Tele-consultation:** Regular assessment of blood gases, vitals trends, and medication titration.

Kreeta Nursing Service supplies end-to-end home ICU setups with rapid 2-4 hour delivery and biomedical calibration across Noida, Greater Noida, and Delhi NCR.`,
    category: "Critical Care",
    author: "Dr. Ananya Sen",
    authorRole: "Senior Clinical Advisor",
    publishedDate: "September 10, 2026",
    readTime: "7 min read",
    tags: ["Home ICU", "Critical Care", "Ventilator Support", "Cost Comparison"],
  },
  {
    id: "blog-4",
    slug: "preventing-bed-sores-bedridden-patients",
    title: "Preventing Bed Sores in Bedridden Patients: The Essential Protocol",
    excerpt:
      "Decubitus ulcers can develop in as little as 2 hours. Learn how alternating pressure air mattresses, 2-hourly turning, and skin barrier creams safeguard bedridden elders.",
    content: `For patients recovering from a debilitating stroke, spinal injury, or advanced dementia, immobility presents a silent danger: pressure ulcers, commonly known as bedsores. Once a bedsore advances beyond Stage 1 (skin breakdown), healing can take months and lead to dangerous systemic infections like sepsis.

### Why Do Bed Sores Occur?
Constant pressure over bony prominences (sacrum, hips, heels, elbows, and shoulder blades) compresses local capillaries, starving tissue cells of oxygen and blood flow. Friction from sliding on sheets and moisture from incontinence accelerate this breakdown.

### The Golden 2-Hour Repositioning Rule
A bedridden patient must be repositioned at least every 2 hours throughout the day and night. Alternating between left lateral, supine, and right lateral positions using supportive foam pillows relieves pressure spots.

### The Critical Role of Alternating Air Mattresses
Standard mattresses concentrate body weight. An alternating pressure air mattress contains interconnected motorized air cells that inflate and deflate cyclically, shifting pressure points automatically 24 hours a day.

### Nutrition and Hydration
Adequate protein intake (eggs, lentils, protein supplements) and proper hydration are fundamental. Collagen synthesis and wound repair stall dramatically if the patient is protein-deficient.

Our trained General Duty Assistants (GDA) and nurses at Kreeta receive rigorous training in decubitus prevention, staging, and aseptic wound care to ensure your family member remains safe and pain-free.`,
    category: "Geriatric Nursing",
    author: "Sister Sunita Rawat",
    authorRole: "Head Nursing Supervisor",
    publishedDate: "August 29, 2026",
    readTime: "5 min read",
    tags: ["Bed Sores", "Elderly Care", "Air Mattress", "GDA Care"],
  },
];
