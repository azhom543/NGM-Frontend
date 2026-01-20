import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
