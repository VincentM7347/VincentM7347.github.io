import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects = [
    {
      title: 'Notely',
      description: 'Notely ist eine einfache und effiziente Notiz-App, die das schnelle Erfassen und Verwalten von Notizen ermöglicht. Ideal für den täglichen Gebrauch.',
      shortDescription: 'Dies ist eine einfache, aber voll funktionsfähige Single-Page-Application (SPA) zur Verwaltung von persönlichen Notizen. Die Anwendung ermöglicht das Erstellen, Anzeigen, Bearbeiten und Löschen von Notizen in einer reaktiven und benutzerfreundlichen Oberfläche. Dieses Projekt war ein persönliches Projekt, das ich in meiner Freizeit entwickelt habe, um meine Fähigkeiten in Vue.js zu verbessern.',
      architecture: [
        'Die Anwendung ist als reine Frontend-SPA aufgebaut:',
        'Komponenten-Architektur: Die Benutzeroberfläche ist modular in wiederverwendbare Vue-Komponenten unterteilt (z.B. NoteList zur Anzeige aller Notizen und NoteDetail zur Ansicht und Bearbeitung einer einzelnen Notiz).',
        'Client-seitiges Routing: Die Navigation zwischen den verschiedenen Ansichten (z.B. der Listenansicht und der Detailansicht) wird durch vue-router gesteuert, was eine schnelle Navigation ohne Neuladen der Seite ermöglicht.',
        'Datenpersistenz: Die Notizen werden lokal im Browser mittels localStorage gespeichert, sodass sie auch nach dem Schließen des Fensters erhalten bleiben.'
      ],
      coreFeatures: [
        'Notizen erstellen, bearbeiten und löschen',
        'Speicherung im lokalen Browser-Speicher',
        'Einfache und intuitive Benutzeroberfläche'
      ],
      imageUrl: 'assets/Notely.png',
      screenshots: [
        'assets/Notely.png'
      ],
      screencastUrl: null,
      technologies: [
        { name: 'Vue.js', iconPath: 'assets/icons/vuejs.png' },
        { name: 'JavaScript', iconPath: 'assets/icons/javascript.svg' },
        { name: 'CSS', iconPath: 'assets/icons/css.svg' },
        { name: 'Local Storage', iconPath: 'assets/icons/html.svg' } 
      ],
      liveUrl: 'https://vincentm7347.github.io/vue-notes-app/',
      githubUrl: 'https://github.com/VincentM7347/vue-notes-app' 
    },
    {
      title: 'Cactus Diary',
      description: 'Cactus Diary ist eine umfassende Tagebuchanwendung, die Benutzern einen sicheren und personalisierten Raum für ihre Gedanken bietet.',
      shortDescription: 'Dieses Projekt ist eine Full-Stack-Webanwendung zur Erstellung und Verwaltung von digitalen Tagebucheinträgen. Die Anwendung ist als moderne Single-Page-Application (SPA) konzipiert, die eine reaktive und schnelle Benutzererfahrung ohne ständiges Neuladen der Seite ermöglicht. Dies war ein Hochschulprojekt und ich habe es mit einem Team von 3 Personen entwickelt. Mein Beitrag umfasste die Implementierung des Dashboards, die Einzelansicht der Einträge und das Abrufen der Einträge von der API.',
      architecture: ['Die Anwendung folgt einer klassischen Client-Server-Architektur: ',
        'Frontend (Client): Eine im Browser ausgeführte Single-Page-App, die mit Angular entwickelt wurde. Sie ist für die gesamte Darstellung und Interaktion mit dem Benutzer zuständig.',
        'Backend (Server): Ein leichtgewichtiger Server auf Basis von Node.js und dem Express.js-Framework. Er stellt eine REST-API bereit, über die das Frontend Daten abfragen und speichern kann.',
        'API: Die Kommunikation zwischen Frontend und Backend erfolgt über eine zustandslose, JSON-basierte REST-API.'],
      coreFeatures: [
        'Einträge erstellen & bearbeiten: Benutzer können neue Tagebucheinträge über einen Rich-Text-Editor erstellen und bestehende Einträge bearbeiten.',
        'Einträge anzeigen & löschen: Alle Einträge werden in einer übersichtlichen Liste dargestellt. Einzelne Einträge können aufgerufen und gelöscht werden.',
        'Datenpersistenz: Alle Tagebucheinträge werden dauerhaft auf dem Server gespeichert.',
        'Responsives Design: Das User-Interface ist so gestaltet, dass es auf verschiedenen Bildschirmgrößen (Desktop, Tablet, Mobil) gut funktioniert.'
      ],
      imageUrl: 'assets/CactusDiary.png',
      screenshots: [
        'assets/CactusDiary.png',
        'assets/CactusDiary2.png',
        'assets/CactusDiary3.png'
      ],
      screencastUrl: 'https://www.youtube.com/embed/gN7N5fSt-S0',
      technologies: [
        { name: 'HTML5', iconPath: 'assets/icons/html.svg' },
        { name: 'CSS3', iconPath: 'assets/icons/css.svg' },
        { name: 'Lit', iconPath: 'assets/icons/lit.svg' },
        { name: 'NodeJS', iconPath: 'assets/icons/nodejs.svg' },
        { name: 'Express', iconPath: 'assets/icons/express.svg' },
        { name: 'MongoDB', iconPath: 'assets/icons/mongodb.png' }
      ],
      liveUrl: null, 
      githubUrl: 'https://github.com/VincentM7347/cactus-diary-spa'
    },
     {
      title: 'Neptun Online-Shop',
      description: 'Neptun ist ein voll funktionsfähiger Online-Shop für Elektronikartikel, welcher als Android App realisier wurde. ',
      shortDescription: 'Dieses Projekt entstand im Rahmen eines Hochschulprojekts, das von einem Team aus fünf Studierenden entwickelt wurde. Es handelt sich hierbei um den Product-Service, einen von fünf zentralen Microservices einer umfassenden E-Commerce-Plattform. Als Kernkomponente ist dieser Service für die Verwaltung aller produktbezogenen Daten – wie Produkte, Kategorien und Wunschlisten – zuständig. Er wurde als Spring Boot Anwendung realisiert und stellt eine saubere, zustandslose REST-API bereit. Die weiteren vier Services, die im Rahmen des Gesamtprojekts entwickelt wurden, sind: UserService (Nutzerverwaltung), ReviewService (Produktbewertungen), SearchAndRecommendationService (Suche und Empfehlungen), OrderService (Bestellabwicklung). ',
      architecture: [
        'Die Anwendung folgt modernen Architekturprinzipien, um Skalierbarkeit und Wartbarkeit zu gewährleisten:',
        'Microservice-Architektur: Der Service ist als eigenständiger Microservice konzipiert, der eine spezifische Geschäftsdomäne (das Produktmanagement) abbildet.',
        'Ereignisgesteuerter Ansatz (Event-Driven): Um eine lose Kopplung zu anderen Services zu erreichen, kommuniziert die Anwendung asynchron über Events mit einem RabbitMQ Message Broker.',
        'Eingehende Events: Reagiert auf Ereignisse wie OrderCreatedEvent (um den Lagerbestand zu reduzieren) oder UserDeletedEvent (um Wunschlisten zu bereinigen).',
        'Ausgehende Events: Publiziert eigene Ereignisse wie ProductCreatedEvent oder ProductUpdatedEvent, damit andere Services darauf reagieren können.',
        'REST-API: Stellt eine klar definierte, zustandslose REST-API für die synchrone Kommunikation bereit (z.B. für ein Frontend oder einen API-Gateway).',
        'Sicherheit: Die API-Endpunkte sind mittels Spring Security und JWT (JSON Web Tokens) abgesichert. Jeder Request benötigt ein valides Token.',
        'Client-Kommunikation: Nutzt einen FeignClient (ReviewServiceClient), um synchron Daten von anderen Microservices (in diesem Fall dem Review-Service) abzufragen.'
      ],
      coreFeatures: [
        'Produktverwaltung: Vollständige CRUD-Operationen (Create, Read, Update, Delete) für Produkte.',
        'Kategorieverwaltung: Vollständige CRUD-Operationen für Produktkategorien.',
        'Wunschlisten-Funktionalität: Benutzer können Produkte zu ihrer persönlichen Wunschliste hinzufügen und diese verwalten.',
        'Asynchrone Lagerbestandsverwaltung: Reduziert den Lagerbestand eines Produkts, wenn eine Bestellung über ein OrderCreatedEvent eingeht.',
        'Datenkonsistenz: Bereinigt zugehörige Daten (z.B. Wunschlisten), wenn ein Benutzer über ein UserDeletedEvent gelöscht wird.'
      ],
      imageUrl: 'assets/Neptun3.png',
      screenshots: [
      ],
      screencastUrl: 'https://www.youtube.com/embed/TCSNMx6yv7U',
      technologies: [
        { name: 'Java', iconPath: 'assets/icons/java.svg' },
        { name: 'Spring Boot', iconPath: 'assets/icons/spring.svg' },
        { name: 'RabbitMQ', iconPath: 'assets/icons/rabbitmq.svg' },
        { name: 'Rancher', iconPath: 'assets/icons/rancher.png' },
        { name: 'Docker', iconPath: 'assets/icons/docker.svg' },
        { name: 'AndroidStudio', iconPath: 'assets/icons/androidstudio.svg' },
      ],
      liveUrl: null, 
      githubUrl: 'https://github.com/VincentM7347/online-shop-product-service'
    }
  ];

  getProjects() {
    return this.projects;
  }

  getProjectByTitle(title: string) {
    return this.projects.find(project => project.title === title);
  }
}
