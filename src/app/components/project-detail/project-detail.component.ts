import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SafeUrlPipe],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectsService.getProjectById(+id).subscribe(project => {
        this.project = project;
      });
    }
  }

  nextImage() {
    if (this.project && this.project.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  prevImage() {
    if (this.project && this.project.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }
}

