import { PatientModel } from './patient';
import { ServiceModel } from './service';

export type AppointmentStatus = 'pending' | 'confirmed' | 'rescheduled' | 'completed' | 'cancelled';

export interface AppointmentModel {
  id: number;
  appointment_number: string;
  patient_id: number;
  service_id: number;
  preferred_date: string;
  preferred_time: string;
  status: AppointmentStatus;
  notes?: string;
  is_emergency: boolean;
  cancelled_reason?: string;
  confirmed_at?: string;
  completed_at?: string;
  created_at?: string;
  updated_at?: string;
  patient?: PatientModel;
  service?: ServiceModel;
}

export interface BookingPayload {
  service_id: number;
  preferred_date: string;
  preferred_time: string;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  notes?: string;
  is_emergency?: boolean;
}

export interface AvailableSlot {
  time: string;
  formatted_time: string;
  is_available: boolean;
}
