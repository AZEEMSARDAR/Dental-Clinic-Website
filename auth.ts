export type AdminRole = 'super_admin' | 'dentist' | 'receptionist';

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: AdminRole;
  phone?: string;
  title?: string;
  bio?: string;
  is_active: boolean;
  last_login_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  access_token: string;
  token_type: string;
  user: AdminUser;
}
