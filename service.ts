export type ServiceCategory = 'Cosmetic' | 'Implants' | 'Family Care' | 'Emergency Care' | 'Orthodontics' | 'General';

export interface ServiceModel {
  id: number;
  title: string;
  slug: string;
  category: string;
  short_description?: string;
  description: string;
  duration_minutes: number;
  price_range: string;
  icon_name?: string;
  highlights?: string[];
  recommended_for?: string;
  tech_used?: string;
  is_popular?: boolean;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceCreatePayload {
  title: string;
  slug?: string;
  category: string;
  short_description?: string;
  description: string;
  duration_minutes: number;
  price_range: string;
  icon_name?: string;
  highlights?: string[];
  recommended_for?: string;
  tech_used?: string;
  is_popular?: boolean;
  is_active?: boolean;
  sort_order?: number;
}
