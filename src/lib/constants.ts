/* ------------------------------------------------------------------ *
 *  Business-wide constants for Kreeta Nursing Service                 *
 * ------------------------------------------------------------------ */

export const SITE_NAME = "Kreeta Nursing Service";
export const TAGLINE = "Trusted Healthcare, At Your Doorstep";

export const PHONE = "8865888772";
export const PHONE_RAW = "8865888772";
export const WHATSAPP_PHONE = "918865888772";
export const EMAIL = "info@kreetanursingservice.com";

export const ADDRESS = {
  line1: "SF-214, 2nd Floor, Gaur City Center",
  line2: "Near DTDC, Sector 4, Noida Extension",
  city: "Greater Noida West",
  state: "Uttar Pradesh",
  pin: "201318",
  full: "SF-214, 2nd Floor, Gaur City Center, Near DTDC, Sector 4, Noida Ext., 201318",
};

export const OFFICE_HOURS = "24x7 Service | Office: 9 AM – 7 PM";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;
export const WHATSAPP_MSG = (service?: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hi Kreeta Nursing Service, I need help with ${service || "your services"}. Please contact me.`
  )}`;

export const CITIES = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Gurgaon",
  "Faridabad",
  "Ghaziabad",
] as const;

export type City = (typeof CITIES)[number];

export const CITY_SLUGS: Record<City, string> = {
  Delhi: "delhi",
  Noida: "noida",
  "Greater Noida": "greater-noida",
  Gurgaon: "gurgaon",
  Faridabad: "faridabad",
  Ghaziabad: "ghaziabad",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/14yc4WfSNnU/",
  instagram: "https://www.instagram.com/kreetanursingservice?stkn=YWFwd280azk5aTc1",
};

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.44!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGaur+City+Center!5e0!3m2!1sen!2sin!4v1";
