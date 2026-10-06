/* ------------------------------------------------------------------ *
 *  FAQ data for the home page and service pages                       *
 * ------------------------------------------------------------------ */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "How quickly can you send a nurse or caretaker?",
    answer:
      "For standard requests, we deploy trained staff within 2 to 4 hours across Delhi NCR. For urgent requirements, we have a fast-track process that can arrange a nurse within 1 to 2 hours, subject to availability.",
    category: "General",
  },
  {
    id: "2",
    question: "Are your nurses and caretakers police-verified?",
    answer:
      "Yes, every member of our team undergoes a thorough police verification and background check before deployment. We also verify their educational certificates, work experience, and references.",
    category: "Trust & Safety",
  },
  {
    id: "3",
    question: "What happens if we are not satisfied with the assigned staff?",
    answer:
      "We offer a replacement guarantee. If you are not comfortable with the assigned nurse or caretaker for any reason, contact us and we will arrange a replacement within 24 hours at no additional cost.",
    category: "General",
  },
  {
    id: "4",
    question: "Do you provide services on weekends and holidays?",
    answer:
      "Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Our services are available on weekends, public holidays, and even during late-night hours.",
    category: "General",
  },
  {
    id: "5",
    question: "How do I pay for your services?",
    answer:
      "We accept payments via UPI, debit/credit cards, net banking, and cash. For recurring services, we offer monthly billing with multiple payment options. Equipment rentals require a refundable security deposit.",
    category: "Payments",
  },
  {
    id: "6",
    question: "Can I book a nurse for just a few hours?",
    answer:
      "Yes, we offer flexible booking options. You can book a nurse for a minimum of 4 hours for specific procedures or short-duration care. For home visits like injections or dressing, single visits of 30 to 60 minutes are available.",
    category: "Booking",
  },
  {
    id: "7",
    question: "Do you serve areas outside Delhi NCR?",
    answer:
      "Currently, our services cover Delhi, Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad. We are expanding to other cities soon. Enter your pincode on our website to check service availability in your area.",
    category: "Coverage",
  },
  {
    id: "8",
    question: "Is my medical information kept confidential?",
    answer:
      "Absolutely. We follow strict data privacy practices and store only the minimum medical information needed to provide care. Our staff is trained in patient confidentiality, and all data is handled in compliance with applicable laws.",
    category: "Trust & Safety",
  },
  {
    id: "9",
    question: "Can your nurses handle critical or ICU patients at home?",
    answer:
      "Yes, we have ICU-trained nurses experienced in managing ventilator patients, tracheostomy care, and critical monitoring at home. These nurses are specifically assigned based on the patient's condition and requirements.",
    category: "Clinical",
  },
  {
    id: "10",
    question: "Do you provide medical equipment along with nursing services?",
    answer:
      "Yes, we offer a complete home care solution. Along with nursing and caretaker services, we provide medical equipment on rent and sale — including hospital beds, oxygen concentrators, BiPAP machines, and more. Everything can be arranged through a single booking.",
    category: "Equipment",
  },
];
