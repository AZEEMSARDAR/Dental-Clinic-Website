export interface ContactMessageModel {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  is_read: boolean;
  replied_at?: string;
  reply_message?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ContactCreatePayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ReplyMessagePayload {
  reply_message: string;
}
