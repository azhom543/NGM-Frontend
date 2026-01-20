import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity redesign for a luxury fashion brand',
      fullDescription: 'We created a comprehensive brand identity system that included logo design, color palette, typography, and brand guidelines. The project involved extensive research into the target market and competitor analysis to ensure the brand stood out in the luxury fashion space.',
      images: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800'
      ],
      videos: [],
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      year: 2024,
      client: 'Luxury Fashion Co.'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with seamless user experience',
      fullDescription: 'Developed a full-stack e-commerce platform with advanced features including product filtering, shopping cart, payment integration, and admin dashboard. The platform was built with performance and user experience as top priorities.',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
      ],
      videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      year: 2024,
      client: 'Retail Solutions Inc.'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Viral social media campaign reaching millions of impressions',
      fullDescription: 'Designed and executed a multi-platform social media campaign that generated over 10 million impressions and significantly increased brand awareness. The campaign included video content, graphics, and influencer partnerships.',
      images: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        'https://images.unsplash.com/photo-1611162616305-c69b3c7b5c2f?w=800'
      ],
      videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
      year: 2023,
      client: 'Tech Startup'
    },
    {
      id: 4,
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Intuitive mobile app design for fitness tracking',
      fullDescription: 'Created a comprehensive mobile app design system focusing on user experience and accessibility. The design process included user research, wireframing, prototyping, and user testing to ensure optimal usability.',
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800'
      ],
      videos: [],
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
      year: 2023,
      client: 'Fitness App Co.'
    }
  ];

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }
}

