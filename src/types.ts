export interface NavLink {
  label: string;
  href: string;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  icon: string;
  benefits: string[];
}

export interface BookingForm {
  name: string;
  email: string;
  organization: string;
  date: string;
  timeSlot: string;
  purpose: string;
}
