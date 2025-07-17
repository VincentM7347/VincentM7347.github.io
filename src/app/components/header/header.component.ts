import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false; // New property to track scroll state

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.checkScroll(); // Check initial scroll position
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    this.isScrolled = window.scrollY > 50; // Adjust 50px threshold as needed
  }

  scrollToHomeTop(): void {
    this.router.navigateByUrl('/').then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
