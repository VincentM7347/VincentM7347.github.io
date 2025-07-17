import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Technology {
  name: string;
  iconPath: string;
}

export interface Project {
  title: string;
  description: string;
  shortDescription: string;
  architecture: string[];
  coreFeatures: string[];
  imageUrl: string;
  screenshots: string[];
  screencastUrl: string | null;
  technologies: Technology[];
  liveUrl: string | null;
  githubUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'assets/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProjectByTitle(title: string): Observable<Project | undefined> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      map(projects => projects.find(project => project.title === title))
    );
  }
}
