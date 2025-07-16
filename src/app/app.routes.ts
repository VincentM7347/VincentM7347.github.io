import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'projects/:title', component: ProjectDetailComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } 
];