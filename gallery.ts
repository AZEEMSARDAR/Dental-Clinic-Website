export interface GalleryItemModel {
  id: number;
  title: string;
  category: string;
  before_image_url: string;
  after_image_url: string;
  story?: string;
  treatment_duration?: string;
  doctor_name?: string;
  is_published: boolean;
  sort_order?: number;
  created_at?: string;
  updated_at?: string;
}

export interface GalleryCreatePayload {
  title: string;
  category: string;
  before_image_url: string;
  after_image_url: string;
  story?: string;
  treatment_duration?: string;
  doctor_name?: string;
  is_published?: boolean;
  sort_order?: number;
}
