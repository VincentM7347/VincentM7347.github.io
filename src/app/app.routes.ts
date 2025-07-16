import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:title', component: ProjectDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'impressum', component: ImpressumComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' } 
];
