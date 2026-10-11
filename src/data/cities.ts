/* ------------------------------------------------------------------ *
 *  City data for landing pages and the city selector                  *
 * ------------------------------------------------------------------ */

export interface CityArea {
  name: string;
  popular?: boolean;
}

export interface CityData {
  name: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  areas: CityArea[];
  localTestimonial?: {
    name: string;
    text: string;
    service: string;
  };
}

export const cities: CityData[] = [
  {
    name: "Delhi",
    slug: "delhi",
    heroTitle: "Home Healthcare & Nursing Services in Delhi",
    heroDescription:
      "Kreeta Nursing Service brings trusted, professional healthcare to your doorstep across Delhi. From trained nurses and caretakers to physiotherapy, lab tests, and medical equipment — we are here for your family, 24 hours a day.",
    metaTitle: "Home Nursing Services in Delhi | Nurse at Home Delhi | Kreeta",
    metaDescription:
      "Book qualified nurses, caretakers, physiotherapists, and medical equipment at home in Delhi. 24x7 availability. Police-verified staff. Call 8865888772.",
    areas: [
      { name: "South Delhi", popular: true },
      { name: "Dwarka", popular: true },
      { name: "Rohini" },
      { name: "Pitampura" },
      { name: "Janakpuri" },
      { name: "Lajpat Nagar" },
      { name: "Saket" },
      { name: "Vasant Kunj" },
      { name: "Karol Bagh" },
      { name: "Rajouri Garden" },
      { name: "Nehru Place" },
      { name: "East Delhi" },
      { name: "Mayur Vihar" },
      { name: "Preet Vihar" },
      { name: "Shahdara" },
      { name: "Civil Lines" },
    ],
    localTestimonial: {
      name: "Arun Khanna",
      text: "Kreeta provided excellent nursing care for my mother in South Delhi after her knee surgery. The nurse was professional, caring, and always on time. Highly recommended for anyone in Delhi.",
      service: "Nursing Care",
    },
  },
  {
    name: "Noida",
    slug: "noida",
    heroTitle: "Home Healthcare & Nursing Services in Noida",
    heroDescription:
      "Serving every sector of Noida with qualified nurses, experienced caretakers, and comprehensive home healthcare. We understand the fast-paced life here — our services are designed to fit your schedule.",
    metaTitle: "Home Nursing Services in Noida | Nurse at Home Noida | Kreeta",
    metaDescription:
      "Book trained nurses, caretakers, physiotherapy, and medical equipment at home in Noida. 24x7 service. Verified staff. Call 8865888772.",
    areas: [
      { name: "Sector 18", popular: true },
      { name: "Sector 62", popular: true },
      { name: "Sector 50" },
      { name: "Sector 44" },
      { name: "Sector 75" },
      { name: "Sector 76" },
      { name: "Sector 93" },
      { name: "Sector 104" },
      { name: "Sector 110" },
      { name: "Sector 119" },
      { name: "Sector 128" },
      { name: "Sector 135" },
      { name: "Sector 137" },
      { name: "Sector 142" },
      { name: "Sector 150" },
      { name: "Sector 168" },
    ],
    localTestimonial: {
      name: "Meera Joshi",
      text: "Living in Sector 75, finding reliable home care was a challenge until we found Kreeta. Their caretaker has been with us for three months now, and our grandmother looks forward to seeing her every day.",
      service: "Elderly Care",
    },
  },
  {
    name: "Greater Noida",
    slug: "greater-noida",
    heroTitle: "Home Healthcare & Nursing Services in Greater Noida",
    heroDescription:
      "From Gaur City to Pari Chowk, Kreeta Nursing Service delivers professional healthcare at home across Greater Noida. Our trained staff is just a call away, day or night.",
    metaTitle: "Home Nursing Services in Greater Noida | Kreeta Nursing Service",
    metaDescription:
      "Professional home nursing, caretaker, physiotherapy, and equipment rental services in Greater Noida. 24x7. Police-verified. Call 8865888772.",
    areas: [
      { name: "Gaur City", popular: true },
      { name: "Pari Chowk", popular: true },
      { name: "Alpha", popular: true },
      { name: "Beta" },
      { name: "Gamma" },
      { name: "Delta" },
      { name: "Omicron" },
      { name: "Eta" },
      { name: "Zeta" },
      { name: "Phi" },
      { name: "Chi" },
      { name: "Knowledge Park" },
      { name: "Surajpur" },
      { name: "Kasna" },
      { name: "Techzone 4" },
      { name: "Sector 1-12" },
    ],
    localTestimonial: {
      name: "Sunil Yadav",
      text: "We needed an oxygen concentrator and a nurse urgently in Gaur City. Kreeta delivered both within 3 hours. Their local presence in Greater Noida makes a real difference.",
      service: "Equipment & Nursing",
    },
  },
  {
    name: "Gurgaon",
    slug: "gurgaon",
    heroTitle: "Home Healthcare & Nursing Services in Gurgaon",
    heroDescription:
      "From DLF to Sohna Road, Kreeta brings hospital-quality care to your Gurgaon home. Our nurses, therapists, and care coordinators are available around the clock.",
    metaTitle: "Home Nursing Services in Gurgaon | Nurse at Home Gurugram | Kreeta",
    metaDescription:
      "Book qualified nurses, physiotherapy, elderly care, and medical equipment at home in Gurgaon. 24x7 availability. Call 8865888772.",
    areas: [
      { name: "DLF Phase 1-5", popular: true },
      { name: "Sohna Road", popular: true },
      { name: "Golf Course Road", popular: true },
      { name: "Sector 56-57" },
      { name: "Sector 49" },
      { name: "MG Road" },
      { name: "Udyog Vihar" },
      { name: "Nirvana Country" },
      { name: "South City" },
      { name: "Palam Vihar" },
      { name: "Manesar" },
      { name: "New Gurgaon (Sectors 76-95)" },
    ],
    localTestimonial: {
      name: "Rekha Malhotra",
      text: "Finding a good physiotherapist in Gurgaon is hard, but Kreeta matched us with an excellent one who helped my husband recover from his spinal surgery in just six weeks.",
      service: "Physiotherapy",
    },
  },
  {
    name: "Faridabad",
    slug: "faridabad",
    heroTitle: "Home Healthcare & Nursing Services in Faridabad",
    heroDescription:
      "Quality home healthcare is now accessible across Faridabad. Whether you live in NIT, Sector 15, or Ballabgarh — Kreeta's trained nursing staff is ready to help.",
    metaTitle: "Home Nursing Services in Faridabad | Kreeta Nursing Service",
    metaDescription:
      "Trusted home nursing, caretaker, and physiotherapy services in Faridabad. Medical equipment on rent. 24x7. Call 8865888772.",
    areas: [
      { name: "NIT Faridabad", popular: true },
      { name: "Sector 15", popular: true },
      { name: "Sector 16" },
      { name: "Sector 21" },
      { name: "Sector 28" },
      { name: "Sector 37" },
      { name: "Sector 46" },
      { name: "Sector 81-89" },
      { name: "Ballabgarh" },
      { name: "Surajkund" },
      { name: "Old Faridabad" },
      { name: "Badarpur Border" },
    ],
    localTestimonial: {
      name: "Dinesh Chauhan",
      text: "The caretaker Kreeta sent for my bedridden father in NIT Faridabad has been nothing short of wonderful. She manages his feeding, hygiene, and even keeps him cheerful. We are grateful.",
      service: "Caretaker",
    },
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad",
    heroTitle: "Home Healthcare & Nursing Services in Ghaziabad",
    heroDescription:
      "From Indirapuram to Vaishali, Kreeta Nursing Service delivers professional, compassionate home care across Ghaziabad. Our verified team is available 24x7.",
    metaTitle: "Home Nursing Services in Ghaziabad | Kreeta Nursing Service",
    metaDescription:
      "Book home nurses, caretakers, physiotherapy, and medical equipment in Ghaziabad. 24x7 service. Verified staff. Call 8865888772.",
    areas: [
      { name: "Indirapuram", popular: true },
      { name: "Vaishali", popular: true },
      { name: "Vasundhara", popular: true },
      { name: "Kaushambi" },
      { name: "Raj Nagar Extension" },
      { name: "Crossings Republik" },
      { name: "Loni" },
      { name: "Sahibabad" },
      { name: "Mohan Nagar" },
      { name: "Shalimar Garden" },
      { name: "Govindpuram" },
      { name: "NH-24 Corridor" },
    ],
    localTestimonial: {
      name: "Pooja Rastogi",
      text: "We booked a nurse from Kreeta for my grandmother in Indirapuram. The nurse was well-trained, polite, and managed my grandmother's diabetes care perfectly. Will definitely use their services again.",
      service: "Nursing Care",
    },
  },
];
