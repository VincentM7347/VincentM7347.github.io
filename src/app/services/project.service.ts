import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects = [
    {
      title: 'Notely',
      description: 'Eine kompakte Notiz-App. Sie ermöglicht das Erstellen, Bearbeiten und Löschen von Notizen, die direkt zur schnellen Wiederverwendung im lokalen Speicher des Browsers gesichert werden.',
      longDescription: 'Notely ist eine benutzerfreundliche Notizanwendung, die entwickelt wurde, um das Festhalten und Verwalten von Ideen zu vereinfachen. Mit einer klaren und intuitiven Benutzeroberfläche können Benutzer schnell Notizen erstellen, bearbeiten und wieder löschen. Alle Notizen werden im lokalen Speicher des Browsers gespeichert, was einen schnellen und offline-fähigen Zugriff ermöglicht. Die App ist mit Vue.js und Vue Router aufgebaut und bietet eine reaktionsschnelle und dynamische Benutzererfahrung.',
      imageUrl: 'assets/Notely.png',
      screenshots: [
        'assets/Notely.png',
        'assets/Notely-screenshot2.png'
      ],
      screencastUrl: null,
      technologies: ['Vue.js', 'Vue Router', 'JavaScript', 'CSS', 'Local Storage'],
      liveUrl: 'https://vincentm7347.github.io/vue-notes-app/',
      githubUrl: 'https://github.com/VincentM7347/vue-notes-app' 
    },
    {
      title: 'Cactus Diary',
      description: 'Cactus Diary ist eine umfassende Tagebuchanwendung, die Benutzern einen sicheren und personalisierten Raum für ihre Gedanken bietet.',
      longDescription: 'Cactus Diary ist eine umfassende Tagebuchanwendung, die Benutzern einen sicheren und personalisierten Raum für ihre Gedanken bietet. Die App verfügt über eine vollständige Benutzerauthentifizierung, mit der Benutzer ihre Einträge privat halten können. Benutzer können ihre Einträge mit Emotionen und Bildern anreichern und sie in einem übersichtlichen Dashboard verwalten. Die Anwendung ist mit Java und Spring Boot erstellt und verwendet MySQL zur Datenspeicherung. Ein Dark-Mode ist ebenfalls verfügbar, um ein komfortables Leseerlebnis bei allen Lichtverhältnissen zu gewährleisten.',
      imageUrl: 'assets/CactusDiary.png',
      screenshots: [
        'assets/CactusDiary.png',
        'assets/CactusDiary2.png',
        'assets/CactusDiary3.png'
      ],
      screencastUrl: 'https://www.youtube.com/embed/gN7N5fSt-S0',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      liveUrl: null, 
      githubUrl: 'https://github.com/dein-name/projekt-beta'
    },
     {
      title: 'Neptun Online-Shop',
      description: 'Neptun ist ein voll funktionsfähiger Online-Shop für Elektronikartikel, der mit Java und Spring Boot entwickelt wurde.',
      longDescription: 'Neptun ist ein voll funktionsfähiger Online-Shop, der mit Java und Spring Boot entwickelt wurde. Die Anwendung bietet eine breite Palette von Funktionen, darunter Produktkatalog, Einkaufswagen, Bestellabwicklung und Benutzerverwaltung. Die Integration von MySQL als Datenbank ermöglicht eine effiziente Speicherung und Verwaltung von Produktdaten, Kundeninformationen und Bestellungen. Der Shop ist so konzipiert, dass er eine nahtlose und sichere Einkaufserfahrung bietet.',
      imageUrl: 'assets/Neptun3.png',
      screenshots: [
      ],
      screencastUrl: 'https://www.youtube.com/embed/TCSNMx6yv7U',
      technologies: ['Java', 'Spring Boot', 'H2 Database'],
      liveUrl: null, 
      githubUrl: 'https://github.com/dein-name/projekt-beta'
    }
  ];

  getProjects() {
    return this.projects;
  }

  getProjectByTitle(title: string) {
    return this.projects.find(project => project.title === title);
  }
}
