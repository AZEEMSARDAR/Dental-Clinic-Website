export interface TestimonialModel {
  id: number;
  patient_name: string;
  treatment: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  is_featured: boolean;
  avatar_url?: string;
  location?: string;
  doctor_name?: string;
  created_at?: string;
  updated_at?: string;
}

export interface TestimonialCreatePayload {
  patient_name: string;
  treatment: string;
  rating: number;
  comment: string;
  avatar_url?: string;
  location?: string;
  doctor_name?: string;
  is_approved?: boolean;
  is_featured?: boolean;
}
