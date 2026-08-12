export type ServiceCategory = 'All' | 'Cosmetic' | 'Implants' | 'Family Care' | 'Emergency Care';

export interface DentalService {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  shortDesc: string;
  duration: string;
  priceRange: string;
  iconName: string;
  highlights: string[];
  recommendedFor: string;
  techUsed: string;
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experienceYears: number;
  bio: string;
  specialty: string;
  image: string;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  education: string[];
  quote: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  location: string;
  doctorName: string;
  avatarUrl: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  treatmentDays: string;
  doctorName: string;
  beforeImg: string;
  afterImg: string;
  story: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  iconName: string;
  badge: string;
}

export interface BookingData {
  serviceId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  patientName: string;
  phone: string;
  email: string;
  notes: string;
  isEmergency: boolean;
}
