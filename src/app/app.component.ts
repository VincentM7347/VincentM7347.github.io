import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importiere alle Komponenten, die du verwenden möchtest
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true, // Wichtig: Deine Komponente ist "standalone"
  imports: [
    RouterOutlet, // Standardmäßig vorhanden

    // 2. Füge alle importierten Komponenten hier hinzu
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
