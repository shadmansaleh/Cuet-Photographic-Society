export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export interface User {
  id: string;
  email: string;
  name: string;
  bio?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
}

export interface Photo {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  user_id: string;
  votes: number;
  created_at: string;
}

export interface Exhibition {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  start_date: string;
  end_date: string;
  status: "upcoming" | "active" | "past";
  created_at: string;
}

export interface ExhibitionPhoto {
  id: string;
  exhibition_id: string;
  photo_id: string;
  selected: boolean;
  created_at: string;
}
