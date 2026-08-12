export interface WebsiteSettingModel {
  id: number;
  key: string;
  value: string;
  type: string;
  group: string;
  description?: string;
  is_public: boolean;
  created_at?: string;
  updated_at?: string;
}

export type WebsiteSettingsMap = Record<string, string>;
