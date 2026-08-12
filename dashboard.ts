import { AppointmentModel } from './appointment';

export interface DashboardStats {
  total_appointments: number;
  pending_appointments: number;
  confirmed_appointments: number;
  completed_appointments: number;
  cancelled_appointments: number;
  today_appointments: number;
  upcoming_appointments: number;
  total_patients: number;
  new_patients_this_month: number;
  unread_messages: number;
  active_services: number;
  total_testimonials: number;
  published_gallery_items: number;
  recent_appointments: AppointmentModel[];
}

export interface AppointmentAnalytics {
  total: number;
  by_status: Record<string, number>;
  by_month: Record<string, number>;
}

export interface ServiceAnalyticsItem {
  service_id: number;
  service: string;
  category: string;
  appointments: number;
}
