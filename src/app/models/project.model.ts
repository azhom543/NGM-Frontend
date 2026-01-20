export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  images: string[];
  videos?: string[];
  thumbnail: string;
  year: number;
  client?: string;
}

