export type Link = {
  text: string;
  href: string;
  active?: boolean;
};

export const About: Link[] = [
  { text: "Contact us", href: "/contact" },
  { text: "About us", href: "/about" },
  { text: "Careers", href: "/career", active: true },
  { text: "Our Blog", href: "/blog" },
  { text: "FAQs", href: "/faq" },
  { text: "Delivery Information", href: "/", active: true },
  { text: "Terms & Conditions", href: "/terms" },
];

export const Buying: Link[] = [
  { text: "Buy safety center ", href: "/contact" },
  { text: "FAQs", href: "/faq" },
  { text: "Delivery", href: "/delivery", active: true },
  { text: "Digital Services", href: "/digitalservices" },
  { text: "Cookies", href: "/cookies" },
  { text: "Bulk Purchase", href: "/", active: true },
];
export const MoreInfo: Link[] = [
  { text: "Cookies", href: "/cookies" },
  { text: "Track My Order", href: "/about" },
  { text: "Privacy Policy", href: "/privacy", active: true },
  { text: "Authentic Items Policy", href: "/authentic" },
  { text: "Terms & Conditions", href: "/terms" },
];
