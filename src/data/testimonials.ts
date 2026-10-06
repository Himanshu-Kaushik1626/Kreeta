/* ------------------------------------------------------------------ *
 *  Testimonials data                                                   *
 * ------------------------------------------------------------------ */

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Noida",
    service: "Nursing Care",
    rating: 5,
    text: "My father had a hip replacement surgery, and the nurse Kreeta sent was outstanding. She was punctual, gentle, and knew exactly how to manage post-operative care. Our entire family felt at ease knowing a professional was taking care of him.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Delhi",
    service: "Elderly Care",
    rating: 5,
    text: "We hired a caretaker for my mother-in-law who has Alzheimer's. The caretaker is patient, trained, and treats her with so much respect. For the first time in months, we are sleeping peacefully at night.",
  },
  {
    id: "3",
    name: "Anand Gupta",
    location: "Gurgaon",
    service: "Physiotherapy",
    rating: 5,
    text: "After my knee replacement, the physiotherapist from Kreeta helped me walk again in just three weeks. The sessions were thorough, and she adjusted the exercises based on my progress each day.",
  },
  {
    id: "4",
    name: "Sunita Verma",
    location: "Greater Noida",
    service: "Medical Equipment",
    rating: 4,
    text: "We needed an oxygen concentrator urgently at midnight. Kreeta delivered it within 2 hours with full setup and demonstration. Their support during a stressful time was exceptional.",
  },
  {
    id: "5",
    name: "Dr. Vikram Mehta",
    location: "Faridabad",
    service: "Lab Tests",
    rating: 5,
    text: "I recommend Kreeta to my patients for home lab tests. Their phlebotomists are professional, the reports are accurate, and the turnaround time is impressive. A reliable partner for home diagnostics.",
  },
  {
    id: "6",
    name: "Neha Agarwal",
    location: "Ghaziabad",
    service: "Mother & Baby Care",
    rating: 5,
    text: "After my C-section, the mother-baby caretaker from Kreeta was a lifesaver. She helped with breastfeeding, baby baths, and even my wound care. I could actually rest and recover.",
  },
  {
    id: "7",
    name: "Mohan Tiwari",
    location: "Noida",
    service: "Injection & IV Drip",
    rating: 5,
    text: "My wife needed IV antibiotics for five days. The nurse came every day on time, administered the drip carefully, and stayed until it was complete. Very professional service.",
  },
  {
    id: "8",
    name: "Kavita Singh",
    location: "Delhi",
    service: "Post-Discharge Care",
    rating: 5,
    text: "When my father was discharged from AIIMS after heart surgery, Kreeta arranged everything — nurse, medicines, equipment, and even a doctor follow-up at home. The transition was seamless.",
  },
];
