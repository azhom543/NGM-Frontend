import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  currentYear = new Date().getFullYear();
  
  // Social media links - update these with your actual URLs
  socialLinks = {
    instagram: 'https://www.instagram.com/notgrandmas',
    twitter: 'https://twitter.com/notgrandmas',
    facebook: 'https://www.facebook.com/notgrandmas',
    vimeo: 'https://vimeo.com/notgrandmas'
  };

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}

