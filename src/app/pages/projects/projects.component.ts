import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
    title: 'Project One',
    description: 'Eine kurze Beschreibung des ersten Projekts.',
    link: '#', // Link zum Projekt
    image: 'assets/images/project1.jpg', // Pfad zu deinem Bild
    technologies: ['Angular', 'TypeScript', 'Bootstrap']
  },
    {
      title: 'Projekt Beta',
      description: 'Ein Backend-Service für eine mobile App, geschrieben in Java mit Spring Boot.',
      imageUrl: 'assets/images/projekt-beta.jpg',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      liveUrl: null,
      githubUrl: 'https://github.com/dein-name/projekt-beta'
    }
  ];
}