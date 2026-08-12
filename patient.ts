import { AppointmentModel } from './appointment';

export interface PatientModel {
  id: number;
  first_name: string;
  last_name: string;
  patient_name?: string;
  email: string;
  phone: string;
  date_of_birth?: string;
  gender?: string;
  address?: string;
  medical_history?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  appointments_count?: number;
  appointments?: AppointmentModel[];
}

export interface PatientCreatePayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth?: string;
  gender?: string;
  address?: string;
  medical_history?: string;
  notes?: string;
}
