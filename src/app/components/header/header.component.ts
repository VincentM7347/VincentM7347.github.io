import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  scrollToHomeTop(): void {
    this.router.navigateByUrl('/').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
